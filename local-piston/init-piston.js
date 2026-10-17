const PISTON_URL = process.env.PISTON_URL || 'http://piston:2000';

const runtimes = [
  {
    packageLanguage: 'node',
    runtimeLanguage: 'javascript',
    version: '20.11.1',
  },
  {
    packageLanguage: 'python',
    runtimeLanguage: 'python',
    version: '3.12.0',
  },
];

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function getInstalledRuntimes() {
  const response = await fetch(`${PISTON_URL}/api/v2/runtimes`, {
    signal: AbortSignal.timeout(30000),
  });

  if (!response.ok) {
    throw new Error(`Piston HTTP ${response.status}`);
  }

  return response.json();
}

async function waitForPiston() {
  for (let attempt = 1; attempt <= 60; attempt++) {
    try {
      await getInstalledRuntimes();
      console.log('Piston disponible.');
      return;
    } catch (error) {
      console.log(`Esperando Piston (${attempt}/60)...`);
      await sleep(5000);
    }
  }

  throw new Error('Piston no estuvo disponible.');
}

function isInstalled(installed, runtime) {
  return installed.some(
    (item) =>
      item.language === runtime.runtimeLanguage &&
      item.version === runtime.version
  );
}

async function ensureRuntime(runtime) {
  const installed = await getInstalledRuntimes();

  if (isInstalled(installed, runtime)) {
    console.log(
      `${runtime.runtimeLanguage} ${runtime.version} ya instalado.`
    );
    return;
  }

  console.log(
    `Instalando ${runtime.runtimeLanguage} ${runtime.version}...`
  );

  // La instalación puede tardar más que el tiempo
  // de espera HTTP del cliente.
  let installationFinished = false;
  let installationError = null;

  const installation = fetch(`${PISTON_URL}/api/v2/packages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      language: runtime.packageLanguage,
      version: runtime.version,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error instalando ${runtime.runtimeLanguage}: HTTP ${response.status}`
        );
      }

      installationFinished = true;
    })
    .catch((error) => {
      installationError = error;
      console.log(
        `La petición de instalación terminó con: ${error.message}`
      );
      console.log('Verificando si Piston continúa instalando...');
    });

  const deadline = Date.now() + 20 * 60 * 1000;

  while (Date.now() < deadline) {
    await sleep(10000);

    try {
      const current = await getInstalledRuntimes();

      if (isInstalled(current, runtime)) {
        console.log(
          `${runtime.runtimeLanguage} ${runtime.version} listo.`
        );
        return;
      }
    } catch (error) {
      console.log(`Verificación temporalmente fallida: ${error.message}`);
    }

    console.log(
      `Esperando instalación de ${runtime.runtimeLanguage} ${runtime.version}...`
    );

    if (installationFinished) {
      console.log('La petición terminó; verificando registro del runtime...');
    }
  }

  await Promise.race([installation, sleep(1000)]);

  throw new Error(
    `No se verificó ${runtime.runtimeLanguage} ${runtime.version} dentro de 20 minutos.` +
    (installationError ? ` Último error: ${installationError.message}` : '')
  );
}

async function main() {
  await waitForPiston();

  for (const runtime of runtimes) {
    await ensureRuntime(runtime);
  }

  console.log('Inicialización de Piston completada.');
}

main().catch((error) => {
  console.error('Error inicializando Piston:', error.message);
  process.exit(1);
});

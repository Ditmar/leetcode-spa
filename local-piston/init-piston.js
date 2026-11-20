/* global process, console, fetch, AbortSignal, setTimeout */

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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
      console.log('Piston is available.');
      return;
    } catch {
      console.log(`Waiting for Piston (${attempt}/60)...`);
      await sleep(5000);
    }
  }

  throw new Error('Piston did not become available.');
}

function isInstalled(installed, runtime) {
  return installed.some(
    (item) => item.language === runtime.runtimeLanguage && item.version === runtime.version
  );
}

async function ensureRuntime(runtime) {
  const installed = await getInstalledRuntimes();

  if (isInstalled(installed, runtime)) {
    console.log(`${runtime.runtimeLanguage} ${runtime.version} already installed.`);
    return;
  }

  console.log(`Installing ${runtime.runtimeLanguage} ${runtime.version}...`);

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
        throw new Error(`Error installing ${runtime.runtimeLanguage}: HTTP ${response.status}`);
      }

      installationFinished = true;
    })
    .catch((error) => {
      installationError = error;
      console.log(`The installation request ended with: ${error.message}`);
      console.log('Checking whether Piston is still installing...');
    });

  const deadline = Date.now() + 20 * 60 * 1000;

  while (Date.now() < deadline) {
    await sleep(10000);

    try {
      const current = await getInstalledRuntimes();

      if (isInstalled(current, runtime)) {
        console.log(`${runtime.runtimeLanguage} ${runtime.version} is ready.`);
        return;
      }
    } catch (error) {
      console.log(`Check temporarily failed: ${error.message}`);
    }

    console.log(`Waiting for installation of ${runtime.runtimeLanguage} ${runtime.version}...`);

    if (installationFinished) {
      console.log('The request completed; checking runtime registration...');
    }
  }

  await Promise.race([installation, sleep(1000)]);

  throw new Error(
    `Could not verify ${runtime.runtimeLanguage} ${runtime.version} within 20 minutes.` +
      (installationError ? ` Last error: ${installationError.message}` : '')
  );
}

async function main() {
  await waitForPiston();

  for (const runtime of runtimes) {
    await ensureRuntime(runtime);
  }

  console.log('Piston initialization completed.');
}

main().catch((error) => {
  console.error('Error initializing Piston:', error.message);
  process.exit(1);
});

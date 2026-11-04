# LeetCode SPA — Desarrollo local con Docker

Esta guía explica cómo levantar el entorno local de LeetCode SPA mediante Docker Compose, incluyendo PostgreSQL, API Express, SPA Astro/React, RabbitMQ, Piston y un worker de prueba.

## Requisitos previos

- Git.
- Docker Desktop con Docker Compose.
- Node.js y npm para ejecutar el comando de inicio.
- Puertos disponibles: 3000, 4321, 5432, 5672, 15672 y 2000.
- Conexión a Internet para descargar las imágenes y dependencias.

## Instalación en 5 pasos

### 1. Clonar los repositorios

Los repositorios deben estar en carpetas hermanas:

```text
ticket-x/
├── leetcode-spa/
└── api-leetcode/
```

En PowerShell:

```powershell
mkdir ticket-x
cd ticket-x

git clone https://github.com/Ditmar/leetcode-spa.git
git clone https://github.com/Ditmar/api-leetcode.git

cd leetcode-spa
```

La carpeta `api-leetcode` es necesaria porque Docker Compose monta el código de la API mediante `../api-leetcode`.

### 2. Preparar las variables de entorno

Desde la carpeta `leetcode-spa`:

```powershell
Copy-Item .env.example .env
```

El archivo `.env.example` contiene valores de ejemplo para desarrollo local. No deben utilizarse sus secretos en producción.

### 3. Iniciar Docker Desktop

Abrir Docker Desktop y comprobar que el motor de Docker esté funcionando:

```powershell
docker compose version
docker compose config --quiet
```

### 4. Levantar el entorno completo

Ejecutar:

```powershell
npm run dev:all
```

Este comando utiliza Docker Compose para construir el worker y levantar los servicios.

Durante el arranque:

- PostgreSQL inicia la base de datos.
- La API instala dependencias y ejecuta `prisma generate` y `prisma migrate deploy`.
- La SPA inicia el servidor de desarrollo Astro.
- RabbitMQ inicia el sistema de colas.
- Piston inicia el servicio de ejecución de código.
- `piston-init` verifica e instala JavaScript 20.11.1 y Python 3.12.0.
- El worker espera a RabbitMQ y a la finalización exitosa de `piston-init`.

En una instalación nueva, la descarga e instalación de dependencias y lenguajes puede requerir más tiempo.

### 5. Verificar los servicios

Abrir otra terminal y ejecutar:

```powershell
docker compose ps -a
```

Direcciones locales:

| Servicio | Dirección |
|---|---|
| SPA | http://localhost:4321 |
| API | http://localhost:3000/health |
| RabbitMQ Management | http://localhost:15672 |
| Piston | http://localhost:2000/api/v2/runtimes |
| PostgreSQL | localhost:5432 |

El servicio `piston-init` debe finalizar con estado `Exited (0)`. Este estado indica que su inicialización terminó correctamente.

Comprobaciones adicionales:

```powershell
docker compose logs piston-init
docker compose logs worker
```

## Comandos útiles

Iniciar el entorno en segundo plano:

```powershell
docker compose up -d --build
```

Detener los contenedores sin eliminar los volúmenes:

```powershell
docker compose down
```

Consultar los registros:

```powershell
docker compose logs --tail 50
```

Verificar las migraciones de Prisma:

```powershell
docker compose exec api npx prisma migrate status
```

**Precaución:** `docker compose down -v` también elimina los volúmenes persistentes, incluidos los datos locales de PostgreSQL, RabbitMQ y los lenguajes instalados en Piston.

## Limitaciones y dependencias actuales

- La API depende del repositorio hermano `api-leetcode`.
- Las seis migraciones existentes se aplican correctamente, pero el esquema actual de Prisma incluye `Course` y `Enrollment`, cuyas tablas todavía no aparecen en la base de datos generada por esas migraciones.
- El repositorio API consultado no incluye actualmente un archivo ni comando de seed. La preparación de datos iniciales queda pendiente de la integración correspondiente de la API.
- El worker incluido es una prueba local de integración RabbitMQ → Piston. No está conectado al proceso real de calificación de exámenes y no guarda resultados en PostgreSQL.
- La inicialización de Piston se ha verificado con los lenguajes ya instalados; falta validar el proceso completo con un volumen nuevo y la instalación desde cero.

---

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

---

## API Client (`apiClient`)

Base HTTP client used by all service modules. Works isomorphically in Astro SSR, API routes, and React browser islands.

**Location:** `src/services/api/`

| File                 | Purpose                                                            |
| :------------------- | :----------------------------------------------------------------- |
| `apiClient.ts`       | Client factory — `get / post / put / patch / delete`               |
| `apiClient.types.ts` | `ApiResponse<T>`, `ApiError`, `RequestConfig` interfaces           |
| `apiClient.utils.ts` | `buildUrl`, `normalizeError`, `isApiError`, `statusToCode` helpers |
| `apiClient.test.ts`  | 30 unit tests (Vitest)                                             |

### Environment variables

```bash
# .env — server-only (Astro SSR / API routes)
API_BASE_URL=http://localhost:4000/api/v1

# .env — public, exposed to the browser
PUBLIC_API_BASE_URL=http://localhost:4000/api/v1
```

### Basic usage

```ts
import { apiClient } from '@/services/api/apiClient';

// GET — fully typed response
const { data } = await apiClient.get<Problem[]>('/problems');

// POST with a body
const { data: created } = await apiClient.post<Problem>('/problems', {
  title: 'Two Sum',
  difficulty: 'Easy',
});

// PUT / PATCH / DELETE
await apiClient.put('/problems/1', { difficulty: 'Medium' });
await apiClient.patch('/problems/1', { title: 'Updated' });
await apiClient.delete('/problems/1');
```

### Per-request options (`RequestConfig`)

```ts
const controller = new AbortController();

await apiClient.get('/problems', {
  headers: { 'X-Trace-Id': 'abc-123' }, // extra / override headers
  signal: controller.signal, // cancellation
  credentials: 'same-origin', // override fetch credentials mode
});

controller.abort(); // cancel in-flight request
```

### Authentication

Token resolution order (browser only — server depends on `setAuthToken`):

1. **`setAuthToken(token)`** — injected by `authService` (SVC-002)
2. **`localStorage.auth_token`** — persisted session fallback
3. **`auth_token` cookie** — SSR-set / legacy fallback
4. No `Authorization` header sent if no token is found

```ts
import { setAuthToken } from '@/services/api/apiClient';

// Called by authService after login
setAuthToken('eyJhbGciOiJIUzI1NiJ9...');

// Called on logout
setAuthToken(null);
```

### Error handling

All non-2xx responses, network failures, and JSON parse errors throw a normalised `ApiError`:

```ts
import { apiClient, isApiError } from '@/services/api/apiClient';

try {
  const { data } = await apiClient.get<Problem>('/problems/999');
} catch (err) {
  if (isApiError(err)) {
    console.error(err.status); // e.g. 404
    console.error(err.code); // e.g. "NOT_FOUND"
    console.error(err.message); // e.g. "Problem not found"
  }
}
```

| Scenario                      | `status`         | `code`                                 |
| :---------------------------- | :--------------- | :------------------------------------- |
| Non-2xx HTTP response         | HTTP status code | From body or `statusToCode()` fallback |
| Network failure (no response) | `500`            | `INTERNAL_SERVER_ERROR`                |
| Request aborted               | `0`              | `UNKNOWN_ERROR`                        |
| Valid 2xx but invalid JSON    | `500`            | `PARSE_ERROR`                          |

### Response envelope

Every endpoint is expected to return the standard envelope:

```ts
interface ApiResponse<T> {
  data: T;
  meta?: {
    totalCount?: number;
    pageCount?: number;
    currentPage?: number;
    perPage?: number;
  };
}
```

### Running the tests

```sh
npx vitest run src/services/api/apiClient.test.ts
```

## Development plan

The shared plan for API, SPA and CD is available in [docs/development-plan](docs/development-plan/README.md). It includes the development phases, review findings, all 109 ticket specifications and [links to their GitHub issues](docs/development-plan/ISSUE-LINKS.md).

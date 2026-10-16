# ADR-003: Contrato unificado de API

## Estado

**Propuesto — pendiente de aprobación del docente.**

## Contexto

Actualmente, la SPA y la API utilizan diferentes nombres, rutas y formatos para intercambiar información.

Por ejemplo, la SPA utiliza actualmente rutas como `/auth/signin` y `/users`, mientras que la API implementa `/api/auth/login` y un módulo de usuarios bajo `/api/user`.

También existen diferencias en las respuestas, errores, paginación, identificadores y valores enumerados. Estas diferencias dificultan la integración entre ambos proyectos y pueden provocar que la SPA espere información diferente a la que realmente entrega la API.

Por este motivo, se define un único contrato de API que establece reglas comunes para las rutas, respuestas, errores, paginación, enumeraciones e identificadores.

### Formatos actuales verificados

La implementación actual presenta las siguientes diferencias:

- **Errores en la API:** auth y su middleware utilizan `{ error, message }`; courses y tests utilizan `{ success: false, error }`; user utiliza `{ error }`; y el manejador global de rutas inexistentes utiliza `{ error, path }`.
- **Éxito en auth:** `login`, `me` y `refresh` devuelven directamente sus objetos, sin un envelope común. `signup` devuelve `{ message, user }` y `logout` devuelve `{ message }`.
- **Éxito en courses y tests:** utilizan principalmente `{ success: true, data }`, y las listas incluyen además `pagination`.
- **Paginación en la API:** utiliza los parámetros `page` y `limit`, y devuelve `pagination: { total, page, limit, totalPages }`.
- **IDs en la SPA:** problems, contests y topics utilizan actualmente `number`.
- **Dificultad en la SPA:** problems utiliza `Easy | Medium | Hard`, contests utiliza `easy | medium | hard` y explore utiliza `Beginner | Intermediate | Advanced`.

## Decisión

### Prefijo de API

El prefijo oficial para los endpoints de la API será:

`/api`

No se utilizará `/api/v1` en este momento.

### Rutas de autenticación

Los nombres oficiales para las operaciones de autenticación serán:

- `POST /api/auth/login`
- `POST /api/auth/signup`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `GET /api/auth/me`

Los nombres `signin` y `signout` utilizados actualmente por la SPA deberán ser reemplazados por `login` y `logout`.

De acuerdo con la estrategia BFF definida en X-002, el navegador se comunicará con las rutas de Astro bajo `/api/auth/...`.

El refresh de tokens será administrado por el servidor Astro y no requerirá que el navegador manipule directamente el refresh token.

### Rutas de usuario

Las rutas del módulo de usuario utilizarán el recurso `users` en plural.

Entre las rutas definidas se encuentran:

- `GET /api/users/me`
- `GET /api/users/:id`
- `PUT /api/users/me`
- `GET /api/users/me/preferences`
- `PUT /api/users/me/preferences`
- `GET /api/users/me/stats`
- `POST /api/users/me/avatar`
- `DELETE /api/users/me`

El módulo actual bajo `/api/user` no representa el contrato definitivo del módulo de perfil de usuario.

La ruta `/api/users/:id/stats` no se define en este ADR porque actualmente no existe en la API y tampoco está contemplada en API-032.

### Respuestas exitosas

Las respuestas exitosas utilizarán `data` como campo principal.

Cuando sea necesario proporcionar información adicional sobre la respuesta, se utilizará `meta`.

La estructura general será:

```json
{
  "data": {}
}
```

Cuando exista información adicional:

```json
{
  "data": {},
  "meta": {}
}
```

Las operaciones que utilicen el estado HTTP `204 No Content` no devolverán cuerpo.

### Respuestas de error

Los errores utilizarán un formato uniforme compuesto por:

- `code`
- `message`
- `details` opcional

El estado del error se comunicará mediante el código de estado HTTP y no será necesario repetirlo dentro del cuerpo de la respuesta.

Los valores de `code` utilizarán mayúsculas y guion bajo (`SCREAMING_SNAKE_CASE`).

Algunos códigos base son:

- `BAD_REQUEST`
- `UNAUTHORIZED`
- `FORBIDDEN`
- `NOT_FOUND`
- `VALIDATION_ERROR`
- `INTERNAL_SERVER_ERROR`

La lista no es exhaustiva. Cada módulo podrá definir códigos específicos siguiendo el mismo formato.

### Paginación

Las solicitudes paginadas utilizarán:

- `page`
- `pageSize`

Las respuestas paginadas utilizarán el campo `meta` con:

- `page`
- `pageSize`
- `total`
- `totalPages`

De esta forma, no se utilizarán nombres diferentes como `limit`, `perPage` o `pagination` para representar los mismos conceptos.

### Enumeraciones

Los valores de enums enviados mediante la API utilizarán minúsculas.

Por ejemplo, para dificultad:

```text
easy
medium
hard
```

Para los niveles utilizados por explore:

```text
beginner
intermediate
advanced
```

El objetivo es evitar representar el mismo concepto con variantes de casing como `EASY`, `Easy` y `easy`.

### Identificadores

Los nuevos módulos utilizarán UUID representados como `string`.

Los tipos compartidos entre SPA y API deberán ajustarse a esta decisión cuando se implementen los nuevos módulos correspondientes.

### Fuente de verdad

El archivo OpenAPI del repositorio `api-leetcode` será la fuente de verdad del contrato de API.

Este documento deberá contener las rutas, parámetros, cuerpos de las solicitudes, estructuras de respuesta y errores soportados.

Los clientes de la API deberán utilizar esta definición como referencia para evitar contratos diferentes entre proyectos.

## Justificación

- Se utiliza `/api` porque es el prefijo que ya utiliza la API actual. Introducir `/api/v1` obligaría a modificar las rutas existentes sin una necesidad actual definida.

- Se utilizan `login` y `logout` porque son los nombres implementados actualmente por la API y también son los nombres establecidos para las rutas BFF en SPA-001 y SPA-036.

- Se utiliza `users` en plural porque las rutas definitivas del perfil previstas en API-032 utilizan `/api/users/...`, mientras que `/api/user` corresponde a la implementación actual que será reemplazada.

- Se utilizan `data` y `meta` para que las respuestas exitosas tengan una estructura predecible. `meta` permite incluir información adicional, como la paginación, sin modificar el dato principal.

- Los errores utilizan `code`, `message` y `details` para que la SPA pueda identificar el tipo de error sin depender únicamente del texto presentado al usuario.

- El código de estado HTTP no se duplica dentro del cuerpo del error porque ya forma parte de la respuesta HTTP.

- Se utilizan `page` y `pageSize` para que la solicitud y la respuesta utilicen nombres consistentes para los conceptos de paginación.

- Los enums se normalizan en minúsculas para evitar diferencias de formato entre módulos.

- Los nuevos identificadores utilizan UUID representados como `string` para mantener una estrategia uniforme en los nuevos módulos de la API.

- OpenAPI será la fuente de verdad para que SPA y API consulten una única definición del contrato.

## Ejemplos del contrato

### Respuesta exitosa

Una operación completada correctamente devuelve el resultado dentro de `data`.

```json
{
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Example User",
    "email": "user@example.com"
  }
}
```

### Respuesta de error

Una operación que no pueda completarse devolverá el código de estado HTTP correspondiente y un cuerpo con un formato uniforme.

Por ejemplo, una respuesta HTTP `404 Not Found` puede devolver:

```json
{
  "code": "USER_NOT_FOUND",
  "message": "User not found"
}
```

Cuando sea necesario proporcionar información adicional:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "Invalid request data",
  "details": {
    "email": "Invalid email format"
  }
}
```

El campo `details` es opcional.

### Respuesta paginada

Las listas paginadas utilizan `data` para los elementos y `meta` para la información de paginación.

```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Example item"
    }
  ],
  "meta": {
    "page": 1,
    "pageSize": 20,
    "total": 45,
    "totalPages": 3
  }
}
```

Las solicitudes paginadas utilizarán los parámetros `page` y `pageSize`.

| Campo | Significado |
| --- | --- |
| `page` | Página solicitada. |
| `pageSize` | Cantidad de elementos por página. |
| `total` | Cantidad total de elementos disponibles. |
| `totalPages` | Cantidad total de páginas disponibles. |

## Mapeo de servicios SPA a API

La siguiente tabla muestra las llamadas realizadas actualmente por los servicios de la SPA y su correspondencia con los endpoints disponibles actualmente en `api-leetcode`.

El valor `missing` indica que actualmente no existe un endpoint equivalente en la API.

Cuando existe una funcionalidad similar pero la ruta, los datos de entrada o la respuesta no coinciden completamente, la diferencia se indica en la columna de observaciones.

| Área | Método | Llamada SPA actual | Endpoint API actual | Observación |
| --- | --- | --- | --- | --- |
| Auth | `POST` | `/auth/signin` | `/api/auth/login` | Existe con otro nombre. SPA-001 establece que la SPA debe adoptar `login`. |
| Auth | `POST` | `/auth/signup` | `/api/auth/signup` | Existe. La SPA envía `username`; la API actual espera `name`. |
| Auth | `POST` | `/auth/signout` | `/api/auth/logout` | Existe con otro nombre. La API actual recibe `refreshToken`. |
| Auth | `POST` | `/auth/refresh` | `/api/auth/refresh` | Existe. La API actual recibe `refreshToken`. El BFF administrará el refresh del navegador. |
| Auth | `GET` | `/auth/me` | `/api/auth/me` | Existe, pero la estructura de respuesta todavía difiere de la esperada por la SPA. |
| Problems | `GET` | `/problems` | `missing` | El módulo todavía no existe en la API actual. |
| Problems | `GET` | `/problems/:id` | `missing` | El módulo todavía no existe en la API actual. |
| Problems | `GET` | `/problems/tags` | `missing` | El módulo todavía no existe en la API actual. |
| Problems | `GET` | `/problems/stats` | `missing` | El módulo todavía no existe en la API actual. |
| Submissions | `POST` | `/submissions/run` | `missing` | El módulo todavía no existe en la API actual. |
| Submissions | `POST` | `/submissions` | `missing` | El módulo todavía no existe en la API actual. |
| Submissions | `GET` | `/submissions` | `missing` | El módulo todavía no existe en la API actual. |
| Submissions | `GET` | `/submissions/:id` | `missing` | El módulo todavía no existe en la API actual. |
| Contests | `GET` | `/contests` | `missing` | El módulo todavía no existe en la API actual. |
| Contests | `GET` | `/contests/:id` | `missing` | El módulo todavía no existe en la API actual. |
| Contests | `GET` | `/contests/:id/leaderboard` | `missing` | El módulo todavía no existe en la API actual. |
| Contests | `POST` | `/contests/:id/register` | `missing` | El módulo todavía no existe en la API actual. |
| Contests | `DELETE` | `/contests/:id/register` | `missing` | El módulo todavía no existe en la API actual. |
| Explore | `GET` | `/explore/topics` | `missing` | `/explore` es la ruta base por defecto de la SPA; el módulo todavía no existe en la API actual. |
| Explore | `GET` | `/explore/topics/:id` | `missing` | El módulo todavía no existe en la API actual. |
| Explore | `GET` | `/explore/metadata` | `missing` | El módulo todavía no existe en la API actual. |
| Explore | `PATCH` | `/explore/topics/:topicId/problems/:problemId` | `missing` | El módulo todavía no existe en la API actual. |
| User | `GET` | `/users/me` | `missing` | La API actual no tiene este endpoint; está definido para implementación en API-032. |
| User | `GET` | `/users/:id` | `/api/user/:id` | Existe funcionalidad similar en el módulo actual, pero la ruta definitiva definida en API-032 será `/api/users/:id`. |
| User | `GET` | `/users/me/stats` | `missing` | Está definido para implementación en API-032. |
| User | `GET` | `/users/:id/stats` | `missing` | No existe actualmente un endpoint equivalente y no está definido en API-032. |
| User | `GET` | `/users/me/preferences` | `missing` | Está definido para implementación en API-032. |
| User | `PUT` | `/users/me` | `missing` | Está definido para implementación en API-032. |
| User | `PUT` | `/users/me/preferences` | `missing` | Está definido para implementación en API-032. |
| User | `POST` | `/users/me/avatar` | `missing` | Está definido para implementación en API-032. |
| User | `DELETE` | `/users/me` | `missing` | Está definido para implementación en API-032. |

La API actual también dispone de las rutas `GET /api/user`, `GET /api/user/:id`, `POST /api/user`, `PUT /api/user/:id` y `DELETE /api/user/:id`.

Además, la API tiene actualmente los módulos `courses` y `tests`, pero no existen servicios equivalentes dentro de `leetcode-spa/src/services`.

## Alternativas consideradas

- **Utilizar `/api/v1` como prefijo:** se descartó porque obligaría a modificar las rutas existentes sin existir actualmente una necesidad de versionado del prefijo.

- **Mantener los diferentes formatos de respuesta actuales:** se descartó porque obligaría a cada consumidor a conocer el formato específico utilizado por cada módulo.

- **Mantener `limit` y `pagination`:** se descartó para utilizar `pageSize` y `meta` de forma consistente entre SPA y API.

- **Mantener diferentes formatos para enums:** se descartó para evitar valores equivalentes como `EASY`, `Easy` y `easy`.

## Consecuencias

A partir de esta decisión:

- La API deberá adaptar sus respuestas al envelope definido en este ADR. Este trabajo corresponde a API-042 (`api-leetcode#96`).

- La API deberá cambiar la paginación de `limit` y `pagination` a `pageSize` y `meta` cuando se aplique el contrato mediante API-042.

- Los errores de la API deberán incorporar un campo `code` y utilizar el formato uniforme definido en este ADR.

- El documento OpenAPI será creado y mantenido mediante API-039 (`api-leetcode#93`).

- La SPA deberá utilizar tipos compartidos o derivados del contrato OpenAPI mediante SPA-013 (`leetcode-spa#388`).

- Los tipos de los nuevos módulos deberán reflejar UUID representados como `string` cuando dichos módulos sean implementados.

- Las dificultades y demás enums compartidos deberán utilizar el casing definido por este ADR.

- Las rutas de autenticación de la SPA deberán alinearse con `login` y `logout`, según SPA-001 (`leetcode-spa#376`).

- El módulo de perfil definitivo utilizará rutas `/api/users/...`, según API-032 (`api-leetcode#86`).

- Las diferencias actuales entre la SPA y la API deberán resolverse progresivamente mediante los tickets de implementación correspondientes.

## Issues relacionados

- X-003 — `leetcode-spa#368`: definición del contrato unificado de API.
- SPA-001 — `leetcode-spa#376`: adaptación de las rutas de autenticación.
- SPA-013 — `leetcode-spa#388`: tipos compartidos de API.
- SPA-036 — `leetcode-spa#411`: rutas de autenticación y proxy BFF de Astro.
- API-032 — `api-leetcode#86`: endpoints definitivos del perfil de usuario.
- API-039 — `api-leetcode#93`: OpenAPI y documentación de la API.
- API-042 — `api-leetcode#96`: aplicación del formato uniforme de respuestas y paginación.

## Aprobación

Este ADR requiere aprobación del docente antes de considerarse aceptado.

Una vez aprobado, el estado deberá cambiar de **Propuesto** a **Aceptado**.
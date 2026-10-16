# ADR-003: Unified API contract

## Status

**Proposed — pending teacher approval.**

## Context

The SPA and the API currently use different names, routes and formats to exchange information.

For example, the SPA currently uses routes such as `/auth/signin` and `/users`, while the API implements `/api/auth/login` and currently has a user module under `/api/user`.

There are also differences in success responses, error responses, pagination, identifiers and enum values. These differences make integration between both projects more difficult because the SPA may expect information in a different format from the one actually returned by the API.

For this reason, this ADR defines one unified API contract with common rules for routes, success responses, error responses, pagination, enums and identifiers.

The authentication and token flow follows the BFF decision recorded in [X-002](https://github.com/Ditmar/leetcode-spa/issues/367).

`ADR-002` is not currently present in `docs/decisions`. This ADR therefore references the decision recorded in the X-002 ticket and does not attempt to recreate or replace ADR-002.

### Current verified differences

The current implementations contain the following differences:

- **API errors:** auth and its middleware use `{ error, message }`; courses and tests use `{ success: false, error }`; user uses `{ error }`; and the global not-found handler uses `{ error, path }`.
- **Auth success responses:** `login`, `me` and `refresh` return their objects directly without a common envelope. `signup` returns `{ message, user }` and `logout` returns `{ message }`.
- **Courses and tests success responses:** they mainly use `{ success: true, data }`, and list responses also include `pagination`.
- **API pagination:** it uses query parameters `page` and `limit`, and returns `pagination: { total, page, limit, totalPages }`.
- **SPA identifiers:** problems, contests and topics currently use numeric identifiers in several types and routes.
- **SPA difficulty values:** problems use `Easy | Medium | Hard`, contests use `easy | medium | hard`, and explore uses `Beginner | Intermediate | Advanced`.
- **Authentication user name:** the SPA uses `username`, while the current API authentication implementation uses `name`.
- **Authentication expiration:** the SPA represents `expiresAt` as a number and compares it directly with `Date.now()`.

## Decision

### API prefix

The official public API prefix is:

```text
/api
```

`/api/v1` is not introduced at this stage.

`API_BASE_URL` represents the API origin only and does not contain the `/api` prefix.

For example:

```text
API_BASE_URL=https://api.example.com
```

A request to the problems endpoint is therefore sent by Astro to:

```text
https://api.example.com/api/problems
```

### Browser, Astro and API flow

Following [X-002](https://github.com/Ditmar/leetcode-spa/issues/367), Astro acts as a Backend for Frontend (BFF).

The browser does not call the external API directly.

The request flow is:

```text
Browser
  |
  | /api/...
  v
Astro BFF
  |
  | API_BASE_URL + /api/...
  v
api-leetcode
```

For example:

```text
Browser:
GET /api/problems

Astro:
GET ${API_BASE_URL}/api/problems
```

The browser calls `/api/...` on the Astro application.

Astro forwards allowed requests to the API origin configured through `API_BASE_URL`, preserving the `/api/...` contract path.

The endpoint mapping defined later in this ADR is the source for the proxy allow-list implemented by [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411).

### Authentication routes

The official authentication operations are:

- `POST /api/auth/login`
- `POST /api/auth/signup`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `GET /api/auth/me`

The current SPA route names `signin` and `signout` must be replaced by `login` and `logout`.

This route migration is tracked by [SPA-001](https://github.com/Ditmar/leetcode-spa/issues/376).

### Authentication user field

The shared authentication user field is:

```text
username
```

`username` is used instead of `name`.

Therefore, authentication-related request and response types use `username`.

For example, signup uses:

```json
{
  "username": "example-user",
  "email": "user@example.com",
  "password": "example-password"
}
```

The profile domain may contain other display-oriented fields, but they do not replace the authentication `username`.

The API changes required for this decision are tracked by [API-028](https://github.com/Ditmar/api-leetcode/issues/82).

### Authentication expiration

`expiresAt` is represented as a Unix timestamp in **milliseconds**.

For example:

```json
{
  "expiresAt": 1792147200000
}
```

This format is selected because the SPA already represents `expiresAt` as a number and compares it directly with `Date.now()`.

Therefore, no conversion from an ISO date or Unix seconds is required before that comparison.

### Authentication responses

Authentication responses from `api-leetcode` use the same success envelope defined by this ADR.

For example, the API-to-Astro login response has the following shape:

```json
{
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "username": "example-user",
      "email": "user@example.com",
      "role": "user"
    },
    "accessToken": "access-token",
    "refreshToken": "refresh-token",
    "expiresAt": 1792147200000
  }
}
```

The API remains responsible for:

- validating credentials;
- creating access tokens;
- creating refresh tokens;
- validating refresh tokens;
- refreshing authentication tokens.

Astro receives those tokens and stores them in `HttpOnly` cookies according to [X-002](https://github.com/Ditmar/leetcode-spa/issues/367).

The browser must never receive or manipulate the access token or refresh token directly.

The browser-facing Astro authentication routes also follow the common success and error envelope defined by this ADR, but they must not forward sensitive token values to browser JavaScript.

The exact sanitized browser session payload and cookie behavior are implemented by [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411).

### User routes

The definitive user resource uses `users` in plural.

The agreed user routes are:

- `GET /api/users/me`
- `GET /api/users/:id`
- `PUT /api/users/me`
- `GET /api/users/me/preferences`
- `PUT /api/users/me/preferences`
- `GET /api/users/me/stats`
- `POST /api/users/me/avatar`
- `DELETE /api/users/me`

The current API module under `/api/user` does not represent the definitive user profile contract.

The definitive profile endpoints are tracked by [API-032](https://github.com/Ditmar/api-leetcode/issues/86).

### `/users/:id/stats`

The SPA currently contains support for:

```text
/users/:id/stats
```

There is no corresponding API endpoint, and [API-032](https://github.com/Ditmar/api-leetcode/issues/86) does not define one.

The decision is to **remove this unused variant from the SPA** when the user service is aligned with this contract.

The supported statistics route remains:

```text
GET /api/users/me/stats
```

A public statistics endpoint for another user must not be added implicitly.

If public statistics for another user become a product requirement later, that functionality must receive its own implementation ticket and must be added to OpenAPI.

### Successful responses

Successful responses that contain a body use `data` as the main field.

When additional response metadata is required, `meta` is used.

The standard successful response shape is:

```json
{
  "data": {}
}
```

When metadata is required:

```json
{
  "data": {},
  "meta": {}
}
```

The standard success status codes are:

- `200 OK` for successful reads and updates that return a body.
- `201 Created` for successful creation operations.
- `204 No Content` for successful operations that intentionally return no body.

A `204 No Content` response does not contain a JSON envelope or response body.

### Error responses

Errors use a uniform format containing:

- `code`;
- `message`;
- optional `details`.

The standard shape is:

```json
{
  "code": "ERROR_CODE",
  "message": "Human-readable message"
}
```

When additional machine-readable information is required:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "Invalid request data",
  "details": {
    "email": "Invalid email format"
  }
}
```

`details` is optional.

The HTTP status is communicated by the HTTP response status code and is not duplicated inside the JSON body.

Error `code` values use `SCREAMING_SNAKE_CASE`.

Shared error codes include:

- `BAD_REQUEST`
- `UNAUTHORIZED`
- `FORBIDDEN`
- `NOT_FOUND`
- `VALIDATION_ERROR`
- `INTERNAL_SERVER_ERROR`

This shared list is not exhaustive.

Individual modules may define more specific error codes using the same naming convention.

The recommended module-specific format is:

```text
<RESOURCE>_<CONDITION>
```

For example:

```text
USER_NOT_FOUND
PROBLEM_NOT_FOUND
```

Module-specific error codes must be documented in OpenAPI.

The global error handling changes are tracked by [API-003](https://github.com/Ditmar/api-leetcode/issues/57).

Structured error classes and stable error `code` values are tracked by [API-007](https://github.com/Ditmar/api-leetcode/issues/61).

### Pagination

Paginated requests use the following query parameters:

- `page`
- `pageSize`

Paginated responses use `meta` containing:

- `page`
- `pageSize`
- `total`
- `totalPages`

The standard paginated response shape is:

```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Example item"
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

The corresponding request uses:

```text
?page=1&pageSize=20
```

Names such as `limit`, `perPage` and `pagination` are not part of the final contract.

Migration of the existing response and pagination formats is tracked by [API-042](https://github.com/Ditmar/api-leetcode/issues/96).

### Enum values

Enum values exposed through the JSON API use lowercase values.

For difficulty:

```text
easy
medium
hard
```

For explore levels:

```text
beginner
intermediate
advanced
```

The conversion to lowercase occurs at the **API transport/mapping boundary**.

For example:

```text
Persistence/domain value: EASY
API JSON value:          easy
```

The database or internal domain model does not need to use the same casing as the public JSON contract.

The SPA consumes the lowercase API values.

UI-specific labels may be generated by presentation mappers when necessary.

For example, the API may return:

```text
easy
```

while a presentation component may display:

```text
Easy
```

The displayed label does not change the API contract.

### Identifiers

UUID strings are the canonical identifiers for new API modules.

For problems, three different concepts must remain separate:

- `id` is the canonical UUID.
- `slug` is the human-readable problem identifier.
- `number` is the number displayed in the UI and used for ordering.

Example:

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "slug": "two-sum",
  "number": 1,
  "title": "Two Sum"
}
```

The problem detail endpoint is:

```text
GET /api/problems/:id
```

In this route, `:id` represents the UUID.

It does **not** represent the displayed problem number.

`slug` remains part of the problem representation but is not implicitly treated as the `:id` route parameter.

A slug-based endpoint may only be introduced if it is explicitly defined later in OpenAPI.

The SPA currently uses numeric problem identifiers in some places. Those types and calls must be migrated when the problems API is implemented through [API-029](https://github.com/Ditmar/api-leetcode/issues/83) and the corresponding SPA work.

### OpenAPI source of truth

The OpenAPI document maintained in `api-leetcode` through [API-039](https://github.com/Ditmar/api-leetcode/issues/93) is the source of truth for the executable API contract.

OpenAPI must document:

- routes;
- HTTP methods;
- path parameters;
- query parameters;
- request bodies;
- success responses;
- error responses;
- pagination;
- enum values;
- identifiers;
- module-specific error codes.

SPA and API implementations must follow the OpenAPI contract instead of independently defining incompatible representations.

### Migration strategy

The transition to the X-003 contract uses **one compatibility release**.

The migration works as follows:

1. New API endpoints use the X-003 contract immediately.
2. Existing API endpoints are migrated progressively through [API-042](https://github.com/Ditmar/api-leetcode/issues/96).
3. During one compatibility release, SPA parsing or mapping code may temporarily accept both legacy response shapes and X-003 response shapes for endpoints that are still being migrated.
4. An API endpoint that has already been migrated emits only the X-003 format.
5. The API does not need to return two different response envelopes simultaneously.
6. After all required API endpoints have migrated, legacy-format compatibility is removed from the SPA.

This strategy avoids breaking existing SPA calls while API endpoints are migrated incrementally.

Error parsing during this transition is tracked by [SPA-006](https://github.com/Ditmar/leetcode-spa/issues/381).

Shared API types, migration mappers and mocks are tracked by [SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388).

## Rationale

- `/api` is retained because it is already the API prefix and there is currently no versioning requirement that justifies introducing `/api/v1`.
- `login` and `logout` align the SPA with the API and the BFF design.
- `users` in plural aligns the definitive user profile contract with [API-032](https://github.com/Ditmar/api-leetcode/issues/86).
- `username` aligns the authentication contract with the current SPA representation and prevents `name` and `username` from remaining competing authentication fields.
- Unix time in milliseconds aligns `expiresAt` with the SPA representation and permits direct comparisons with `Date.now()`.
- `{ data, meta? }` provides one predictable successful-response shape.
- `{ code, message, details? }` allows clients to identify errors without depending on human-readable text.
- HTTP status codes are not duplicated in the JSON body because they are already part of the HTTP response.
- `page` and `pageSize` provide one pagination vocabulary for requests and responses.
- Lowercase JSON enums eliminate casing differences between modules while allowing persistence models to retain their own internal representations.
- UUID strings provide canonical identifiers for new API resources.
- Separating problem `id`, `slug` and `number` prevents the UI display number from becoming an accidental resource identifier.
- OpenAPI provides one executable source of truth shared by the SPA and API.
- One compatibility release allows the contract to be adopted progressively without requiring one atomic deployment of every SPA and API change.

## Contract examples

### Successful response

A successful operation returns its result inside `data`.

```json
{
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "username": "example-user",
    "email": "user@example.com"
  }
}
```

### Error response

An HTTP `404 Not Found` response may return:

```json
{
  "code": "USER_NOT_FOUND",
  "message": "User not found"
}
```

`USER_NOT_FOUND` is a module-specific error code.

Module-specific error codes use `SCREAMING_SNAKE_CASE` and must be documented in OpenAPI.

When additional information is required:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "Invalid request data",
  "details": {
    "email": "Invalid email format"
  }
}
```

### Paginated response

A paginated response uses `data` for the items and `meta` for pagination information.

```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Example item"
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

The corresponding request uses:

```text
?page=1&pageSize=20
```

| Field        | Meaning                             |
| ------------ | ----------------------------------- |
| `page`       | Requested page.                     |
| `pageSize`   | Number of elements per page.        |
| `total`      | Total number of available elements. |
| `totalPages` | Total number of available pages.    |

## SPA service to API mapping

The following table maps the calls currently represented by SPA services to the agreed API contract.

This table is also the source for the proxy allow-list implemented by [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411).

The value `missing` means that no current API endpoint owns that functionality.

When similar functionality exists but the route, input or response differs from the agreed contract, that difference is described in the last column.

| Area        | Method   | Current SPA service call                       | Agreed API endpoint or decision | Status / owner                                                                                                                                                                                                                    |
| ----------- | -------- | ---------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auth        | `POST`   | `/auth/signin`                                 | `/api/auth/login`               | Rename the SPA operation to `login`. See [SPA-001](https://github.com/Ditmar/leetcode-spa/issues/376) and [API-028](https://github.com/Ditmar/api-leetcode/issues/82).                                                            |
| Auth        | `POST`   | `/auth/signup`                                 | `/api/auth/signup`              | Use `username` instead of `name`. See [API-028](https://github.com/Ditmar/api-leetcode/issues/82).                                                                                                                                |
| Auth        | `POST`   | `/auth/signout`                                | `/api/auth/logout`              | Astro manages token cookies. See [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411).                                                                                                                                    |
| Auth        | `POST`   | `/auth/refresh`                                | `/api/auth/refresh`             | Astro performs refresh and does not expose the refresh token to browser JavaScript. See [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411).                                                                             |
| Auth        | `GET`    | `/auth/me`                                     | `/api/auth/me`                  | API response follows the X-003 envelope; Astro exposes only non-sensitive browser session data. See [API-028](https://github.com/Ditmar/api-leetcode/issues/82) and [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411). |
| Problems    | `GET`    | `/problems`                                    | `/api/problems`                 | Planned by [API-029](https://github.com/Ditmar/api-leetcode/issues/83).                                                                                                                                                           |
| Problems    | `GET`    | `/problems/:id`                                | `/api/problems/:id`             | `:id` is a UUID. Planned by [API-029](https://github.com/Ditmar/api-leetcode/issues/83).                                                                                                                                          |
| Problems    | `GET`    | `/problems/tags`                               | `/api/problems/tags`            | Planned as part of the problems module in [API-029](https://github.com/Ditmar/api-leetcode/issues/83).                                                                                                                            |
| Problems    | `GET`    | `/problems/stats`                              | `/api/problems/stats`           | Planned as part of the problems module in [API-029](https://github.com/Ditmar/api-leetcode/issues/83).                                                                                                                            |
| Submissions | `POST`   | `/submissions/run`                             | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Submissions | `POST`   | `/submissions`                                 | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Submissions | `GET`    | `/submissions`                                 | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Submissions | `GET`    | `/submissions/:id`                             | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Contests    | `GET`    | `/contests`                                    | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Contests    | `GET`    | `/contests/:id`                                | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Contests    | `GET`    | `/contests/:id/leaderboard`                    | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Contests    | `POST`   | `/contests/:id/register`                       | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Contests    | `DELETE` | `/contests/:id/register`                       | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Explore     | `GET`    | `/explore/topics`                              | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Explore     | `GET`    | `/explore/topics/:id`                          | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Explore     | `GET`    | `/explore/metadata`                            | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| Explore     | `PATCH`  | `/explore/topics/:topicId/problems/:problemId` | `missing`                       | No matching API endpoint currently owns this SPA call.                                                                                                                                                                            |
| User        | `GET`    | `/users/me`                                    | `/api/users/me`                 | Planned by [API-032](https://github.com/Ditmar/api-leetcode/issues/86).                                                                                                                                                           |
| User        | `GET`    | `/users/:id`                                   | `/api/users/:id`                | Replaces the current singular `/api/user/:id` route. See [API-032](https://github.com/Ditmar/api-leetcode/issues/86).                                                                                                             |
| User        | `GET`    | `/users/me/stats`                              | `/api/users/me/stats`           | Planned by [API-032](https://github.com/Ditmar/api-leetcode/issues/86).                                                                                                                                                           |
| User        | `GET`    | `/users/:id/stats`                             | Remove from SPA                 | No API endpoint or implementation ticket owns this route. It is not part of the agreed contract.                                                                                                                                  |
| User        | `GET`    | `/users/me/preferences`                        | `/api/users/me/preferences`     | Planned by [API-032](https://github.com/Ditmar/api-leetcode/issues/86).                                                                                                                                                           |
| User        | `PUT`    | `/users/me`                                    | `/api/users/me`                 | Planned by [API-032](https://github.com/Ditmar/api-leetcode/issues/86).                                                                                                                                                           |
| User        | `PUT`    | `/users/me/preferences`                        | `/api/users/me/preferences`     | Planned by [API-032](https://github.com/Ditmar/api-leetcode/issues/86).                                                                                                                                                           |
| User        | `POST`   | `/users/me/avatar`                             | `/api/users/me/avatar`          | Planned by [API-032](https://github.com/Ditmar/api-leetcode/issues/86).                                                                                                                                                           |
| User        | `DELETE` | `/users/me`                                    | `/api/users/me`                 | Planned by [API-032](https://github.com/Ditmar/api-leetcode/issues/86).                                                                                                                                                           |

The current API also contains the legacy routes:

- `GET /api/user`
- `GET /api/user/:id`
- `POST /api/user`
- `PUT /api/user/:id`
- `DELETE /api/user/:id`

These legacy singular `user` routes do not define the final profile contract.

The API currently also contains `courses` and `tests` modules, but there are no equivalent services in `leetcode-spa/src/services` included in the SPA mapping above.

## Alternatives considered

- **Use `/api/v1` as the prefix:** rejected because there is currently no versioning requirement that justifies changing the existing paths.
- **Keep the current different success-response formats:** rejected because every consumer would need module-specific response handling.
- **Keep the current different error-response formats:** rejected because SPA logic would need to depend on module-specific error bodies.
- **Keep `limit` and `pagination`:** rejected in favor of `pageSize` and `meta`.
- **Keep multiple enum casing conventions:** rejected to avoid equivalent values such as `EASY`, `Easy` and `easy`.
- **Use the problem `number` as the resource identifier:** rejected because the display/order number and the canonical resource identifier have different responsibilities.
- **Treat `slug` as `/problems/:id`:** rejected because `:id` is the canonical UUID in this contract.
- **Create `/users/:id/stats` now:** rejected because no current API ticket owns the functionality and it is not required by the agreed profile contract.
- **Require one atomic SPA and API migration:** rejected because existing endpoints can be migrated safely through one compatibility release.

## Consequences

As a result of this decision:

- [API-003](https://github.com/Ditmar/api-leetcode/issues/57) must align the global JSON error handler with `{ code, message, details? }`.
- [API-007](https://github.com/Ditmar/api-leetcode/issues/61) must provide structured error classes and stable error `code` values.
- [API-028](https://github.com/Ditmar/api-leetcode/issues/82) must align authentication with `username`, millisecond `expiresAt` values and the standard `data` envelope.
- [API-029](https://github.com/Ditmar/api-leetcode/issues/83) must implement problem identifiers, filters and pagination according to this contract, including UUID `id`, `slug` and display/order `number`.
- [API-032](https://github.com/Ditmar/api-leetcode/issues/86) must implement the definitive `/api/users/...` profile routes.
- [API-039](https://github.com/Ditmar/api-leetcode/issues/93) maintains OpenAPI as the executable source of truth.
- [API-042](https://github.com/Ditmar/api-leetcode/issues/96) migrates existing success, error and pagination formats to the X-003 contract.
- [SPA-001](https://github.com/Ditmar/leetcode-spa/issues/376) aligns authentication route names with `login` and `logout`.
- [SPA-006](https://github.com/Ditmar/leetcode-spa/issues/381) must parse the X-003 error format while preserving temporary legacy compatibility during the migration release.
- [SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388) must provide shared or generated API types, UI mappers and mocks that follow this contract.
- [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411) implements the Astro BFF, token handling and proxy allow-list using the endpoint mapping defined in this ADR.
- The unused `/users/:id/stats` SPA variant must be removed when the user service is aligned with this contract.
- Existing legacy response handling must be removed after the compatibility release and completion of the required API migrations.
- New endpoints must use the X-003 contract directly instead of introducing new legacy response formats.

## Related issues

- [X-002 — Decide how login and tokens work between SPA and API](https://github.com/Ditmar/leetcode-spa/issues/367)
- [X-003 — Define one API contract](https://github.com/Ditmar/leetcode-spa/issues/368)
- [SPA-001 — Adapt authentication routes](https://github.com/Ditmar/leetcode-spa/issues/376)
- [SPA-006 — Fix problems in apiClient](https://github.com/Ditmar/leetcode-spa/issues/381)
- [SPA-013 — Use one set of API types and add a mock API](https://github.com/Ditmar/leetcode-spa/issues/388)
- [SPA-036 — Astro BFF and proxy](https://github.com/Ditmar/leetcode-spa/issues/411)
- [API-003 — Global JSON error handler](https://github.com/Ditmar/api-leetcode/issues/57)
- [API-007 — Structured API errors](https://github.com/Ditmar/api-leetcode/issues/61)
- [API-028 — Align authentication with the SPA](https://github.com/Ditmar/api-leetcode/issues/82)
- [API-029 — Problems API](https://github.com/Ditmar/api-leetcode/issues/83)
- [API-032 — User profile endpoints](https://github.com/Ditmar/api-leetcode/issues/86)
- [API-039 — OpenAPI source of truth](https://github.com/Ditmar/api-leetcode/issues/93)
- [API-042 — Unified response envelope and pagination](https://github.com/Ditmar/api-leetcode/issues/96)

## Approval

This ADR requires teacher approval before it can be considered accepted.

After approval, the status must change from **Proposed** to **Accepted**.

# API-025: Improve signup, password rules and email handling

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Security |
| Priority | P2 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-007 |

## Problem

- The password rule is only "at least 6 characters". There is no maximum. Bcrypt only uses the first 72 bytes, so very long passwords are cut silently.
- Emails are not made lowercase. `Ana@mail.com` and `ana@mail.com` can be two accounts.
- Signup does "find by email, then create". Two parallel requests can both pass. The second one gets a database unique error and a `500`.
- In `AuthSignup`, the password is hashed first and the user name is validated later (when `new AuthUser` is created). Bcrypt work is wasted for bad requests.
- On login, an unknown email returns quickly (no bcrypt). A wrong password takes longer. A person can measure the time and find which emails exist.

## Tasks

- [ ] Set a password rule: 8 to 72 characters (choose and write it). Show the same rule in the SPA.
- [ ] Make emails lowercase and trimmed before saving and searching. Add a migration to fix old data.
- [ ] Catch the unique error and return `409`.
- [ ] Validate all input before hashing.
- [ ] For unknown email, run a dummy `bcrypt.compare` so the time is similar.

## Acceptance criteria

- `A@x.com` and `a@x.com` are the same account.
- Two parallel signups with the same email: one `201`, one `409`.
- Password of 100 characters returns `400`.

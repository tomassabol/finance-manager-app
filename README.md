# Finance Manager App - RSC Demo

> Expo RSC is in preview and may have unexpected behavior that's hard to understand. Errors, HMR, and deployment will all be solid when it's moved out of beta.

Add environment variables to your `.env.local` file:

- `PGHOST` -- Database host
- `PGDATABASE` -- Database name
- `PGUSER` -- Database user
- `PGPASSWORD` -- Database password

This secret will only be available in the server as it's not prefixed with `EXPO_PUBLIC_`.

## Set up the database

```sql
CREATE TABLE categories (
    id CHAR(25) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Install dependencies

```bash
bun install
```

## Run the app

```bash
bun start
```

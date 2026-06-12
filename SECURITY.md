# Security

## Reporting

Please report security concerns privately to the repository owner rather than
opening a public issue.

## Local configuration

This repository does not intentionally contain production credentials. Copy the
provided `.env.example` files and keep populated `.env` files local.

Browser-exposed API keys should be restricted by domain, API, and quota in the
relevant provider console. Server credentials must never be placed in the
client application.

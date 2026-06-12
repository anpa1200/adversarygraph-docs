---
id: security
title: Security Considerations
sidebar_position: 11
---

# Security Considerations

ThreatMapper is designed for internal/intranet use. Local mode does not require authentication.
For team deployments, v0.8.0 supports trusted identity headers from an OIDC-aware reverse proxy.

## For a Team Deployment

1. Set a strong `DB_PASS` in `.env`
2. Put ThreatMapper behind nginx, Caddy, oauth2-proxy, or another OIDC-aware reverse proxy with TLS
3. Configure the proxy to strip inbound identity headers, then set `X-Auth-User` and `X-Auth-Roles`
4. Set `AUTH_ENABLED=true`; use `admin`, `analyst`, and `viewer` roles
5. Run the Docker containers on an internal network that is not directly internet-accessible
6. The `.env` file containing your LLM API keys should have `chmod 600` and **never be committed to git**

Never expose trusted identity headers directly to clients. ThreatMapper assumes the reverse proxy
has authenticated the user and removed any client-supplied values.

## Data Handling

Your threat intelligence reports are stored in PostgreSQL inside a Docker volume (`threatmapper_postgres_data`). If you need to comply with data handling policies, deploy ThreatMapper on infrastructure that meets those policies — since it's self-hosted, you retain full control.

To wipe all stored analyses and layers:

```bash
docker compose down -v
```

This destroys the PostgreSQL volume. Next start will re-ingest ATT&CK data from scratch.

## LLM API Keys

API keys are passed to the LLM provider directly from the FastAPI backend using the official Anthropic / OpenAI / Google SDKs. No key material touches any intermediate service.

The keys are stored in the `.env` file and injected as environment variables into the `api` container. They are never written to the database.

## Network Exposure

Default Docker Compose exposes:
- Port 3000 (frontend) — bind to `127.0.0.1:3000` in `docker-compose.yml` to restrict to localhost
- Port 8000 (API) — bind to `127.0.0.1:8000` for localhost-only

For team use, expose only through a reverse proxy with TLS.

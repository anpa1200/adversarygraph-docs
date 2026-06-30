---
id: overview
title: API Overview
sidebar_position: 1
---

# REST API

AdversaryGraph exposes a full REST API. Drive the entire workflow programmatically — headless analysis, batch comparisons, layer management.

## Base URL

```
http://localhost:8000/api
```

Interactive Swagger UI: **http://localhost:8000/docs**

## Endpoint Groups

| Group | Base path | Description |
|---|---|---|
| ATT&CK | `/attack` | Versions, tactics, techniques, technique detail |
| APT | `/apt` | Groups, campaigns, Jaccard compare |
| Analyze | `/analyze` | Submit reports, streaming SSE, session library |
| Layers | `/layers` | Save, load, list, delete named Navigator layers |
| Export | `/export` | PDF generation for analyses and layers |
| Sync | `/sync` | ATT&CK version status and manual sync trigger |
| Health | `/health` | Liveness check |

## Authentication

AdversaryGraph v5.5 supports native username/password login for controlled
self-hosted deployments. When `AUTH_ENABLED=true`, browser clients receive an
HttpOnly session cookie after login and API clients can use the returned bearer
token for scripted workflows.

The access model includes role defaults, explicit per-user permissions, session
expiry, session revocation, password policy settings, MFA workflow support, and
audit history. Supported roles include `viewer`, `analyst`, `threat_intel`,
`detection_engineer`, `incident_responder`, `auditor`, `security_admin`,
`service_account`, and `admin`.

For enterprise SSO, place AdversaryGraph behind a trusted OIDC/SAML-aware
reverse proxy that strips client-supplied identity headers and forwards signed
identity metadata to the API. See [Authentication and Users](/authentication-and-users)
and [Security](/security).

## Content Types

- **JSON body requests**: `Content-Type: application/json`
- **File uploads**: `Content-Type: multipart/form-data`
- **Streaming responses**: Server-Sent Events (`text/event-stream`)
- **PDF responses**: `application/pdf` with `Content-Disposition: attachment`

## SSE Event Types

The streaming analysis endpoint (`POST /api/analyze/stream`) returns SSE events:

| Event type | Payload | Meaning |
|---|---|---|
| `token` | `{"content": "..."}` | LLM token streamed in real time |
| `result` | `{"data": AnalysisOut}` | Final parsed result |
| `error` | `{"message": "..."}` | LLM or DB failure |
| `done` | — | Stream completed |

---

- [Analysis endpoints →](/api/analyze)
- [Layers endpoints →](/api/layers)
- [Compare endpoints →](/api/compare)
- [Export endpoints →](/api/export)
- [Sync endpoints →](/api/sync)

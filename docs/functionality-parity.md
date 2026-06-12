---
id: functionality-parity
title: Web vs Docker Functionality
sidebar_position: 3
---

# ThreatMapper Web vs ThreatMapper Docker

This page is the canonical capability reference. ThreatMapper Web is the public browser-native ATT&CK/CTI workspace. ThreatMapper Docker is the full self-hosted AI-assisted platform.

| Feature | ThreatMapper Web | ThreatMapper Docker | Notes |
|---|---|---|---|
| ATT&CK matrix exploration and technique search | Supported | Supported | Counts depend on selected domain and ingested release |
| Manual layer creation | Browser-local | Supported | Web state is stored in the browser; Docker also supports server workflows |
| Group profile overlay and group-vs-group comparison | Supported | Supported | Similarity is an investigation lead, not attribution proof |
| Coverage gap analysis and detection guidance | Supported | Supported | Technique details include linked detection/hunting context |
| Detection backlog export | Browser-generated | Supported | Export engines and fields differ by mode |
| Investigation workspaces | Browser-local | PostgreSQL-backed | Web workspaces remain in browser storage; Docker stores private analyses |
| Sample workflows | Supported | Planned | Web includes four functional starting layers |
| AI report extraction | Not supported | Docker-only | Uses the operator-configured LLM provider |
| PDF/DOCX/TXT ingestion | Not supported | Docker-only | Private backend workflow |
| Claude/OpenAI/Gemini providers | Not supported | Docker-only | Provider availability depends on operator configuration |
| Private report library | Not supported | PostgreSQL-backed | Requires self-hosted deployment |
| API access | Not supported | Docker-only | Protect the API with access control |
| Report exports | Browser-generated / partial | Backend PDF generation | Capabilities differ by deployment mode |
| ATT&CK sync jobs | Build-time update | Docker-only | Docker uses scheduled Celery jobs |
| Authentication/RBAC | Not applicable | Partial | Trusted-header roles require a correctly configured authenticating reverse proxy |
| Production hardening | Not applicable | Requires self-hosted deployment | Use TLS, access control, restricted networks, backups, retention, and secrets management |

ThreatMapper is suitable for local labs, private analyst workstations, internal CTI workflows, and controlled self-hosted deployments. Internet-facing Docker deployments require additional access control and hardening.

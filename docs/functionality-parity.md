---
id: functionality-parity
title: Web vs Docker Functionality
sidebar_position: 3
---

# Web Workspace vs Docker Platform

This page is the canonical capability reference. ThreatMapper Web is the public browser-native ATT&CK/CTI workbench. ThreatMapper Docker is the full self-hosted AI-assisted platform.

| Feature | Web Workspace | Docker Platform | Notes |
|---|---|---|---|
| ATT&CK matrix exploration and technique search | Supported | Supported | Enterprise, Mobile, and ICS; Web also exposes an ATLAS dataset |
| Manual layer creation and group profile overlay | Supported | Supported | Web state is stored in the browser |
| Group-vs-group and selected-TTP comparison | Supported | Supported | Jaccard overlap produces investigation leads, not attribution |
| Detection coverage and backlog export | Supported | Supported | Web imports coverage and exports prioritized gaps |
| Sample workflows | Supported | Planned | Web includes MuddyWater-style, ransomware, cloud identity, and ICS/public-sector samples |
| AI report extraction | Not supported | Supported | Uses the LLM provider configured by the operator |
| PDF/DOCX/TXT ingestion | Not supported | Supported | Docker backend only |
| Claude/OpenAI/Gemini support | Not supported | Supported | External provider calls depend on operator configuration |
| Private report library and PostgreSQL storage | Not supported | Supported | Requires self-hosted deployment |
| API access and PDF report generation | Not supported | Supported | Requires self-hosted deployment |
| ATT&CK synchronization jobs | Build-time update | Supported | Docker uses scheduled Celery jobs |
| Authentication/RBAC | Not applicable | Supported when configured | Trusted reverse-proxy identity headers; protect the deployment |
| Production deployment | Public exploration only | Requires hardening | Use TLS, access control, backups, retention, and restricted network exposure |

ThreatMapper is suitable for local labs, private analyst workstations, internal CTI workflows, and controlled self-hosted deployments. Internet-facing Docker deployments require additional access control and hardening.

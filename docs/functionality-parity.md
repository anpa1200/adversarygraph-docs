---
id: functionality-parity
title: Platform Scope
sidebar_position: 5
---

# Platform Scope

This documentation describes the self-hosted AdversaryGraph platform.

The supported platform scope is:

- Docker Compose deployment
- FastAPI backend
- React frontend
- PostgreSQL persistent database
- Redis/Celery background jobs
- ATT&CK and ATLAS synchronization
- AI report analysis with configured providers
- IOC Library and enrichment workflows
- Feeds Management
- STIX/TAXII/MISP/custom feed import
- YARA/Sigma/sandbox behavior context
- actor, campaign, report, and sector workflows
- PDF, JSON, CSV, STIX, and Navigator exports
- API automation
- selftest and troubleshooting pages

## Included In The Platform

| Capability | Status |
|---|---|
| Private PDF/DOCX/TXT report analysis | Supported |
| Claude/OpenAI/Gemini/MiniMax/local LLM providers | Supported when configured |
| Stored analysis history | PostgreSQL-backed |
| ATT&CK Enterprise/Mobile/ICS sync | Supported |
| MITRE ATLAS sync | Supported |
| Actor and campaign comparison | Supported |
| Group vs group comparison | Supported |
| Sector Intelligence | Supported |
| IOC Library | Supported |
| ThreatFox/OTX/VirusTotal/Malpedia/MISP Galaxy enrichment | Supported when configured |
| STIX/TAXII/MISP/custom feed import | Supported |
| Sigma/YARA/sandbox behavior feed context | Supported |
| IOC-to-TTP evidence-priority mapping | Supported |
| PDF report export | Supported |
| ATT&CK Navigator layer import/export | Supported |
| STIX 2.1 export | Supported |
| API access | Supported |
| Selftest and troubleshooting UI | Supported |
| Trusted-header roles | Supported when deployed behind a correctly configured authenticating reverse proxy |

## Deployment Boundary

AdversaryGraph is suitable for:

- local labs
- private analyst workstations
- internal CTI workflows
- detection engineering teams
- controlled self-hosted deployments

Internet-facing deployments require additional hardening:

- TLS
- authentication
- restricted network exposure
- protected provider keys
- protected database access
- CORS review
- retention policy
- backups
- monitoring

## Analyst Boundary

AdversaryGraph assists analysis but does not replace analyst judgment.

Do not treat the following as proof by itself:

- LLM-generated technique mapping
- actor similarity score
- campaign overlap
- IOC-to-actor association without source evidence
- IOC-to-TTP association produced only by weak enrichment

Use the platform to organize evidence, review hypotheses, and produce structured outputs.

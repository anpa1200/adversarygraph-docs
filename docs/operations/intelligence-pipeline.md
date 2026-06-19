---
id: intelligence-pipeline
title: Intelligence Pipeline
sidebar_position: 2
---

# Intelligence Pipeline

AdversaryGraph v0.8.0 adds an analyst-controlled collection, enrichment, and detection
engineering pipeline to the self-hosted Docker platform. Open **Pipeline** in the sidebar.

## Collection

- Add RSS or Atom sources and run them manually.
- Celery checks every 15 minutes and runs enabled RSS sources when their configured interval is due.
- Import reviewed STIX bundles from TAXII, MISP events, and MITRE ATLAS JSON.
- Every external report enters **Operations → Intake** as `pending`.
- Duplicate report URLs/titles and normalized observables are suppressed.

TAXII and MISP credentials should remain in the upstream connector or automation service.
Export structured JSON and submit it to:

```text
POST /api/pipeline/import/stix
POST /api/pipeline/import/misp
POST /api/pipeline/import/atlas
```

## Observable Enrichment

The pipeline extracts CVEs, IPv4 addresses, domains, MD5 hashes, and SHA-256 hashes from
collected content. Analysts can add observables manually and enrich supported network/domain
observables with public RDAP data.

Enrichment output is evidence, not a verdict. It is stored separately with provider, status,
confidence, raw response summary, and audit history.

## Detection Studio

Generate versioned, analyst-review rule skeletons for:

- Sigma
- KQL
- SPL
- EQL

Generated rules deliberately contain `REPLACE_WITH_BEHAVIOR` placeholders. Validation checks
required structure and warns until placeholders are replaced. Generated content must be tested
against representative telemetry before it enters production.

## Team Authentication and Audit

Local mode remains available by default. For teams, place AdversaryGraph behind an OIDC-aware
reverse proxy that sets:

```text
X-Auth-User: analyst@example.com
X-Auth-Roles: analyst
```

Set `AUTH_ENABLED=true` in `.env`. Mutation endpoints require `admin` or `analyst`; viewers can
read. Collection runs, imports, enrichment, source changes, and rule generation are recorded in
the Pipeline audit trail.

## Self-Hosted Pipeline Boundary

Private ingestion, observables, enrichment, team identity, audit events, report history,
feed state, and AI analysis belong in the self-hosted AdversaryGraph platform. Keep
customer reports, internal IOCs, private feeds, and generated analysis inside the Docker
deployment or another controlled environment.

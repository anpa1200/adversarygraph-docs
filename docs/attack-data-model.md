---
id: attack-data-model
title: ATT&CK and STIX Data Model
sidebar_position: 9
---

# ATT&CK and STIX Data Model

AdversaryGraph stores ATT&CK and ATLAS data in two layers:

- **Normalized query tables** for fast product workflows.
- **Raw STIX preservation tables** for source fidelity and graph review.

This means the platform can render matrices, compare actors, and score TTP
overlap quickly while still preserving the original STIX objects and
relationships.

## Normalized Runtime Tables

| Table | Purpose |
|---|---|
| `attack_versions` | Ingested ATT&CK/ATLAS domain and version metadata |
| `tactics` | ATT&CK tactic records |
| `techniques` | ATT&CK/ATLAS techniques and sub-techniques |
| `technique_tactics` | Technique-to-tactic links |
| `apt_groups` | ATT&CK intrusion-set / group profiles |
| `apt_group_techniques` | Group-to-technique usage links with procedure description and references |
| `campaigns` | ATT&CK campaign / named operation records |
| `campaign_techniques` | Campaign-to-technique usage links |
| `apt_group_campaigns` | Campaign-to-group attribution links |

These tables are used by Navigator, APT Library, Compare, AI report mapping,
campaign comparison, and detection engineering workflows.

## Raw STIX Preservation

Starting in v5.1, AdversaryGraph preserves the source STIX graph:

| Table | Purpose |
|---|---|
| `stix_objects` | One row per non-relationship STIX object |
| `stix_relationships` | One row per STIX relationship object |

`stix_objects` keeps the object type, STIX ID, ATT&CK ID when present, name,
domain, version, revoked/deprecated flags, and the complete raw STIX JSON.

`stix_relationships` keeps relationship type, source STIX ID, target STIX ID,
description, references, domain, version, and the complete raw relationship JSON.

Revoked or deprecated STIX objects are preserved for audit fidelity, even when
they are excluded from normalized runtime tables.

## Raw STIX API

Read-only endpoints expose the preserved STIX graph:

| Endpoint | Purpose |
|---|---|
| `GET /api/attack/stix/objects/{stix_id}` | Return one raw STIX object |
| `GET /api/attack/stix/objects/{stix_id}/graph` | Return the object plus incoming and outgoing relationships |
| `GET /api/attack/stix/relationships` | Filter relationships by source, target, or type |

Useful filters:

- `domain`
- `version`
- `source_stix_id`
- `target_stix_id`
- `relationship_type`
- `limit`

## Ingest Flow

```text
MITRE STIX bundle
        |
        v
ATT&CK ingestor
        |
        +--> raw STIX graph
        |       - stix_objects
        |       - stix_relationships
        |
        +--> normalized runtime model
                - tactics
                - techniques
                - apt_groups
                - campaigns
                - relationship join tables
```

The normalized model remains the primary product model. The raw STIX model is
the source-fidelity layer for audit, export, and future graph traversal.

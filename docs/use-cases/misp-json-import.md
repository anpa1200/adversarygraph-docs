---
id: misp-json-import
title: Connect MISP JSON Exports
sidebar_position: 16
---

# Connect MISP JSON Exports

**Analyst question:** How can MISP event or attribute exports become searchable IOC records?

**Primary users:** MISP operator, CTI analyst, SOC platform engineer, or threat hunter.

## Scenario

A team already uses MISP and wants selected events or attributes to become searchable and enrichable inside AdversaryGraph.

## Inputs

- MISP event or attribute JSON export URL
- Local gateway URL if MISP is not directly reachable
- Source label
- Optional event tags and galaxy context

## Prerequisites

- MISP export is accessible to the API container
- Authentication is handled by gateway or export URL
- Source labeling is clear
- Private data sharing rules are understood

## Detailed Workflow

1. Open IOC Library source connection panel.
2. Paste the MISP JSON export URL or gateway URL.
3. Connect the source and review imported counts.
4. Filter IOC Library by the MISP source.
5. Review event/attribute fields and descriptions.
6. Enrich selected indicators only when permitted.
7. Export or use MISP-backed indicators for hunting.

## Analyst Decisions

- Is this an event-level export or attribute-level export?
- Which MISP tags should influence actor or malware mapping?
- Can indicators be enriched externally?
- Should MISP remain source-of-truth or be copied for local analysis?

## Expected Outputs

- MISP-backed IOC records
- Searchable source filter
- Optional enrichment and actor links
- CSV/STIX export path

## Common Pitfalls

- Leaking sensitive MISP data to external enrichment
- Using stale event exports
- Losing MISP tags during normalization
- Assuming every MISP attribute is high-confidence


## Handoff Guidance

Use the MISP import to connect existing CTI operations with AdversaryGraph analysis and enrichment workflows.

## Review Standard

- Keep evidence attached to every accepted finding.
- Separate observed behavior from enrichment and hypothesis.
- Use `needs-evidence` for plausible but unproven mappings.
- Treat actor similarity, IOC enrichment, and rule matches as analytical signals until corroborated.
- Export only reviewed results for customer, SOC, incident response, or detection engineering use.

## Related Platform Areas

- AI Analysis
- ATT&CK Navigator
- ATT&CK Group Library
- IOC Library
- Reference Sync
- Operations / Pipeline
- PDF, JSON, CSV, STIX, or Navigator export depending on workflow

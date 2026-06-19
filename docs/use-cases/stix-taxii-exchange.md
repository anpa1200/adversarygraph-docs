---
id: stix-taxii-exchange
title: Import And Export STIX/TAXII Intelligence
sidebar_position: 15
---

# Import And Export STIX/TAXII Intelligence

**Analyst question:** How can AdversaryGraph exchange structured intelligence with other CTI tools?

**Primary users:** CTI platform engineer, SOC automation engineer, OpenCTI/MISP operator, or analyst.

## Scenario

Intelligence needs to move between systems without copy-paste. STIX and TAXII provide a structured exchange path for indicators and observed data.

## Inputs

- STIX bundle file or TAXII collection URL
- Optional bearer token or basic auth
- IOC records for export
- Target platform requirements

## Prerequisites

- TAXII endpoint is reachable if pulling remote collections
- Credentials are available
- STIX version compatibility is understood
- Imported data handling rules are clear

## Detailed Workflow

1. Export selected IOC records as STIX when sharing out.
2. Import a STIX file when receiving structured intelligence.
3. For TAXII, provide collection objects URL and credentials if required.
4. Review imported indicators and observed-data records in IOC Library.
5. Filter by source and actor where possible.
6. Enrich or map relevant records to TTPs after import.

## Analyst Decisions

- Is the STIX object an indicator, observed-data, malware, relationship, or report?
- Should imported objects be trusted or treated as unreviewed?
- Does the receiving system require a specific marking or identity?
- Should private intelligence be exported at all?

## Expected Outputs

- STIX export bundle
- Imported STIX/TAXII IOC records
- Source-labeled structured intelligence
- Searchable IOC Library entries

## Common Pitfalls

- Assuming all STIX producers model data the same way
- Ignoring object markings
- Importing relationships without validating context
- Exporting private data to the wrong system


## Handoff Guidance

Use STIX/TAXII for structured exchange, then use AdversaryGraph for enrichment, filtering, and analyst review.

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

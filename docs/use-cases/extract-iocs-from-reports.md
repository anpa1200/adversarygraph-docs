---
id: extract-iocs-from-reports
title: Extract IOCs From Uploaded Reports
sidebar_position: 19
---

# Extract IOCs From Uploaded Reports

**Analyst question:** Which observables appear in this report and how should they be stored?

**Primary users:** CTI analyst, IR analyst, SOC analyst, or malware analyst.

## Scenario

A report includes domains, IPs, URLs, hashes, file names, or mutexes. The team needs to extract them, preserve source context, and decide which are useful.

## Inputs

- Report text or file
- IOC extraction patterns
- Optional actor/malware context
- IOC Library storage

## Prerequisites

- Report processing is allowed
- IOC Library is available
- Private-data rules are understood
- Enrichment keys are configured if needed

## Detailed Workflow

1. Upload or paste the report in AI Analysis or report workflow.
2. Extract observables and review normalized types.
3. Remove false positives such as documentation IPs or placeholders.
4. Map indicators to actors or malware only when evidence supports it.
5. Store report-derived IOCs with source context.
6. Enrich selected indicators and export relevant subsets.

## Analyst Decisions

- Is the string a real IOC or example text?
- Is it current enough for operational use?
- Should it be mapped to an actor, malware family, campaign, or remain unmapped?
- Can it be sent to external enrichment services?

## Expected Outputs

- Report-derived IOC set
- Source report context
- Actor/malware links where supported
- CSV/STIX export options

## Common Pitfalls

- Extracting false positives from code blocks or examples
- Mapping indicators without attribution evidence
- Enriching sensitive customer IOCs externally
- Keeping stale indicators without last-seen context


## Handoff Guidance

Give SOC teams cleaned, source-labeled IOCs with action guidance and confidence notes.

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

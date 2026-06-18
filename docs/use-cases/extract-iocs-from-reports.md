---
id: extract-iocs-from-reports
title: Extract IOCs From Uploaded Reports
sidebar_position: 19
---

# Extract IOCs From Uploaded Reports

**Analyst question:** Which observables appear in this report and how should they be stored?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Upload or paste the report.
2. Run analysis and extract observables.
3. Map IOCs to actors or malware when evidence exists.
4. Store report-derived IOCs in the library.
5. Enrich and export the selected indicators.


## Expected Output

Report-derived IOCs with source report context and optional actor/TTP links.

## Quality Checks

- Validate every technique against the source evidence.
- Treat similarity and enrichment as analytical signals, not final conclusions.
- Mark weak mappings as `needs-evidence` or `rejected` instead of forcing them into the final layer.
- Export only reviewed data when using results for customer, SOC, or detection engineering handoff.

## Related Platform Areas

- AI Analysis
- ATT&CK Navigator
- ATT&CK Group Library
- IOC Library
- Reference Sync
- Report export

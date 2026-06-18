---
id: stix-taxii-exchange
title: Import And Export STIX/TAXII Intelligence
sidebar_position: 15
---

# Import And Export STIX/TAXII Intelligence

**Analyst question:** How can AdversaryGraph exchange structured intelligence with other CTI tools?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Export IOC records as STIX.
2. Import STIX files.
3. Pull TAXII collection objects where supported.
4. Review imported indicators and observed-data records.
5. Use the IOC Library for enrichment and filtering.


## Expected Output

STIX indicators and observed-data records connected to the IOC workflow.

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

---
id: misp-json-import
title: Connect MISP JSON Exports
sidebar_position: 16
---

# Connect MISP JSON Exports

**Analyst question:** How can MISP event or attribute exports become searchable IOC records?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Provide a MISP JSON export URL or local gateway URL.
2. Sync the source as a MISP feed.
3. Review imported observables in IOC Library.
4. Filter by source, actor, and type.
5. Enrich selected observables with VT/OTX or custom context.


## Expected Output

MISP-backed IOC records available for search, enrichment, and export.

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

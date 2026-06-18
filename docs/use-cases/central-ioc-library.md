---
id: central-ioc-library
title: Maintain A Central IOC Library
sidebar_position: 11
---

# Maintain A Central IOC Library

**Analyst question:** How can all collected observables be searched and organized?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Open IOC Library.
2. Search by indicator, description, malware, campaign, or source.
3. Filter by type, source, and one or more groups.
4. Sort by last-seen or other fields.
5. Enrich selected observables and export when needed.


## Expected Output

Searchable observable library with enrichment actions, filters, and source context.

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

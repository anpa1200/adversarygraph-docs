---
id: custom-private-feeds
title: Import Custom Private Feeds
sidebar_position: 14
---

# Import Custom Private Feeds

**Analyst question:** How can internal or customer-specific IOCs be added?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Add a custom JSON, CSV, or TXT feed.
2. Label the source clearly.
3. Sync the feed into the external persistent DB.
4. Filter and enrich imported observables.
5. Keep private data separate from public reference data.


## Expected Output

Private/custom IOC records preserved outside the container image.

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

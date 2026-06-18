---
id: sector-threat-model
title: Build A Sector-Specific Threat Model
sidebar_position: 9
---

# Build A Sector-Specific Threat Model

**Analyst question:** Which actors, TTPs, campaigns, and technologies matter for this customer?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Select the customer sector and environment technologies.
2. Filter by region and activity window.
3. Review actor cards and evidence reasons.
4. Open actor pages and relevant TTPs.
5. Export or summarize the resulting threat model.


## Expected Output

Customer-specific threat model with actor context and ATT&CK behavior map.

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

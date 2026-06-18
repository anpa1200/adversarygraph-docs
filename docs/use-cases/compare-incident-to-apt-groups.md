---
id: compare-incident-to-apt-groups
title: Compare An Incident To Known APT Groups
sidebar_position: 3
---

# Compare An Incident To Known APT Groups

**Analyst question:** Which known groups have the strongest TTP overlap with this incident?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Extract TTPs from the incident report.
2. Run group comparison against ATT&CK actor profiles.
3. Inspect Jaccard similarity and shared technique lists.
4. Open matching actor pages to review aliases, campaigns, and evidence.
5. Record the result as a hypothesis, not attribution.


## Expected Output

Ranked actor candidates for hypothesis generation and investigation prioritization.

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

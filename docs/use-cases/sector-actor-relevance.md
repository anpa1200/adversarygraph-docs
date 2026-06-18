---
id: sector-actor-relevance
title: Track Actor Relevance By Sector
sidebar_position: 8
---

# Track Actor Relevance By Sector

**Analyst question:** Which adversaries matter for a customer sector right now?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Open Sector Intel.
2. Choose sectors, regions, technologies, and activity window.
3. Review ranked actors and score explanations.
4. Open actor information or TTP information.
5. Show relevant TTPs on the matrix.


## Expected Output

Sector-relevant actor list, selected TTPs, score context, and matrix overlay.

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

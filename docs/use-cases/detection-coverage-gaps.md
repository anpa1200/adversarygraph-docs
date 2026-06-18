---
id: detection-coverage-gaps
title: Review Detection Coverage Gaps
sidebar_position: 7
---

# Review Detection Coverage Gaps

**Analyst question:** Where is current coverage weak against a report, actor, or sector?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Load relevant TTPs into Navigator.
2. Inspect tactic distribution and selected techniques.
3. Compare against actor or campaign profiles.
4. Identify missing telemetry or detection logic.
5. Export gaps as detection engineering priorities.


## Expected Output

Coverage gap view with missing tactics, techniques, and detection candidates.

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

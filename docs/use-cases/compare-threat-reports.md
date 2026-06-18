---
id: compare-threat-reports
title: Compare Two Or More Threat Reports
sidebar_position: 4
---

# Compare Two Or More Threat Reports

**Analyst question:** Are these reports operationally related or just sharing common tradecraft?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Analyze each report and store the results.
2. Open stored report comparison.
3. Compare shared TTPs, tactics, IOCs, and actor links.
4. Separate high-signal overlap from generic techniques.
5. Export the comparison for review.


## Expected Output

Shared behavior profile, differences, and evidence-backed report comparison.

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

---
id: dfir-report-examples
title: Analyze DFIR Report Examples
sidebar_position: 20
---

# Analyze DFIR Report Examples

**Analyst question:** How can public DFIR reports be used as validation and training examples?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Open DFIR Examples.
2. Select a report metadata entry.
3. Review linked TTPs, actors, and report URL.
4. Use the source report for AI analysis when needed.
5. Compare extracted results to expected behavior.


## Expected Output

Practice dataset for validating extraction, comparison, enrichment, and detection workflows.

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

---
id: client-facing-cti-briefing
title: Build A Client-Facing CTI Briefing
sidebar_position: 2
---

# Build A Client-Facing CTI Briefing

**Analyst question:** How can a raw report become a structured customer briefing?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Analyze the report and validate the extracted TTPs.
2. Open actor and campaign comparison to find relevant behavioral overlap.
3. Add or enrich IOCs from the report and external feeds.
4. Summarize detection priorities and uncertainty.
5. Export a PDF and attach supporting Navigator layers.


## Expected Output

Briefing-ready CTI output with evidence-backed findings, actor context, IOC context, and detection priorities.

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

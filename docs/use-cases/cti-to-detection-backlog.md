---
id: cti-to-detection-backlog
title: Turn CTI Into A Detection Backlog
sidebar_position: 5
---

# Turn CTI Into A Detection Backlog

**Analyst question:** Which ATT&CK techniques should detection engineering prioritize?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Accept validated TTPs from report analysis.
2. Review tactic coverage and missing areas.
3. Open TTP detail panels for detection context.
4. Export structured results for backlog tickets.
5. Track review status as detections are planned or built.


## Expected Output

Prioritized detection backlog candidates with ATT&CK IDs, evidence, and detection notes.

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

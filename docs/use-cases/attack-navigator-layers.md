---
id: attack-navigator-layers
title: Create ATT&CK Navigator Layers
sidebar_position: 6
---

# Create ATT&CK Navigator Layers

**Analyst question:** How can selected techniques be visualized and shared?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Select TTPs manually, import a layer, or inject AI-extracted TTPs.
2. Load actor TTPs or merge coverage into My TTPs.
3. Review matrix colors and selected technique count.
4. Export Navigator-compatible JSON.
5. Share the layer with analysts or detection engineers.


## Expected Output

Interactive matrix view and ATT&CK Navigator-compatible JSON layer.

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

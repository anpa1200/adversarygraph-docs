---
id: attack-navigator-layers
title: Create ATT&CK Navigator Layers
sidebar_position: 6
---

# Create ATT&CK Navigator Layers

**Analyst question:** How can selected techniques be visualized, shared, and reused?

**Primary users:** CTI analyst, SOC lead, detection engineer, or security architect.

## Scenario

An analyst needs to communicate coverage, actor behavior, campaign behavior, or report findings visually using an ATT&CK matrix.

## Inputs

- Selected TTPs from AI analysis, actor profiles, manual selection, or imports
- Domain choice: Enterprise, Mobile, ICS, or ATLAS where available
- Layer naming convention
- Optional scoring or comments

## Prerequisites

- ATT&CK data is loaded
- Selected techniques are reviewed
- Export path is available
- Layer purpose is clear

## Detailed Workflow

1. Open Navigator and select the correct domain.
2. Add techniques manually, import coverage, inject accepted AI results, or load actor TTPs.
3. Use My TTPs only to show selected behavior, not every possible related technique.
4. Review tactic distribution and technique labels.
5. Export Navigator JSON or keep the layer in the layer library.
6. Share the layer with a short explanation of scope and confidence.

## Analyst Decisions

- Is the layer representing observed behavior, expected actor behavior, or detection coverage?
- Should low-confidence techniques be excluded or colored differently?
- Which domain should be used?
- Should this become a reusable named layer?

## Expected Outputs

- Navigator-compatible JSON
- Interactive matrix layer
- Named layer in workspace
- Visual evidence for reports or briefings

## Common Pitfalls

- Mixing observed and hypothetical TTPs without labeling
- Using one layer for too many purposes
- Exporting unreviewed model output
- Forgetting domain differences


## Handoff Guidance

Attach the Navigator layer to reports, backlog tickets, and briefings with a short note explaining what the layer represents.

## Review Standard

- Keep evidence attached to every accepted finding.
- Separate observed behavior from enrichment and hypothesis.
- Use `needs-evidence` for plausible but unproven mappings.
- Treat actor similarity, IOC enrichment, and rule matches as analytical signals until corroborated.
- Export only reviewed results for customer, SOC, incident response, or detection engineering use.

## Related Platform Areas

- AI Analysis
- ATT&CK Navigator
- ATT&CK Group Library
- IOC Library
- Reference Sync
- Operations / Pipeline
- PDF, JSON, CSV, STIX, or Navigator export depending on workflow

---
id: cti-to-detection-backlog
title: Turn CTI Into A Detection Backlog
sidebar_position: 5
---

# Turn CTI Into A Detection Backlog

**Analyst question:** Which intelligence findings should become detection engineering work?

**Primary users:** Detection engineer, CTI analyst, SOC lead, or purple team operator.

## Scenario

A report contains many behaviors, but only some are useful and feasible for detection. The team needs to turn CTI into prioritized backlog items.

## Inputs

- Reviewed TTP list
- Evidence snippets
- Customer or organization telemetry inventory
- Existing detection coverage if known

## Prerequisites

- TTPs have review status
- Detection engineers know available log sources
- Navigator layer is prepared
- False-positive constraints are understood

## Detailed Workflow

1. Start with accepted TTPs and exclude rejected mappings.
2. Group techniques by tactic and operational phase.
3. Open TTP detail panels and review detection guidance.
4. Mark which techniques have available telemetry.
5. Prioritize high-impact, high-confidence, low-coverage techniques.
6. Export a detection backlog with evidence and source report references.
7. Create tickets or tasks for Sigma, SIEM, EDR, or hunting content.

## Analyst Decisions

- Is the technique observable in available telemetry?
- Is detection better as a rule, hunt, dashboard, or enrichment?
- Does the report provide enough procedure detail?
- What is the expected false-positive rate?

## Expected Outputs

- Detection backlog
- Prioritized TTP list
- Telemetry requirements
- Evidence-backed ticket content

## Common Pitfalls

- Creating detections for techniques without telemetry
- Prioritizing noisy generic techniques over distinctive behavior
- Losing source evidence during handoff
- Treating all TTPs as equal priority


## Handoff Guidance

Give engineering a concise backlog item per technique: behavior, evidence, log source, proposed logic, expected signal, and validation plan.

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

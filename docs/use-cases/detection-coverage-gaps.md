---
id: detection-coverage-gaps
title: Review Detection Coverage Gaps
sidebar_position: 7
---

# Review Detection Coverage Gaps

**Analyst question:** Which tactics or techniques are under-covered against a report, actor, or sector?

**Primary users:** Detection engineer, SOC lead, threat hunter, or security architect.

## Scenario

The team wants to know whether current detection work covers the behaviors that matter for a threat report, actor, or customer sector.

## Inputs

- Selected TTPs from report, actor, sector, or campaign
- Existing detection coverage or imported layer
- Telemetry inventory
- Detection quality notes

## Prerequisites

- Coverage layer is available or can be imported
- Threat layer is reviewed
- Matrix view is working
- Detection owners can act on findings

## Detailed Workflow

1. Load the threat behavior into Navigator.
2. Import or overlay existing coverage where available.
3. Compare selected TTPs against covered TTPs.
4. Identify missing tactics and high-value uncovered techniques.
5. Open TTP details for detection guidance.
6. Export the gap summary and prioritize work by risk and telemetry feasibility.

## Analyst Decisions

- Is a missing technique truly relevant to the environment?
- Can the technique be detected directly or only through adjacent behavior?
- Is coverage high quality or only nominal?
- Which gaps should become backlog items first?

## Expected Outputs

- Coverage gap list
- Matrix overlay
- Prioritized detection candidates
- Telemetry requirements

## Common Pitfalls

- Counting coverage without checking detection quality
- Ignoring environment relevance
- Trying to detect every TTP equally
- Overlooking adjacent or chained detections


## Handoff Guidance

Give the SOC a prioritized gap list tied to telemetry and expected attacker behavior, not just a colored matrix.

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

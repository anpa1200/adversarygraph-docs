---
id: sector-threat-model
title: Build A Sector-Specific Threat Model
sidebar_position: 9
---

# Build A Sector-Specific Threat Model

**Analyst question:** Which actors, TTPs, campaigns, and technologies matter most for this customer?

**Primary users:** Security architect, CTI analyst, vCISO, or detection lead.

## Scenario

Before a customer engagement or internal planning cycle, the team needs a threat model grounded in sector relevance and actual ATT&CK behavior.

## Inputs

- Sector and business context
- Geography
- Technology stack
- Recent incident concerns
- Relevant actors and TTPs from Sector Intel

## Prerequisites

- Sector and technology filters are prepared
- Actor library is synchronized
- Detection or telemetry constraints are known
- The model scope is clear

## Detailed Workflow

1. Select sector, region, technology, and activity window.
2. Review the top actors and their evidence reasons.
3. Open actor pages for descriptions, aliases, campaigns, reports, IOCs, and TTP coverage.
4. Show relevant TTPs on matrix.
5. Group TTPs by tactic and detection feasibility.
6. Produce a threat model summary with assumptions and confidence.

## Analyst Decisions

- Which actors are relevant because of sector targeting versus capability?
- Which technologies create exposure?
- Which threats are strategic versus immediate?
- Which assumptions require future validation?

## Expected Outputs

- Sector threat model
- Actor priority list
- ATT&CK matrix overlay
- Detection and monitoring priorities

## Common Pitfalls

- Building a generic sector report with no environment context
- Ignoring recency
- Presenting historical actors as current without evidence
- Skipping assumptions


## Handoff Guidance

Use the threat model as the starting point for detection roadmap, tabletop scenarios, and customer-facing CTI briefings.

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

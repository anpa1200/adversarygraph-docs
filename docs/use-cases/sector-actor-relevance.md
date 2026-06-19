---
id: sector-actor-relevance
title: Track Actor Relevance By Sector
sidebar_position: 8
---

# Track Actor Relevance By Sector

**Analyst question:** Which adversaries are most relevant to a customer sector right now?

**Primary users:** CTI analyst, customer security advisor, SOC lead, or security manager.

## Scenario

A customer asks which threat actors matter to their sector and environment. The answer needs to reflect sector, geography, technology, and recency.

## Inputs

- Target sector
- Optional geography or region
- Technology/environment filters such as cloud, Kubernetes, or Microsoft 365
- Activity window such as quarter, year, or two years

## Prerequisites

- Sector intelligence data is synchronized
- Actor profiles are available
- Filters are selected carefully
- Score meaning is understood

## Detailed Workflow

1. Open Sector Intel.
2. Select one or more sectors.
3. Optionally select regions and technologies/environment values.
4. Choose the activity window.
5. Review relevant actor cards and score explanations.
6. Open actor info, TTP info, IOC information, or show relevant TTPs on matrix.
7. Save findings for a sector brief or detection plan.

## Analyst Decisions

- Is relevance based on direct sector evidence, motivation, geography, or technology overlap?
- Does recent activity matter more than historical capability?
- Which actors should be monitored versus actively prioritized?
- Which TTPs are actionable for the customer?

## Expected Outputs

- Ranked actor list
- Score reasons
- Relevant TTP set
- Sector-specific matrix overlay

## Common Pitfalls

- Assuming every high-score actor is actively targeting the customer
- Ignoring confidence and source quality
- Using broad sector labels without environment context
- Forgetting to update after sync


## Handoff Guidance

Use the ranking to drive a sector threat briefing and a focused detection review for the top actors and TTPs.

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

---
id: client-facing-cti-briefing
title: Build A Client-Facing CTI Briefing
sidebar_position: 2
---

# Build A Client-Facing CTI Briefing

**Analyst question:** How can a raw report become a structured, evidence-backed customer briefing?

**Primary users:** CTI consultant, customer-facing analyst, SOC manager, or security architect.

## Scenario

A customer asks what a report means for their environment. They need a concise briefing with behaviors, relevant actors, IOCs, detection priorities, and uncertainty clearly separated.

## Inputs

- Source report or incident narrative
- Customer sector and technology context
- Known customer telemetry or detection stack
- Optional IOC list from the incident or report

## Prerequisites

- Customer data handling rules are clear
- Sector/technology filters are available when relevant
- PDF export is working
- Enrichment keys are configured if IOC context is needed

## Detailed Workflow

1. Analyze the report and review TTP mappings.
2. Filter or compare relevant actors using sector, region, technology, and TTP overlap.
3. Open actor profiles for context but avoid making attribution claims without corroboration.
4. Extract or import IOCs and enrich them where useful.
5. Convert accepted TTPs into detection priorities based on customer telemetry.
6. Summarize what is known, what is likely, and what remains uncertain.
7. Export a PDF briefing and attach Navigator layers for technical readers.

## Analyst Decisions

- Which findings are directly evidenced by the report?
- Which findings are contextual enrichment only?
- What matters for this customer sector and environment?
- Which detections are realistic with the customer telemetry?

## Expected Outputs

- Customer briefing PDF
- ATT&CK layer
- Actor hypothesis section
- IOC appendix
- Detection priority list

## Common Pitfalls

- Overstating attribution from similarity alone
- Including low-confidence enrichment as fact
- Delivering too many generic TTPs without prioritization
- Not separating customer-specific relevance from general threat context


## Handoff Guidance

Deliver the PDF and Navigator layer with clear confidence language. Give the SOC a shorter action list: top TTPs, top IOCs, and recommended hunts.

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

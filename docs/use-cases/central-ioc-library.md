---
id: central-ioc-library
title: Maintain A Central IOC Library
sidebar_position: 11
---

# Maintain A Central IOC Library

**Analyst question:** How can all collected observables be searched, filtered, enriched, and exported?

**Primary users:** SOC analyst, CTI analyst, threat hunter, or platform operator.

## Scenario

Indicators arrive from reports, feeds, MISP, TAXII, ThreatFox, OTX, and manual uploads. They need one searchable place with source and enrichment context.

## Inputs

- Public feed IOCs
- Private/customer IOCs
- Report-derived observables
- MISP/STIX/TAXII imports
- Actor mappings where available

## Prerequisites

- External persistent DB is configured
- Feed sync has run
- Search and filters are working
- API keys are configured for enrichment

## Detailed Workflow

1. Open IOC Library.
2. Search by indicator, description, malware, campaign, or source.
3. Filter by type, source, and one or more actor groups.
4. Sort by last seen to prioritize current indicators.
5. Open enrichment for selected IOCs.
6. Export or sync relevant subsets for downstream use.
7. Delete or separate private data when retention requires it.

## Analyst Decisions

- Which sources are authoritative?
- Which IOCs are current enough for hunting?
- Should private feeds stay separate from public references?
- Which indicators need enrichment before action?

## Expected Outputs

- Searchable IOC library
- Filtered IOC sets
- Enrichment results
- Exportable lists

## Common Pitfalls

- Mixing private and public data without labels
- No retention policy
- Acting on stale indicators
- No source quality review


## Handoff Guidance

Use the library as a pivot point for SOC enrichment, hunting seeds, and CTI reporting rather than a blind blocklist.

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

---
id: defense-ioc-enrichment-pipeline
title: "Defense: Build IOC Enrichment Pipeline"
sidebar_position: 28
---

# Defense: Build IOC Enrichment Pipeline

**Level:** Complex Platform Workflows

**Goal:** Create a repeatable SOC enrichment pipeline for incoming IOCs.

## Real-Life Scenario

A SOC receives IOCs from many sources every day and needs a repeatable enrichment pipeline with source labels, recency, actor links, and export options.

## When To Use This

Use this workflow when you need an end-to-end platform workflow across multiple AdversaryGraph modules and want the output to remain traceable to evidence.

## Steps

1. Configure ThreatFox, OTX, VT, Malpedia, MISP, TAXII/STIX, and custom feeds as allowed.
2. Run Reference Sync and confirm IOC counts.
3. Define source labels and retention rules.
4. Import private/customer feeds into the external DB.
5. Use IOC Library filters for type, source, actor, and recency.
6. Enrich selected IOCs with VT and related sources.
7. Map IOCs to malware, actors, and TTPs when evidence supports it.
8. Export reviewed IOC sets as CSV/STIX.
9. Document which IOCs are block, hunt, monitor, or context-only.
10. Schedule daily sync and periodic quality review.


## Expected Result

Central IOC enrichment workflow with source labels, pivots, and export paths.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.


## Platform Areas Used

- Operations / Pipeline
- AI Analysis
- ATT&CK Group Library
- IOC Library
- VirusTotal / OTX / ThreatFox / Malpedia enrichment where configured
- Reference Sync
- Navigator matrix
- PDF, JSON, CSV, STIX, and Navigator exports as needed

---
id: defense-sector-detection-roadmap
title: "Defense: Create Sector-Based Detection Roadmap"
sidebar_position: 27
---

# Defense: Create Sector-Based Detection Roadmap

## Draft

**Level:** Complex Platform Workflows

**Goal:** Create a detection roadmap for a sector/customer environment.

## Real-Life Scenario

A financial services customer wants a 90-day detection roadmap based on actors, techniques, and technologies relevant to their sector.

## When To Use This

Use this workflow when you need an end-to-end platform workflow across multiple AdversaryGraph modules and want the output to remain traceable to evidence.

## Steps

1. Select customer sector, region, and technologies in Sector Intel.
2. Choose activity window and review ranked actors.
3. Show relevant actor TTPs on matrix.
4. Merge top relevant TTPs into a planning layer.
5. Compare planning layer to existing coverage.
6. Prioritize gaps based on sector relevance and telemetry.
7. Check Sigma/YARA/rule feed context for available detection ideas.
8. Create backlog items grouped by tactic.
9. Export roadmap PDF and Navigator layer.
10. Review roadmap after source sync or customer environment changes.


## Expected Result

Sector-driven detection roadmap tied to actor relevance and MITRE coverage.

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

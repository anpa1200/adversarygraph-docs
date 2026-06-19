---
id: defense-detection-content-from-intel
title: "Defense: Create Detection Content From CTI"
sidebar_position: 29
---

# Defense: Create Detection Content From CTI

**Level:** Complex Platform Workflows

**Goal:** Turn CTI findings into detection content candidates.

## When To Use This

Use this workflow when you need an end-to-end platform workflow across multiple AdversaryGraph modules and want the output to remain traceable to evidence.

## Steps

1. Analyze source report and accept validated TTPs.
2. Extract IOCs and enrich high-value observables.
3. Open TTP detail panels and detection references.
4. Sync Sigma/YARA feeds and search for related rules.
5. Map each TTP to telemetry requirements.
6. Write candidate logic or Sigma/SIEM task notes.
7. Mark expected false positives and tuning inputs.
8. Create backlog items in Pipeline/Operations.
9. Export report, layer, and IOC appendix.
10. Validate detections with test data or replay where possible.


## Expected Result

Detection content package traceable from CTI evidence to engineering tasks.

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

---
id: defense-mitre-coverage-baseline
title: "Defense: Build MITRE Coverage Baseline"
sidebar_position: 26
---

# Defense: Build MITRE Coverage Baseline

## Draft

**Level:** Complex Platform Workflows

**Goal:** Create a baseline of current coverage across MITRE ATT&CK.

## Real-Life Scenario

A security program review requires a current MITRE ATT&CK coverage baseline showing which tactics are covered, weak, or missing.

## When To Use This

Use this workflow when you need an end-to-end platform workflow across multiple AdversaryGraph modules and want the output to remain traceable to evidence.

## Steps

1. Import current detection coverage as Navigator layer or manual TTP set.
2. Normalize coverage by domain and tactic.
3. Mark detections by maturity where available.
4. Compare coverage against top sector actors.
5. Identify uncovered high-risk techniques.
6. Open TTP detail panels for detection guidance.
7. Map gaps to telemetry availability.
8. Prioritize backlog by risk, feasibility, and actor relevance.
9. Export coverage layer and gap report.
10. Schedule periodic review after ATT&CK sync.


## Expected Result

MITRE coverage baseline with prioritized gaps and detection roadmap.

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

---
id: investigation-apt-campaign-cluster
title: "Investigation: Cluster Multiple APT Reports"
sidebar_position: 23
---

# Investigation: Cluster Multiple APT Reports

**Level:** Complex Platform Workflows

**Goal:** Assess whether several reports belong to one campaign cluster.

## When To Use This

Use this workflow when you need an end-to-end platform workflow across multiple AdversaryGraph modules and want the output to remain traceable to evidence.

## Steps

1. Create a campaign workspace.
2. Analyze each report separately and store results.
3. Normalize report metadata, dates, sectors, and source labels.
4. Compare reports for shared and unique TTPs.
5. Compare IOCs across reports and enrich shared observables.
6. Compare combined TTPs against known actors and campaigns.
7. Separate generic TTP overlap from distinctive procedures.
8. Open actor profiles for likely matches and review timeline/sector fit.
9. Create one combined Navigator layer and one layer per report.
10. Write a cluster assessment: related, possibly related, or unrelated.
11. Export campaign evidence and matrix layers.


## Expected Result

Campaign clustering assessment with report-to-report and actor comparison evidence.

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

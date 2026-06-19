---
id: investigation-ransomware-intrusion
title: "Investigation: Ransomware Intrusion Triage"
sidebar_position: 21
---

# Investigation: Ransomware Intrusion Triage

**Level:** Complex Platform Workflows

**Goal:** Investigate a ransomware report from intake to actor hypothesis and detection handoff.

## Real-Life Scenario

A company reports encrypted servers, suspicious PowerShell, and possible data theft, and the IR/CTI team needs a full path from report intake to actor hypotheses and detection backlog.

## When To Use This

Use this workflow when you need an end-to-end platform workflow across multiple AdversaryGraph modules and want the output to remain traceable to evidence.

## Steps

1. Run selftest and confirm enrichment keys are available.
2. Create an investigation workspace in Operations/Pipeline.
3. Upload the ransom incident report and extract TTPs.
4. Review every TTP and mark weak mappings as needs-evidence.
5. Extract IOCs from the report and store them in IOC Library.
6. Enrich hashes/domains/IPs with VT, OTX, ThreatFox, and sandbox feeds.
7. Compare accepted TTPs against actors and campaigns.
8. Open top actor profiles and review IOCs, reports, aliases, and sector relevance.
9. Show accepted TTPs on Navigator and export a layer.
10. Create detection backlog items for initial access, execution, lateral movement, and impact.
11. Export a PDF investigation summary with evidence, hypotheses, and next actions.


## Expected Result

Investigation package with TTPs, IOCs, actor hypotheses, Navigator layer, and detection backlog.

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

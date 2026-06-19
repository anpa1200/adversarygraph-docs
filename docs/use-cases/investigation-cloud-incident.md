---
id: investigation-cloud-incident
title: "Investigation: Cloud And Kubernetes Incident"
sidebar_position: 22
---

# Investigation: Cloud And Kubernetes Incident

**Level:** Complex Platform Workflows

**Goal:** Investigate a cloud/Kubernetes incident using sector, TTP, IOC, and detection context.

## When To Use This

Use this workflow when you need an end-to-end platform workflow across multiple AdversaryGraph modules and want the output to remain traceable to evidence.

## Steps

1. Create workspace and select cloud/Kubernetes technology context.
2. Import incident notes, audit logs summary, or report text.
3. Run AI extraction and manually validate cloud-relevant TTPs.
4. Use Sector Intel filters for cloud/Kubernetes-related actor relevance.
5. Extract service accounts, domains, IPs, tools, and hashes as IOCs/artifacts.
6. Enrich observables and identify malware/tool families where possible.
7. Compare TTPs to actor and campaign profiles.
8. Review ATT&CK matrix for cloud-adjacent execution, persistence, discovery, credential access, and exfiltration.
9. Map each accepted TTP to available telemetry such as Kubernetes audit, cloud control plane, EDR, or proxy logs.
10. Export a PDF and a detection backlog for the cloud/SOC team.


## Expected Result

Cloud incident CTI package with prioritized telemetry-backed detection work.

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

---
id: investigation-third-party-report-validation
title: "Investigation: Validate A Third-Party CTI Report"
sidebar_position: 25
---

# Investigation: Validate A Third-Party CTI Report

**Level:** Complex Platform Workflows

**Goal:** Validate a vendor or public CTI report before using it operationally.

## Real-Life Scenario

A vendor report makes strong actor and technique claims, and the internal CTI team must validate which findings are evidence-backed before sending them to SOC operations.

## When To Use This

Use this workflow when you need an end-to-end platform workflow across multiple AdversaryGraph modules and want the output to remain traceable to evidence.

## Steps

1. Import the report and extract TTPs.
2. Review each TTP against actual procedure evidence.
3. Extract all IOCs and remove examples/placeholders.
4. Enrich high-priority observables.
5. Compare report claims against actor profiles and ATT&CK data.
6. Check whether sector/geography claims align with available evidence.
7. Mark unsupported claims as needs-evidence.
8. Create a reviewed Navigator layer.
9. Export a validation note showing accepted, rejected, and uncertain findings.
10. Send only reviewed detections/IOCs to SOC workflows.


## Expected Result

Validated CTI report with reviewed mappings and operationally safe outputs.

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

---
id: overview
title: Comparison Overview
---

# Comparison Overview

AdversaryGraph is not positioned as a replacement for mature CTI, sharing, ATT&CK visualization, emulation, or malware sandbox platforms. Its role is the analysis layer between intelligence intake and detection engineering: mapping evidence to ATT&CK/ATLAS, reviewing IOCs/CVEs/assets, comparing behavior, validating telemetry, and exporting analyst-ready outputs.

## Summary

| Platform | Primary Job | AdversaryGraph Position |
|---|---|---|
| OpenCTI | CTI knowledge graph and operational intelligence management | Complementary analyst workbench for report-to-ATT&CK extraction, detection-gap review, and local enrichment before/after OpenCTI sync |
| MISP | Threat intelligence sharing, events, attributes, galaxies, and communities | Complementary review and mapping layer for MISP-imported indicators and actor context |
| ATT&CK Navigator | Visual ATT&CK layer creation and matrix review | Adds ingestion, AI-assisted mapping, actor/report comparison, evidence review, and detection handoff |
| Atomic Red Team | Atomic ATT&CK tests for control validation | Adds planning, telemetry readiness, SIEM forwarding, AI-generated source-shaped events, and CTI-to-detection context |
| Malware sandboxes | Detonation, behavioral reports, network/process/file artifacts | Adds CTI correlation, ATT&CK mapping review, IOC/CVE/actor context, and case reporting |

## Official References Used

- OpenCTI documentation: https://docs.opencti.io/
- MISP project: https://www.misp-project.org/
- MITRE ATT&CK Navigator: https://github.com/mitre-attack/attack-navigator
- Atomic Red Team: https://github.com/redcanaryco/atomic-red-team
- Cuckoo Sandbox: https://cuckoosandbox.org/
- CAPE Sandbox: https://github.com/kevoreilly/CAPEv2
- ANY.RUN: https://any.run/
- Joe Sandbox: https://www.joesandbox.com/

## Best-Fit Use

Use AdversaryGraph when the team needs to:

- convert reports, logs, malware findings, CVEs, and asset inventories into reviewed ATT&CK/ATLAS mappings
- compare TTP overlap with actors, campaigns, and prior reports
- produce detection backlog and telemetry gap outputs
- validate SIEM parsing and detection logic with lab telemetry or source-shaped events
- work locally with private analysis data before pushing selected outputs to a CTI system

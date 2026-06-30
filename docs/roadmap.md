---
id: roadmap
title: Roadmap
sidebar_position: 12
---

# Roadmap

Current release: **AdversaryGraph v5.4.0**.

AdversaryGraph is functional and actively developed. The roadmap below separates
what is already shipped from the next hardening and collaboration work.

## Recently Shipped

### v5.4.0 — Observability, Security Scanning, And Commercial Trust

- Authenticated Observability dashboard with API health, request metrics,
  recent traces, redacted log tail, top routes, and Prometheus-compatible
  metrics.
- Backend SAST coverage, dependency/security scanning guidance, and local
  `make security-scan` workflow.
- Screenshot-backed validation examples for Attack Simulation, CVE correlation,
  authentication/admin, malware analysis, and operator readiness.
- Commercial trust, architecture, and comparison documentation for reviewer and
  buyer evaluation.

### v5.3.0 — Authentication And User Operations

- Native username/password login, viewer/analyst/admin roles, bootstrap admin
  setup, and admin user-management workflows.
- Local authentication setup guide reachable from the running app and login
  page.

### v5.1.0 — Telemetry Fidelity And CVE Correlation

- Source-correct telemetry policy for Attack Simulation.
- Raw ATT&CK/STIX preservation and normalized query tables.
- CVE Library with NVD/CISA KEV sync, CVSS/CWE/CPE fields, and strict
  APT/TTP/IOC/CVE evidence links.

### v5.0.0 — Attack Simulation And SIEM Validation

- TTP-first Attack Simulation workflow with ATT&CK matrix selection.
- Per-technique simulation pages with scenario description, telemetry source,
  event structure, and detection focus.
- Real-time attacked-server log view for lab web telemetry.
- SIEM forwarding with saved non-secret destinations and source-format controls.
- AI Attack Assistant for coherent, multi-phase detection drills.
- Named kill-chain scenarios, attack-chain graph, and explain-attack view.
- Screenshot-backed documentation and Medium release article.

### v4.1.0 — Asset Attack Surface Mapping

- Asset inventory upload and normalization from CSV, JSON, CMDB exports, cloud
  lists, scanner output, and hostname/IP lists.
- AI-assisted attack-surface explanation, likely entry points, ATT&CK candidate
  mapping, validation gaps, and saved asset cases.
- White Navigator layer for asset-inventory-based TTP candidates.

### v4.0.0 — Malware Analysis Workspace

- MalwareGraph-backed static triage, IOC extraction, hash feed checks, string
  analysis, unpacking workflow, decompilation/debug IDE, and controlled
  dynamic-analysis preparation.
- AI-assisted function summaries, behavior summaries, validation gaps, and
  malware-analysis reporting.

## Version History From v2.5

| Version | Release Theme | What Changed |
|---|---|---|
| v5.4.0 | Observability and commercial trust | Runtime observability dashboard, security scanning workflow, screenshot-backed validation examples, commercial trust package, architecture diagrams, and comparison pages |
| v5.3.0 | Authentication and user operations | Native login, viewer/analyst/admin roles, bootstrap admin flow, admin user-management, and auth documentation |
| v5.2.0 | QA hardening | Reproducible tests, frontend audit cleanup, local lint/test/audit/build validation, and release metadata cleanup |
| v5.1.0 | Telemetry fidelity and CVE correlation | Source-correct Attack Simulation telemetry policy, raw STIX preservation, CVE Library, CVSS/CWE/CPE fields, and strict APT/TTP/IOC/CVE evidence links |
| v5.0.0 | Attack Simulation and SIEM validation | TTP-first simulation matrix, real lab telemetry, SIEM forwarding, AI kill-chain drills, scenario library, and attack-chain graph |
| v4.1.0 | Asset Attack Surface Mapping | Asset inventory ingestion, deterministic exposure scoring, ATT&CK candidates, saved asset cases, and white Navigator layers |
| v4.0.0 | Malware Analysis platform release | Fully documented MalwareGraph-backed module, clickable findings, debugger-style review, dynamic-analysis preparation, and AI feedback loops |
| v3.2.0 | MalwareGraph integration milestone | Integrated Malware Analysis module documentation, standalone MalwareGraph positioning, static triage flow, and gated runtime-debug policy |
| v3.1.0 | From Log To Report workflow | Published log-to-report workflow with source-tagged IOCs/TTPs, graph pivots, actor-overlap review, AI summary, and final report generation |
| v3.0.0 | Investigation workbench | IOC Investigation, relationship graph pivoting, evidence ranking, saved sessions, AI log/PCAP analysis, and ATT&CK handoff |
| v2.7.0 | IOC Investigation workflow | Tiered enrichment pivots from one artifact, source status, TTP/actor leads, AI summary packaging, and local/external source collection |
| v2.6.0 | Telemetry triage and use cases | AI-assisted log/PCAP analysis, richer Navigator layer handling, Discover launchers, and animated use-case documentation |
| v2.5.9 | Detection Studio improvements | Default YARA/Sigma feed setup, YARA-L generation, and AI-assisted detection skeleton generation for Sigma, YARA, KQL, SPL, and EQL |
| v2.5.8 | IOC enrichment drill-down | Clickable IOC detail pages, source metadata, actor/TTP links, enrichment values, and raw JSON audit view |
| v2.5.7 | MiniMax provider support | MiniMax support across AI Analysis, Navigator AI chat, IOC-to-TTP fallback, Docker configuration, and self-test |
| v2.5.4 | IOC normalization and evidence priority | Hash normalization, duplicate merge, explicit IOC-to-TTP priority model, and opt-in AI fallback |
| v2.5.0 | IOC Library and connector hardening | IOC Library, global observable search, VirusTotal enrichment, STIX/TAXII/MISP/custom feeds, YARA/Sigma feeds, sandbox behavior feeds, and IOC-to-TTP mapping |

## Current Hardening Sprint

- Keep `main`, release tags, docs, screenshots, and public site text aligned.
- Continue route-level tests for user-facing API workflows.
- Keep dependency audit, container scan, and secret scan green in CI.
- Improve reviewer evidence: screenshots, safety boundaries, architecture notes,
  validation pages, and reproducible demo data.
- Close stale GitHub issues only after the code or documentation has been
  verified.

## Planned v5.5 Work

- Windows Lab Agent planning for real Windows Event Log, Sysmon, Defender,
  PowerShell, registry, process, and ETW telemetry.
- Broader Attack Simulation scenario coverage across web, identity, endpoint,
  cloud, proxy, DNS, and firewall telemetry.
- More production-style event fixtures for Windows Event Log, Sysmon, EDR, WAF,
  NGINX/Apache, proxy, DNS, and firewall schemas.
- Improved scenario scoring: expected detections, false-positive controls,
  coverage gaps, and missed-stage explanations.
- Exportable detection engineering exercises for SOC training and purple-team
  validation.
- Deeper integrations with OpenCTI, MISP, Sigma/YARA workflows, and SIEM
  forwarding profiles.

## Longer-Term Direction

- TAXII/STIX import from CTI platforms and commercial feeds.
- Team collaboration with shared TTP layers and user namespacing.
- Automatic tracked-actor change monitoring when ATT&CK releases new versions.
- Native MITRE ATLAS ingestion adapter for the Docker platform.

## Contributing

The project is source-available. Personal/private use is free; business or
organizational use requires approval from Andrey Pautov.

- GitHub: https://github.com/anpa1200/adversarygraph
- Issues and feature requests: open an issue on GitHub
- Release article: [AdversaryGraph v5.0: From CTI Mapping to Attack Simulation and SIEM Validation](https://medium.com/@1200km/adversarygraph-v5-0-from-cti-mapping-to-attack-simulation-and-siem-validation-21873b2a6c39)

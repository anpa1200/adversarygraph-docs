---
id: roadmap
title: Roadmap
sidebar_position: 12
---

# Roadmap

Current release: **AdversaryGraph v5.0.0**.

AdversaryGraph is functional and actively developed. The roadmap below separates
what is already shipped from the next hardening and collaboration work.

## Recently Shipped

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

## Current Hardening Sprint

- Keep `main`, release tags, docs, screenshots, and public site text aligned.
- Continue route-level tests for user-facing API workflows.
- Keep dependency audit, container scan, and secret scan green in CI.
- Improve reviewer evidence: screenshots, safety boundaries, architecture notes,
  validation pages, and reproducible demo data.
- Close stale GitHub issues only after the code or documentation has been
  verified.

## Planned v5.1 Work

- Broader simulation coverage across web, identity, endpoint, cloud, proxy, DNS,
  and firewall telemetry.
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

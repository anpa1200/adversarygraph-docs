---
id: overview
title: ATT&CK Workspace
sidebar_position: 1
---

# ATT&CK Matrix Workspace

The matrix is the central workspace for exploring ATT&CK, selecting techniques manually, overlaying group profiles, reviewing coverage gaps, and planning a detection backlog.

## Data Provenance

The selected domain and ATT&CK version are displayed in the UI. Docker ingests official MITRE ATT&CK STIX bundles and can synchronize releases through scheduled jobs. Counts depend on the selected domain and ingested release.

## Core Workflow

1. Search or browse the matrix.
2. Select techniques supported by source evidence.
3. Overlay a group profile when useful.
4. Review shared and missing behavior.
5. Convert uncovered techniques into hunting or detection-backlog tasks.
6. Export Navigator JSON, JSON/PDF output, or a backlog where supported by the selected mode.

## Legend

| State | Meaning |
|---|---|
| User-selected | Technique included in the analyst's current layer |
| Group profile | Technique documented in the selected group overlay |
| Overlap | Technique exists in both selections |
| Missing coverage | Target technique absent from imported detection coverage |
| Detection status | Coverage/maturity state when imported or recorded |

Open a technique detail panel to review ATT&CK description, platforms, telemetry, detection guidance, mitigation, and linked ecosystem research. AI chat is available only in the Docker platform.

Next: [Save and Load Named Layers →](/navigator/layers)

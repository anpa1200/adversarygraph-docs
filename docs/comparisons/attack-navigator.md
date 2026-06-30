---
id: attack-navigator
title: AdversaryGraph vs ATT&CK Navigator
---

# AdversaryGraph vs ATT&CK Navigator

MITRE ATT&CK Navigator is the standard matrix/layer visualization tool for ATT&CK techniques. AdversaryGraph includes ATT&CK matrix and layer workflows, but its main value is upstream and downstream of the layer: ingesting evidence, mapping reports, comparing actors/reports, reviewing telemetry gaps, and exporting detection work.

Official reference: https://github.com/mitre-attack/attack-navigator

## Fit Comparison

| Need | ATT&CK Navigator | AdversaryGraph |
|---|---|---|
| Visual ATT&CK layers | Strong fit | Supported |
| Manual technique selection | Strong fit | Supported |
| Report ingestion and AI extraction | Not primary role | Core workflow |
| Actor/campaign/report similarity | Not primary role | Core workflow |
| IOC/CVE/malware/asset context | Not primary role | Core workflow |
| Detection backlog and telemetry readiness | Not primary role | Core workflow |
| Export Navigator layers | Strong fit | Supported |

## Use Together

Use AdversaryGraph to create reviewed layers from reports, assets, malware analysis, attack simulations, or selected TTPs. Export the final layer to ATT&CK Navigator when the team wants a standard matrix artifact for sharing or presentation.

## Boundary

AdversaryGraph should not claim to replace ATT&CK Navigator for pure ATT&CK layer review. It extends the workflow around the layer.

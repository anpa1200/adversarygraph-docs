---
id: actor-ioc-enrichment
title: Enrich Actor Profiles With Current IOCs
sidebar_position: 10
---

# Enrich Actor Profiles With Current IOCs

**Analyst question:** What observables are currently connected to this actor or malware family?

**Primary users:** CTI analyst, SOC analyst, threat hunter, or malware analyst.

## Scenario

An actor profile is useful, but the team also needs current observables and malware context for hunting and enrichment.

## Inputs

- Actor profile
- ThreatFox, OTX, Malpedia, custom feed, or report-derived IOCs
- Optional VirusTotal key
- Actor aliases and malware names

## Prerequisites

- IOC sync sources are configured
- Actor alias mapping is available
- IOC Library is reachable
- Analyst understands that many IOCs will not map cleanly to actors

## Detailed Workflow

1. Open the actor page.
2. Open the IOCs tab and review current mapped indicators.
3. Run source sync or actor enrichment.
4. Review source, type, malware family, first seen, last seen, and confidence.
5. Open IOC enrichment for high-priority indicators.
6. Export CSV if the SOC needs watchlist input.
7. Document unmapped but relevant indicators separately.

## Analyst Decisions

- Is the IOC directly attributed to the actor or only to a malware family?
- Is it current enough to hunt on?
- Is it high-confidence or noisy infrastructure?
- Should it become a blocklist item, hunt seed, or context-only enrichment?

## Expected Outputs

- Actor-linked IOC list
- CSV export
- Enrichment notes
- Possible TTP links

## Common Pitfalls

- Treating every malware-family IOC as actor-specific
- Using stale IOCs as blocking rules
- Ignoring source confidence
- Expecting all actors to have current public IOCs


## Handoff Guidance

Give SOC teams current, source-labeled IOCs with clear usage guidance: block, hunt, enrich, or monitor.

## Review Standard

- Keep evidence attached to every accepted finding.
- Separate observed behavior from enrichment and hypothesis.
- Use `needs-evidence` for plausible but unproven mappings.
- Treat actor similarity, IOC enrichment, and rule matches as analytical signals until corroborated.
- Export only reviewed results for customer, SOC, incident response, or detection engineering use.

## Related Platform Areas

- AI Analysis
- ATT&CK Navigator
- ATT&CK Group Library
- IOC Library
- Reference Sync
- Operations / Pipeline
- PDF, JSON, CSV, STIX, or Navigator export depending on workflow

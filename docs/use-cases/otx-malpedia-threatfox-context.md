---
id: otx-malpedia-threatfox-context
title: Pull Intelligence From OTX, Malpedia, And ThreatFox
sidebar_position: 13
---

# Pull Intelligence From OTX, Malpedia, And ThreatFox

**Analyst question:** How can open intelligence enrich actors and observables beyond a single feed?

**Primary users:** CTI analyst, malware analyst, enrichment pipeline owner, or SOC platform operator.

## Scenario

Public IOC sources are incomplete when used alone. Combining OTX pulses, Malpedia malware knowledge, and ThreatFox observables gives broader context.

## Inputs

- OTX API key
- ThreatFox auth key if required by deployment
- Malpedia source data
- Actor aliases and malware names
- IOC records

## Prerequisites

- API keys are loaded into the API container environment
- Reference Sync is reachable
- Source usage terms are understood
- Actor alias matching is enabled where possible

## Detailed Workflow

1. Open Reference Sync or actor enrichment.
2. Run the selected source sync.
3. Review success counts, updated records, and actor links.
4. Open enriched actor or IOC records.
5. Check whether source labels and timestamps make sense.
6. Use enrichment as supporting context, not final attribution.

## Analyst Decisions

- Which source is authoritative for this field?
- Is the data current enough to use operationally?
- Did alias matching create false positives?
- Should enrichment update actor relevance, IOC status, or TTP mapping?

## Expected Outputs

- Source-labeled IOC records
- Malware family context
- Actor evidence notes
- Updated enrichment timestamps

## Common Pitfalls

- Expecting all IOCs to map to actors
- Over-trusting alias matches
- Ignoring source licensing and API limits
- Mixing low-confidence enrichment into reports


## Handoff Guidance

Use combined enrichment to improve actor pages, IOC Library records, and investigation pivots while preserving source labels.

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

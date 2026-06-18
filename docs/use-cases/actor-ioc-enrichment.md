---
id: actor-ioc-enrichment
title: Enrich Actor Profiles With Current IOCs
sidebar_position: 10
---

# Enrich Actor Profiles With Current IOCs

**Analyst question:** What observables are connected to an actor or malware family?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Open an actor page.
2. Use the IOCs tab to review current observables.
3. Sync ThreatFox or enrich from OTX/Malpedia/custom feeds.
4. Export actor IOCs as CSV when needed.
5. Review mapped TTPs or unmapped observables.


## Expected Output

Actor-linked IOC set with source, type, first/last seen, malware family, and optional TTP mapping.

## Quality Checks

- Validate every technique against the source evidence.
- Treat similarity and enrichment as analytical signals, not final conclusions.
- Mark weak mappings as `needs-evidence` or `rejected` instead of forcing them into the final layer.
- Export only reviewed data when using results for customer, SOC, or detection engineering handoff.

## Related Platform Areas

- AI Analysis
- ATT&CK Navigator
- ATT&CK Group Library
- IOC Library
- Reference Sync
- Report export

---
id: otx-malpedia-threatfox-context
title: Pull Intelligence From OTX, Malpedia, And ThreatFox
sidebar_position: 13
---

# Pull Intelligence From OTX, Malpedia, And ThreatFox

**Analyst question:** How can open intelligence enrich actors and observables?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Configure API keys where required.
2. Use Reference Sync or actor enrichment.
3. Pull source-backed malware, pulse, and IOC context.
4. Normalize aliases and malware family names.
5. Review source timestamps and confidence.


## Expected Output

Enriched actor and IOC evidence from external open intelligence sources.

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

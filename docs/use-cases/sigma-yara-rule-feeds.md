---
id: sigma-yara-rule-feeds
title: Sync Sigma And YARA Rule Feeds
sidebar_position: 17
---

# Sync Sigma And YARA Rule Feeds

**Analyst question:** Which detection rules mention the same malware, behavior, or indicator?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Add Sigma and YARA feed sources.
2. Sync detection feeds.
3. Review rule names, tags, and descriptions in enrichment context.
4. Connect rule context to malware and TTPs where possible.
5. Use the result for detection engineering handoff.


## Expected Output

Detection-rule context for IOCs, malware families, and ATT&CK techniques.

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

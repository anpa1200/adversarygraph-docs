---
id: virustotal-ioc-enrichment
title: Enrich An IOC With VirusTotal
sidebar_position: 12
---

# Enrich An IOC With VirusTotal

**Analyst question:** What does VirusTotal know about this IP, domain, URL, or hash?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Open VirusTotal Lookup or IOC Library enrichment.
2. Submit the indicator.
3. Review reputation, detections, tags, crowdsourced rules, and relationships.
4. Inspect possible actor, malware, and TTP links.
5. Add relevant TTPs to My TTPs or show them on the matrix.


## Expected Output

Structured VirusTotal enrichment with pivots to actors, TTPs, and Navigator.

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

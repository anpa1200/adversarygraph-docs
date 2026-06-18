---
id: map-threat-report-to-attack
title: Map A New Threat Report To MITRE ATT&CK
sidebar_position: 1
---

# Map A New Threat Report To MITRE ATT&CK

**Analyst question:** Which techniques are described in this report, and what evidence supports each mapping?

## When To Use This

Use this workflow when you need a repeatable, evidence-aware way to move from raw intelligence to structured CTI output inside AdversaryGraph.

## Workflow

1. Upload a PDF, DOCX, TXT, or paste report text into AI Analysis.
2. Choose the LLM provider or a local/private model gateway.
3. Review extracted techniques, evidence snippets, confidence, and review status.
4. Accept strong mappings, mark weak mappings as needs-evidence or rejected.
5. Inject accepted TTPs into Navigator and export the layer or PDF.


## Expected Output

Technique list, source evidence, confidence values, review states, Navigator layer, JSON, and PDF report.

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

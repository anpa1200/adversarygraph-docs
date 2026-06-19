---
id: map-threat-report-to-attack
title: Map A New Threat Report To MITRE ATT&CK
sidebar_position: 1
---

# Map A New Threat Report To MITRE ATT&CK

**Analyst question:** Which ATT&CK techniques are actually described in this report, and what evidence supports each mapping?

**Primary users:** CTI analyst, detection engineer, SOC lead, or incident responder.

## Scenario

A new vendor report, incident writeup, customer PDF, red-team debrief, or DFIR article arrives and needs to become a structured ATT&CK layer instead of remaining free text.

## Inputs

- Threat report as PDF, DOCX, TXT, or pasted text
- Optional customer context such as affected platform, sector, or observed tools
- Configured LLM provider or local/private LLM gateway
- Current ATT&CK reference data loaded in AdversaryGraph

## Prerequisites

- API and database selftest are green
- ATT&CK Enterprise/Mobile/ICS data is synchronized
- The report is allowed to be processed by the selected LLM provider
- The analyst understands that LLM mappings require review

## Detailed Workflow

1. Open AI Analysis and load the report text or file.
2. Choose the analysis domain and LLM provider. Use a local/private provider for sensitive reports.
3. Run extraction and wait for the structured technique list, evidence snippets, and confidence values.
4. Read each mapping against the source evidence. Confirm that the behavior matches the ATT&CK definition, not only a keyword.
5. Set review status: accepted, suggested, needs-evidence, or rejected.
6. Open each important TTP detail panel to review tactic context, detection notes, and related references.
7. Inject accepted TTPs into Navigator and review matrix coverage.
8. Export the layer, JSON, or PDF only after review is complete.

## Analyst Decisions

- Does the evidence describe procedure, or only mention a tool name?
- Is the selected technique too broad when a sub-technique is available?
- Should the mapping be accepted now, or kept as needs-evidence until more telemetry exists?
- Is the output for internal triage, customer delivery, or detection engineering?

## Expected Outputs

- Reviewed ATT&CK technique list
- Evidence snippets and confidence values
- Navigator matrix layer
- PDF/JSON report export
- Detection handoff candidate list

## Common Pitfalls

- Accepting model output without source review
- Mapping generic words to techniques without behavioral evidence
- Mixing attribution claims with TTP similarity
- Exporting unreviewed findings to customers


## Handoff Guidance

Hand accepted TTPs, evidence, and confidence notes to detection engineers. Keep rejected and needs-evidence items visible for auditability and later investigation.

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

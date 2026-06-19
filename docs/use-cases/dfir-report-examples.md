---
id: dfir-report-examples
title: Analyze DFIR Report Examples
sidebar_position: 20
---

# Analyze DFIR Report Examples

**Analyst question:** How can public DFIR reports be used as validation and training examples?

**Primary users:** CTI analyst, detection engineer, tool evaluator, trainer, or SOC team lead.

## Scenario

A team wants safe public material to test extraction, compare behavior, create demos, or train analysts without using customer data.

## Inputs

- DFIR example metadata
- Source report URL
- Known TTPs and actors when available
- AI Analysis workflow

## Prerequisites

- DFIR examples index is synchronized
- Source report licensing/usage is understood
- Analysts know that metadata is not full report content
- ATT&CK data is loaded

## Detailed Workflow

1. Open DFIR Examples.
2. Select a report relevant to the technique, actor, or malware family of interest.
3. Review linked TTPs, actors, and source URL.
4. Open the source report if full context is needed.
5. Run AI analysis on allowed report text or excerpts.
6. Compare extracted TTPs against expected mappings.
7. Use differences to improve prompts, review discipline, or detection logic.

## Analyst Decisions

- Is the report allowed to be reused for this purpose?
- Does metadata coverage match the full report?
- Are extracted techniques supported by evidence?
- What should be used for demo, training, or validation?

## Expected Outputs

- Training case
- Extraction validation result
- Expected versus actual mapping notes
- Demo-ready workflow

## Common Pitfalls

- Treating metadata as the full report
- Ignoring source usage restrictions
- Using examples without analyst review
- Overfitting prompts to one report


## Handoff Guidance

Use DFIR examples for demos, analyst training, extraction QA, and detection engineering practice without exposing private reports.

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

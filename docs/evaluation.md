---
id: evaluation
title: Evaluation and Analyst Validation
sidebar_position: 10
---

# Evaluation and Analyst Validation

ThreatMapper output is a first-pass structured analysis, not a substitute for analyst validation.

## Why Validation Matters

LLM-generated mappings can contain false positives, false negatives, and ambiguous technique assignments. ATT&CK techniques can overlap conceptually, and a report may omit the procedure detail needed for a defensible mapping.

## Analyst Review Workflow

1. Locate the exact source evidence for each proposed technique.
2. Compare the described procedure with the ATT&CK definition.
3. Reject mappings supported only by generic intent or unsupported inference.
4. Record confidence, telemetry requirements, and contradictory evidence.
5. Validate group/campaign similarity with non-TTP evidence.
6. Hand validated gaps to detection engineering with an owner and status.

Use ThreatMapper output as a first-pass structured analysis. Analysts should validate technique mappings against source evidence, procedure descriptions, telemetry requirements, and ATT&CK definitions.

## Sample Evaluation Format

| Report | Expected Techniques | Extracted Techniques | False Positives | Missed Techniques | Analyst Notes |
|---|---|---|---|---|---|
| Sample incident | T1059.001, T1053.005 | T1059.001, T1071.001 | T1071.001 | T1053.005 | Validate procedure evidence and update prompt/test case |

## Suggested Benchmark Methodology

Build a versioned benchmark from analyst-reviewed reports. Measure technique precision and recall, evidence-grounding quality, confidence calibration, repeatability by provider/model, and time saved after review. Keep the benchmark separate from prompt-development examples and rerun it after provider, prompt, or ATT&CK-version changes.

## Detection Engineering Handoff

A useful handoff records ATT&CK technique ID and name, tactic, procedure evidence, required telemetry, detection idea, existing coverage, gap status, priority, validation status, owner, and notes.

---
id: intermediate-review-coverage-gap
title: "Review One Coverage Gap"
sidebar_position: 19
---

# Review One Coverage Gap

**Level:** Intermediate

**Goal:** Compare a threat layer to existing coverage.

## Real-Life Scenario

A SOC lead imports current detection coverage and wants to know which high-priority actor TTPs are still not covered.

## When To Use This

Use this workflow when you need a structured analyst workflow and want the output to remain traceable to evidence.

## Steps

1. Load threat TTPs into Navigator.
2. Import or load current coverage layer.
3. Identify uncovered high-priority tactics/techniques.
4. Open TTP detail panels for detection guidance.
5. Create backlog items for feasible detections.


## Expected Result

Focused coverage-gap list for engineering.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

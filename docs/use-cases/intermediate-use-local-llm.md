---
id: intermediate-use-local-llm
title: "Use A Local LLM For Private Reports"
sidebar_position: 20
---

# Use A Local LLM For Private Reports

## Draft

**Level:** Intermediate

**Goal:** Analyze sensitive content without public LLM routing.

## Real-Life Scenario

A customer report contains sensitive incident details, so the analyst must run extraction through a private local LLM gateway instead of a public API.

## When To Use This

Use this workflow when you need a structured analyst workflow and want the output to remain traceable to evidence.

## Steps

1. Configure local/private LLM gateway in deployment env.
2. Run selftest and confirm provider is reachable.
3. Choose local provider in AI Analysis.
4. Analyze the report and review mappings.
5. Export only reviewed findings.


## Expected Result

Private report extraction with controlled model routing.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

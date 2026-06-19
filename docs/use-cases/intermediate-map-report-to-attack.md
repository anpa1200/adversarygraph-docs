---
id: intermediate-map-report-to-attack
title: "Map A Report To ATT&CK"
sidebar_position: 11
---

# Map A Report To ATT&CK

**Level:** Intermediate

**Goal:** Turn one report into reviewed ATT&CK techniques.

## Real-Life Scenario

A vendor publishes a report about a new intrusion chain, and the CTI team needs reviewed ATT&CK mappings before creating detections or briefing the SOC.

## When To Use This

Use this workflow when you need a structured analyst workflow and want the output to remain traceable to evidence.

## Steps

1. Load PDF/DOCX/TXT or paste text into AI Analysis.
2. Choose provider/domain and run extraction.
3. Review evidence for every TTP and set review status.
4. Inject accepted TTPs into Navigator.
5. Export JSON, layer, or PDF.


## Expected Result

Reviewed TTP set with evidence and exportable layer/report.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

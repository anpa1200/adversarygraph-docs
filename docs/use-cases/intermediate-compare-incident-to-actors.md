---
id: intermediate-compare-incident-to-actors
title: "Compare Incident TTPs To Actors"
sidebar_position: 12
---

# Compare Incident TTPs To Actors

**Level:** Intermediate

**Goal:** Use TTP overlap to generate actor hypotheses.

## Real-Life Scenario

An IR team observes credential theft, remote execution, and exfiltration behaviors and wants to know which known actors have similar TTP patterns.

## When To Use This

Use this workflow when you need a structured analyst workflow and want the output to remain traceable to evidence.

## Steps

1. Load accepted incident TTPs into My TTPs.
2. Open Compare against groups.
3. Review shared techniques and Jaccard overlap.
4. Open top actor pages and check sector, timeline, aliases, reports, and IOCs.
5. Document hypotheses and caveats.


## Expected Result

Ranked actor hypotheses without overclaiming attribution.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

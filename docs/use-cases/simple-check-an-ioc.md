---
id: simple-check-an-ioc
title: "Check One IOC"
sidebar_position: 1
---

# Check One IOC

**Level:** Simple

**Goal:** Check whether one IP, domain, URL, or hash has useful enrichment context.

## When To Use This

Use this workflow when you need a fast, low-friction action and want the output to remain traceable to evidence.

## Steps

1. Open VirusTotal Lookup or IOC Library Enrichment.
2. Submit the indicator and review reputation, tags, relationships, and possible actor/TTP links.


## Expected Result

Quick IOC context for triage or hunting seed.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

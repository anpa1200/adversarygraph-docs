---
id: intermediate-pull-taxii-stix
title: "Pull TAXII Or Import STIX"
sidebar_position: 16
---

# Pull TAXII Or Import STIX

**Level:** Intermediate

**Goal:** Exchange structured intelligence with CTI platforms.

## Real-Life Scenario

A partner shares a TAXII collection, and the platform owner wants to import the indicators into the local IOC Library for review and enrichment.

## When To Use This

Use this workflow when you need a structured analyst workflow and want the output to remain traceable to evidence.

## Steps

1. Prepare TAXII collection URL or STIX bundle.
2. Import/pull the data in IOC Library.
3. Review imported indicators and observed-data records.
4. Filter by source and actor where possible.
5. Export STIX when sharing reviewed IOC subsets.


## Expected Result

Structured STIX/TAXII intelligence connected to IOC workflows.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

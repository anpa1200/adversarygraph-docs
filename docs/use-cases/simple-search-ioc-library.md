---
id: simple-search-ioc-library
title: "Search The IOC Library"
sidebar_position: 4
---

# Search The IOC Library

**Level:** Simple

**Goal:** Find whether an observable already exists in local or synced intelligence.

## Real-Life Scenario

An incident responder finds an IP address in proxy logs and needs to know whether it already exists in synced ThreatFox, MISP, OTX, or private customer feeds.

## When To Use This

Use this workflow when you need a fast, low-friction action and want the output to remain traceable to evidence.

## Steps

1. Open IOC Library and search the indicator, malware name, campaign, actor, or source.
2. Filter by type/source/group and open enrichment for the most relevant result.


## Expected Result

Fast lookup across stored public and private observables.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

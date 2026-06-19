---
id: intermediate-enrich-actor-iocs
title: "Enrich Actor IOCs"
sidebar_position: 14
---

# Enrich Actor IOCs

## Draft

**Level:** Intermediate

**Goal:** Add current observable context to one actor profile.

## Real-Life Scenario

A threat hunter is preparing an APT28 hunt and needs current source-labeled IOCs connected to actor context, not a generic stale blocklist.

## When To Use This

Use this workflow when you need a structured analyst workflow and want the output to remain traceable to evidence.

## Steps

1. Open actor profile and IOCs tab.
2. Sync ThreatFox/OTX/Malpedia or custom feeds.
3. Review IOC source, last seen, malware, and confidence.
4. Open enrichment for high-value observables.
5. Export CSV if the SOC needs a watchlist.


## Expected Result

Source-labeled actor IOC context.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

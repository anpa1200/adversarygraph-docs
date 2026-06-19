---
id: simple-check-an-ioc
title: "Check One IOC"
sidebar_position: 1
---

# Check One IOC

## Draft

**Level:** Simple

**Goal:** Check whether one IP, domain, URL, or hash has useful enrichment context.

## Real-Life Scenario

A SOC analyst receives a suspicious domain from an EDR alert during morning triage and needs to know in under two minutes whether it is known malicious, related to malware, or only a weak signal.

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

---
id: simple-sync-threatfox
title: "Sync ThreatFox IOCs"
sidebar_position: 5
---

# Sync ThreatFox IOCs

**Level:** Simple

**Goal:** Refresh open-source IOC data for actor and malware context.

## Real-Life Scenario

A SOC team starts a shift and wants fresh open-source IOC context before investigating overnight alerts.

## When To Use This

Use this workflow when you need a fast, low-friction action and want the output to remain traceable to evidence.

## Steps

1. Open Reference Sync and run ThreatFox IOC sync.
2. Review sync counts and check actor IOC tabs for updated observables.


## Expected Result

Updated IOC Library records from ThreatFox.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

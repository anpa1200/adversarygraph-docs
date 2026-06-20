---
id: intermediate-sync-yara-sigma
title: "Sync YARA And Sigma Feeds"
sidebar_position: 17
---

# Sync YARA And Sigma Feeds

**Level:** Intermediate

**Goal:** Connect detection-rule context to IOCs and malware.

## Real-Life Scenario

A malware analyst finds a suspicious hash and wants to know whether public or internal YARA/Sigma rules already describe related behavior.

## When To Use This

Use this workflow when you need a structured analyst workflow and want the output to remain traceable to evidence.

## Steps

1. Add YARA/Sigma feed sources.
2. Run rule-feed sync.
3. Open IOC or malware enrichment.
4. Review matching rule names, tags, and references.
5. Use rule context as detection research input.


## Expected Result

Detection content leads tied to IOC/malware context.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

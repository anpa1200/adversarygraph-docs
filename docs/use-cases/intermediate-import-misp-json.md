---
id: intermediate-import-misp-json
title: "Import MISP JSON"
sidebar_position: 15
---

# Import MISP JSON

## Draft

**Level:** Intermediate

**Goal:** Bring MISP event or attribute exports into IOC Library.

## Real-Life Scenario

The CTI team already stores curated events in MISP and wants those observables searchable in AdversaryGraph without manual copy-paste.

## When To Use This

Use this workflow when you need a structured analyst workflow and want the output to remain traceable to evidence.

## Steps

1. Create or expose a MISP JSON export URL.
2. Open IOC Library source panel and connect the MISP source.
3. Sync and filter by the MISP source label.
4. Review imported observables and tags.
5. Enrich or export only approved data.


## Expected Result

MISP-backed IOC records searchable in AdversaryGraph.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

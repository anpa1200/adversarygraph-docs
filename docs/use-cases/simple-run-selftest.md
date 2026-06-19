---
id: simple-run-selftest
title: "Run Deployment Selftest"
sidebar_position: 8
---

# Run Deployment Selftest

**Level:** Simple

**Goal:** Check whether the deployment is healthy before analysis.

## When To Use This

Use this workflow when you need a fast, low-friction action and want the output to remain traceable to evidence.

## Steps

1. Open the app and run Self-test or call the selftest endpoint.
2. Fix any popup errors, then click Recheck until all checks are green.


## Expected Result

Clear readiness status for API, DB, ATT&CK data, and keys.

## Review Notes

- Keep source labels and evidence attached to every accepted result.
- Treat actor matches, enrichment hits, and matrix overlap as analytical signals until corroborated.
- Export only reviewed findings for customer, SOC, detection engineering, or executive use.

---
id: misp
title: AdversaryGraph vs MISP
---

# AdversaryGraph vs MISP

MISP is a threat intelligence sharing platform centered on events, attributes, galaxies, taxonomies, correlation, and community sharing workflows. AdversaryGraph does not replace MISP. It consumes MISP-style context and helps analysts map intelligence to ATT&CK, compare behavior, and produce detection-oriented outputs.

Official reference: https://www.misp-project.org/

## Fit Comparison

| Need | MISP | AdversaryGraph |
|---|---|---|
| Intelligence sharing communities | Strong fit | Not claimed |
| Event and attribute lifecycle | Strong fit | Local IOC Library and cases |
| Galaxies and taxonomies | Strong fit | Uses actor/sector/context evidence where imported or synced |
| Indicator distribution | Strong fit | Local enrichment and export |
| ATT&CK mapping review | Supported through data/modeling | Core workflow |
| Report-to-detection handoff | Requires local process | Core workflow |
| Asset/CVE/TTP correlation | Requires modeling | Built into current platform direction |

## Use Together

Recommended operating model:

1. Use MISP for shared events, attributes, galaxies, and community distribution.
2. Import relevant MISP JSON or feed outputs into AdversaryGraph.
3. Review IOCs, map TTPs, enrich CVEs, compare actors/campaigns, and generate analyst handoff material.
4. Export reviewed indicators or notes back to the MISP-facing process if required.

## Boundary

AdversaryGraph is not a sharing community platform. Its value is local review, correlation, detection planning, and case output.

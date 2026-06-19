---
id: compare-incident-to-apt-groups
title: Compare An Incident To Known APT Groups
sidebar_position: 3
---

# Compare An Incident To Known APT Groups

**Analyst question:** Which known groups have the strongest behavior overlap with this incident?

**Primary users:** CTI analyst, IR analyst, threat hunter, or senior SOC analyst.

## Scenario

An incident has a set of observed techniques. The analyst needs to know whether the behavior resembles known actors, while avoiding unsupported attribution.

## Inputs

- Incident TTPs from AI extraction or manual selection
- ATT&CK group profiles
- Known campaign data
- Optional IOCs and malware names

## Prerequisites

- ATT&CK group library is synchronized
- Incident TTPs are reviewed
- Common/generic TTPs are treated carefully
- Analyst understands Jaccard similarity limitations

## Detailed Workflow

1. Load reviewed incident TTPs into My TTPs.
2. Open Compare against groups.
3. Review ranked results by overlap score and shared technique count.
4. Open top actor pages and inspect aliases, description, campaigns, CTI/IR reports, and IOCs.
5. Separate high-signal techniques from generic techniques such as PowerShell or Scheduled Task.
6. Document actor matches as hypotheses with supporting and contradicting evidence.
7. Export or screenshot the comparison for the investigation record.

## Analyst Decisions

- Does overlap rely on unique procedures or generic tradecraft?
- Are there actor-specific tools, malware, sectors, or regions that support the hypothesis?
- Are there contradictions in target geography, timeline, or intrusion chain?
- Should the result influence detection priority without making attribution?

## Expected Outputs

- Ranked actor hypothesis list
- Shared TTP table
- Actor profile links
- Supporting/contradicting evidence notes

## Common Pitfalls

- Treating overlap as proof of attribution
- Ignoring common techniques that inflate similarity
- Skipping timeline or sector checks
- Failing to document why a top match was rejected


## Handoff Guidance

Give IR and management a hypothesis list with confidence and caveats. Use the overlap to focus investigation and detection, not to claim final attribution.

## Review Standard

- Keep evidence attached to every accepted finding.
- Separate observed behavior from enrichment and hypothesis.
- Use `needs-evidence` for plausible but unproven mappings.
- Treat actor similarity, IOC enrichment, and rule matches as analytical signals until corroborated.
- Export only reviewed results for customer, SOC, incident response, or detection engineering use.

## Related Platform Areas

- AI Analysis
- ATT&CK Navigator
- ATT&CK Group Library
- IOC Library
- Reference Sync
- Operations / Pipeline
- PDF, JSON, CSV, STIX, or Navigator export depending on workflow

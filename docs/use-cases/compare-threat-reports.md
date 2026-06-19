---
id: compare-threat-reports
title: Compare Two Or More Threat Reports
sidebar_position: 4
---

# Compare Two Or More Threat Reports

**Analyst question:** Are multiple reports describing related activity, or do they only share common tradecraft?

**Primary users:** CTI analyst, campaign tracker, IR lead, or research analyst.

## Scenario

Several reports mention similar malware, infrastructure, or behaviors. The analyst needs to determine whether they should be grouped together as a campaign or handled separately.

## Inputs

- Two or more analyzed reports
- Reviewed TTP mappings
- Report-derived IOCs
- Actor or malware names if available

## Prerequisites

- Previous analyses are stored
- Report metadata is clear
- Each report has reviewed mappings
- The analyst can distinguish generic overlap from campaign-specific evidence

## Detailed Workflow

1. Analyze each report separately and store results.
2. Open stored report comparison.
3. Compare shared TTPs, unique TTPs, tactics, IOCs, and actor references.
4. Review whether overlap occurs at early, middle, or late intrusion phases.
5. Check if shared observables are current, reused, or generic.
6. Write a conclusion: related, possibly related, or unrelated/common tradecraft.
7. Export the comparison for case notes or briefing.

## Analyst Decisions

- Are shared techniques distinctive enough?
- Do reports share infrastructure, malware, target sector, or timing?
- Are differences caused by incomplete reporting or truly different behavior?
- Should reports be merged into one campaign workspace?

## Expected Outputs

- Report overlap summary
- Shared/unique TTP lists
- IOC comparison
- Campaign relationship assessment

## Common Pitfalls

- Merging unrelated reports based on common techniques
- Ignoring reporting bias
- Comparing raw unreviewed mappings
- Overlooking time-window differences


## Handoff Guidance

Use the comparison to decide campaign grouping, detection reuse, and whether one report should update findings from another.

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

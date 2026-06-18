---
id: overview
title: Group & Campaign Similarity
sidebar_position: 1
---

# Group & Campaign Similarity Deep-Dive

AdversaryGraph compares a selected technique set with known ATT&CK group and campaign profiles. The result is an analytical lead for prioritization, gap analysis, hypothesis generation, and hunting.

:::warning Attribution limitation
A high TTP overlap score does not prove attribution. It indicates that the observed behavior shares ATT&CK techniques with a known group or campaign profile and should be treated as an investigation lead.
:::

## Three Compare Modes

| Mode | What you compare | Against |
|---|---|---|
| **Groups (DB 1)** | Selected Navigator TTPs | Currently ingested ATT&CK groups |
| **Campaigns (DB 1)** | Selected Navigator TTPs | Currently ingested named ATT&CK campaigns |
| **Reports (DB 2)** | A stored report's extracted TTPs | Currently ingested ATT&CK groups |

## Jaccard Similarity

```text
similarity = |shared techniques| / |union of all techniques|
```

Jaccard similarity measures technique-set overlap. A high score can result from a small profile, common tradecraft, incomplete reporting, or genuinely similar behavior. Interpret it with infrastructure, malware, victimology, timing, procedure detail, and external intelligence.

## Analyst Workflow

1. Validate report evidence and ATT&CK mappings.
2. Inject validated techniques into Navigator.
3. Compare against groups and campaigns.
4. Review shared techniques and profile gaps.
5. Build hunting and detection-backlog hypotheses.
6. Record corroborating and contradictory evidence.

TTP overlap is not attribution evidence by itself. Attribution requires additional evidence and explicit confidence reasoning.

- [Compare Groups →](/compare/groups)
- [Compare Campaigns →](/compare/campaigns)
- [Compare Stored Reports →](/compare/reports)

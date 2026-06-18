---
id: group-vs-group
title: Group vs Group
sidebar_position: 5
---

# Group vs Group

The **Group vs Group** page lets you compare up to 6 APT groups simultaneously, rather than comparing your own TTP layer against one group at a time. Use it when you want to understand how threat actors relate to each other — shared tradecraft, unique techniques, tactical overlap.

Navigate there from the sidebar: **◉ Group vs Group**.

---

## Selecting Groups

The left panel shows the full APT group list. Use the search box to filter by name or ATT&CK ID, then click any group to add it. Each selected group gets a distinct colour (up to 6). Remove a group by clicking the **⊕** overlay button on its chip or the **✕** next to its chip at the top.

---

## Three Analysis Tabs

### Overlap Matrix

An N×N Jaccard similarity table — every group pair gets a similarity percentage. Colour-coded cells make high-overlap pairs immediately visible:

- **Red** (≥ 50%) — significant shared tradecraft, possibly the same cluster or attribution overlap
- **Amber** (25–49%) — moderate overlap
- **Blue** (< 25%) — limited shared technique use

Below the matrix, **Pairwise Shared Techniques** cards list the actual technique IDs shared between each pair. Click any technique ID to open the [TTP detail panel](#ttp-detail-panel).

**Also shown:** union size, intersection (techniques all selected groups share), and per-group coverage statistics.

### ATT&CK View

A compact version of the full ATT&CK matrix filtered to only the techniques used by at least one selected group. Each cell shows a coloured dot for every group that uses that technique — stacked dots mean multiple groups converge on the same behaviour.

Use this to answer: *"Where in the kill chain do these groups overlap, and which techniques are truly unique to one actor?"*

### Technique Table

A sortable, filterable table of all techniques used across the selected groups:

| Column | Description |
|---|---|
| ID | Technique ID — click to open detail panel |
| Name | Technique name |
| Tactic | Primary kill-chain phase |
| Group columns | ✓ for each group that uses this technique |
| Count | How many of the selected groups use this technique |

**Filters:** All / Shared 2+ (techniques used by at least two groups) / Exclusive (techniques unique to one group)

**Sort:** Click any column header to sort ascending/descending — sort by a specific group column to see its unique techniques first.

---

## TTP Detail Panel

Click any technique ID anywhere on the page to open the detail panel. It slides in from the right and shows:

- Full technique description and detection guidance
- Tactic and platform tags
- **Anomaly Detection Atlas** — direct links to relevant analysis pages
- **ITDR Handbook** — auto-linked for identity techniques (T1078, T1098, T1110, T1111, etc.)
- **CTI Analyst Field Manual** and **AdversaryGraph Web Tool** links

Close with **Esc** or click the backdrop.

---

## Typical Workflows

**Cluster analysis:** Select 4–5 groups from the same region or sector. High Jaccard scores between them may indicate shared tooling, the same threat cluster under different names, or common TTPs characteristic of that actor category.

**Attribution disambiguation:** You have a partial TTP set and two plausible attribution candidates. Add both to Group vs Group and inspect the Shared / Exclusive columns in the Technique Table. If one group's exclusive techniques appear in your incident data, that strengthens that attribution hypothesis.

**Detection prioritisation:** The intersection of N groups (techniques all selected groups share) represents the highest-value detection targets — if you can detect those techniques reliably, you cover the most ground across the actor landscape you're tracking.

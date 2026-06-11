---
id: ttp-details
title: TTP Detail Panel
sidebar_position: 4
---

# TTP Detail Panel

Every technique ID displayed anywhere in ThreatMapper is clickable. Clicking one opens a **slide-in detail panel** on the right side of the screen with intelligence and links for that specific technique.

---

## What the Panel Shows

### Technique metadata
Name, ATT&CK ID, tactics (as colour pills), and platforms the technique applies to.

### Description
The full MITRE ATT&CK description for the technique, plus a direct link to the ATT&CK website entry.

### Detection
MITRE's detection guidance for the technique.

### Data Sources
The log sources and telemetry types recommended for detecting this technique.

### Anomaly Detection Atlas
If the technique is covered in the [Anomaly Detection Atlas](https://1200km.com/anomaly-detection-atlas/), direct links to the relevant pages appear here. Each link points to the exact section that discusses this technique, with the section heading shown for context.

The Atlas covers statistical and ML-based detection approaches for ATT&CK techniques — useful when you want to go beyond signature-based detection into behavioural baselines.

### Ecosystem Resources

Links relevant to the technique from the broader 1200km.com ecosystem:

| Link | When shown |
|---|---|
| **Anomaly Detection Atlas** | Techniques with indexed coverage |
| **ITDR Handbook** | Identity techniques (T1078, T1098, T1110, T1111, T1136, T1531, T1539, T1550, T1552, T1555, T1556, T1558, T1606, T1621) |
| **CTI Analyst Field Manual** | Always |
| **ThreatMapper Web Tool** | Always |

### Add to TTPs / In my TTPs

A button in the panel header lets you toggle the technique in and out of your active Navigator layer without navigating away from what you're reading.

---

## Where You Can Click

Technique IDs are clickable in every view:

| View | Location |
|---|---|
| **Navigator** | The technique ID (`T1xxx`) shown in each matrix cell |
| **APT Library** | Every ID in a group's technique list |
| **Compare — Groups** | Shared techniques (amber), your-only techniques (red), gap techniques (blue) |
| **Compare — Campaigns** | Shared technique badges |
| **Compare — Reports** | Shared technique badges |
| **Group vs Group — Overlap** | Shared technique badges in pairwise cards |
| **Group vs Group — Table** | ID column in the technique table |

---

## Closing the Panel

- Press **Escape**
- Click anywhere on the dimmed backdrop
- Click **✕** in the panel header

---

## AI Assistant

Below the technique details, the panel includes the **LLM Chat** assistant. Use it to ask focused questions about this specific technique:

- *"Write a SIGMA rule for this technique targeting Windows Event Log"*
- *"What are the most common ways to detect this in a cloud environment?"*
- *"Is this technique used in supply-chain attacks?"*

The assistant is pre-seeded with the technique ID, name, tactics, and platforms — so you don't need to repeat them in your question.

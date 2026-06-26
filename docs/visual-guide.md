---
id: visual-guide
title: Visual Guide
sidebar_position: 4
---

# AdversaryGraph v4 Visual Guide

This guide shows the current AdversaryGraph platform, not only the older
article screenshots. The screenshots were captured from the local v4 UI and
validated for dimensions and nonblank content before publication.

For the complete module-by-module explanation, read the [Platform Guide](/platform-guide).
For the MalwareGraph-backed workflow, read [Malware Analysis](/malware-analysis).

## Platform Overview

![Discover dashboard](/img/adversarygraph-v4-platform/01-discover-dashboard.png)

The Discover dashboard is the front door to the workbench. It links the analyst
to CTI discovery, Navigator, actor intelligence, AI Analysis, IOC workflows,
malware analysis, investigations, operations, pipeline imports, and
troubleshooting.

## ATT&CK And Actor Intelligence

![ATT&CK Navigator matrix](/img/adversarygraph-v4-platform/02-navigator-matrix.png)

Navigator is the central ATT&CK/ATLAS matrix. Analysts select techniques, review
context, overlay actor behavior, manage layers, and export Navigator-compatible
JSON.

![ATT&CK Group Library](/img/adversarygraph-v4-platform/03-apt-library.png)

The ATT&CK Group Library provides actor profiles, aliases, campaigns, technique
sets, source-backed IOC counts, and actions for loading or overlaying actor TTPs.

![Group vs Group comparison](/img/adversarygraph-v4-platform/06-group-vs-group.png)

Group vs Group highlights shared and exclusive behavior across multiple actor
profiles.

## AI Analysis And Comparison

![AI Analysis](/img/adversarygraph-v4-platform/04-ai-analysis.png)

AI Analysis accepts pasted text and document uploads. It extracts mapping
candidates while keeping provider choice, source text, evidence, confidence, and
review state visible.

![Compare reports and layers](/img/adversarygraph-v4-platform/05-compare-behavior.png)

Compare ranks overlap between selected TTPs, reports, groups, and campaigns.
Use it for prioritization and hypothesis generation, not definitive attribution.

## Sector And Knowledge Workflows

![Sector Intelligence](/img/adversarygraph-v4-platform/07-sector-intel.png)

Sector Intelligence ranks actors by client sector, region, technology,
environment keywords, activity window, and available evidence.

![RetroHunt](/img/adversarygraph-v4-platform/08-retrohunt.png)

RetroHunt searches historical local intelligence for repeated indicators,
techniques, tool names, actor references, and evidence fragments.

![Knowledge Library](/img/adversarygraph-v4-platform/09-knowledge-library.png)

Knowledge Library stores reports, references, entities, and source material used
by investigations and exports.

![Sector packs](/img/adversarygraph-v4-platform/19-sector-packs.png)

Sector Packs package reusable sector context, actors, TTPs, and recommended
review paths.

## IOC Workflows

![IOC Library](/img/adversarygraph-v4-platform/10-ioc-library.png)

IOC Library is the searchable observable store. It shows source attribution,
freshness, enrichment, actor links, mapped TTPs, and export actions.

![IOC Investigation](/img/adversarygraph-v4-platform/11-ioc-investigation.png)

IOC Investigation performs one-observable pivoting for IPs, domains, URLs,
hashes, reputation, relationships, timelines, and provider evidence.

![VirusTotal Lookup](/img/adversarygraph-v4-platform/12-virustotal-lookup.png)

VirusTotal Lookup adds on-demand enrichment for hashes, IPs, domains, and URLs
when an operator configures a key.

![IOC node detail](/img/adversarygraph-v4-platform/20-ioc-node-detail.png)

IOC Node Detail treats an observable as a graph node with evidence, links, and
actions.

## Feeds, Operations, And Reporting

![Feeds Management](/img/adversarygraph-v4-platform/13-feeds-management.png)

Feeds Management controls ATT&CK/ATLAS, IOC, OpenCTI, STIX/TAXII, MISP, custom,
Sigma/YARA, and sandbox behavior sources.

![Investigation report](/img/adversarygraph-v4-platform/14-investigation-report.png)

Investigation Report prepares evidence-backed output for analyst handoff.

![Operations](/img/adversarygraph-v4-platform/15-operations.png)

Operations manages investigations, tracked actors, detection lifecycle records,
and operational task context.

![Pipeline imports](/img/adversarygraph-v4-platform/16-pipeline.png)

Pipeline imports external intelligence and detection content into local review
workflows.

![DFIR Examples](/img/adversarygraph-v4-platform/17-dfir-examples.png)

DFIR Examples provides public material for demos, training, and workflow
validation.

![Troubleshooting](/img/adversarygraph-v4-platform/18-troubleshooting.png)

Troubleshooting shows deployment health, self-test state, provider status, and
recovery guidance.

## Malware Analysis

![Malware Analysis dashboard](/img/malware-analysis-v4/01-malware-analysis-dashboard.png)

Malware Analysis starts from a case dashboard with upload controls, first static
triage, hash check, safety record, and entropy visualization.

![String Analyzer smart IOC and TTP leads](/img/malware-analysis-v4/06-string-analyzer-smart-iocs.png)

String Analyzer classifies strings into IOC, API, registry, command, and TTP
leads.

![Unpacker packed sample](/img/malware-analysis-v4/08-unpacker-packed-sample.png)

The unpacker shows packer detection, entropy, static unpack, AI unpack, and
dynamic-unpack policy gates.

![Debugger CPU view](/img/malware-analysis-v4/12-debugger-ollydbg-cpu-view.png)

The debug workspace provides CPU-style disassembly, registers, stack, API
context, memory context, and AI notes.

![Dynamic Analysis function workflow](/img/malware-analysis-v4/16-dynamic-function-workflow.png)

Dynamic-analysis workflow supports function stepping, branch context, and AI
feedback-loop summaries in an isolated runtime profile.

## Historical Visuals

The older v2.5 article screenshots remain available under
`/img/adversarygraph-v2/` and are still useful for historical context. The
current module documentation above should be used for v4 screenshots and
capability descriptions.

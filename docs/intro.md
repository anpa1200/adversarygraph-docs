---
id: intro
title: Introduction
sidebar_position: 1
---

# AdversaryGraph

**Current release: v4.0.0** · [Project Hub](https://1200km.com/adversarygraph/) · [Platform Guide](/platform-guide) · [Capabilities](/capabilities) · [Malware Analysis](/malware-analysis) · [Use Cases](/use-cases) · [GitHub](https://github.com/anpa1200/adversarygraph)

AdversaryGraph is an AI-assisted CTI-to-detection workbench for mapping threat reports, IOC context, malware-analysis evidence, and operational telemetry to MITRE ATT&CK / ATLAS. It helps analysts compare TTP overlap with known groups and campaigns, identify detection gaps, enrich observables, organize investigations, and export analyst-ready outputs.

Current release v4.0 adds the Malware Analysis workspace and refreshes the official documentation with validated screenshots for the full platform. The documented workflow now covers Discover, Navigator, AI Analysis, ATT&CK Group Library, Compare, Group vs Group, Sector Intel, RetroHunt, Knowledge Library, IOC Library, IOC Investigation, VirusTotal Lookup, Feeds Management, Investigation Report, Operations, Pipeline, DFIR Examples, Troubleshooting, Sector Packs, IOC node details, and Malware Analysis.

AdversaryGraph does not perform definitive attribution or final malware verdicts. TTP overlap, Jaccard similarity, IOC enrichment, generated detections, AI summaries, and malware-analysis output are analytical signals for hypothesis generation, prioritization, and further investigation.

![AdversaryGraph Discover dashboard](/img/adversarygraph-v4-platform/01-discover-dashboard.png)

## Start Here

1. [Open the Project Hub](https://1200km.com/adversarygraph/)
2. [Read the current platform guide](/platform-guide)
3. [Review all platform capabilities](/capabilities)
4. [Review the Malware Analysis workspace](/malware-analysis)
5. [Follow the full deployment flow](/full-flow)
6. [Read the AI Analysis workflow](/ai-analysis/overview)
7. [Review the visual guide](/visual-guide)
8. [Review Group & Campaign Similarity](/compare/overview)
9. [Export reports and detection backlog](/generating-reports)

## Full Self-Hosted Platform

Use Docker for private AI-assisted report analysis, provider-configured LLM extraction, stored reports, campaign comparison, IOC enrichment, feed management, malware-analysis workflows, API access, PDF exports, and scheduled ATT&CK/ATLAS synchronization.

AdversaryGraph is self-hosted. In Docker mode, report content is sent only to the LLM provider configured by the operator. For fully private analysis, use a local or private LLM gateway.

## ATT&CK Data Provenance

AdversaryGraph uses official MITRE ATT&CK STIX bundles. The active domain, version, and generated/synchronized timestamp are shown in the relevant UI. Counts depend on the selected domain and release.

## Validation and Limitations

LLM-generated mappings may contain false positives, false negatives, or ambiguous technique assignments. Analysts must validate mappings against source evidence, procedure descriptions, telemetry requirements, and ATT&CK definitions. See [Evaluation and Analyst Validation](/evaluation).

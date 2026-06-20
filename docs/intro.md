---
id: intro
title: Introduction
sidebar_position: 1
---

# AdversaryGraph

**Current release: v3.0.0** · [Project Hub](https://1200km.com/adversarygraph/) · [Capabilities](/capabilities) · [Use Cases](/use-cases) · [From Log To Report](https://1200km.com/articles/adversarygraph-from-log-to-report-ioc-investigation.html) · [GitHub](https://github.com/anpa1200/adversarygraph)

AdversaryGraph is an AI-assisted CTI-to-detection workbench for mapping threat reports and IOC context to MITRE ATT&CK, comparing TTP overlap with known groups and campaigns, identifying detection gaps, and exporting analyst-ready outputs.

Current release v3.0 adds the IOC Investigation workbench, Tier 1 / Tier 2 / Tier 3 relationship pivots, graph node drill-down, evidence ranking, source-conflict review, saved investigations, AI log and PCAP-style analysis, and a practical log-to-report workflow. Earlier v2.5 capabilities remain available: IOC Library, searchable multi-select actor filtering, VirusTotal enrichment, STIX/TAXII import/export, MISP JSON import, custom IOC feeds, Sigma/YARA rule-feed sync, sandbox behavior enrichment, selftest and troubleshooting support, and source-prioritized IOC-to-TTP mapping.

AdversaryGraph does not perform definitive attribution. TTP overlap and Jaccard similarity are analytical signals for hypothesis generation, prioritization, and further investigation.

## Start Here

1. [Open the Project Hub](https://1200km.com/adversarygraph/)
2. [Follow the full deployment flow](/full-flow)
3. [Review all platform capabilities](/capabilities)
4. [Read the AI Analysis workflow](/ai-analysis/overview)
5. [Review the visual guide](/visual-guide)
6. [Read the v3 log-to-report workflow](https://1200km.com/articles/adversarygraph-from-log-to-report-ioc-investigation.html)
7. [Read the v2.5 capability map](https://1200km.com/articles/adversarygraph-v2-self-hosted-ai-cti-platform.html)
8. [Review Group & Campaign Similarity](/compare/overview)
9. [Export reports and detection backlog](/generating-reports)

## Full Self-Hosted Platform

Use Docker for private AI-assisted report analysis, provider-configured LLM extraction, stored reports, campaign comparison, IOC enrichment, feed management, API access, PDF exports, and scheduled ATT&CK/ATLAS synchronization.

AdversaryGraph is self-hosted. In Docker mode, report content is sent only to the LLM provider configured by the operator. For fully private analysis, use a local or private LLM gateway.

## ATT&CK Data Provenance

AdversaryGraph uses official MITRE ATT&CK STIX bundles. The active domain, version, and generated/synchronized timestamp are shown in the relevant UI. Counts depend on the selected domain and release.

## Validation and Limitations

LLM-generated mappings may contain false positives, false negatives, or ambiguous technique assignments. Analysts must validate mappings against source evidence, procedure descriptions, telemetry requirements, and ATT&CK definitions. See [Evaluation and Analyst Validation](/evaluation).

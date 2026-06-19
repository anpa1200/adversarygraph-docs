---
id: intro
title: Introduction
sidebar_position: 1
---

# AdversaryGraph

**Current release: v2.5.4** · [Project Hub](https://1200km.com/adversarygraph/) · [1200km Article](https://1200km.com/articles/adversarygraph-v2-self-hosted-ai-cti-platform.html) · [GitHub](https://github.com/anpa1200/adversarygraph)

AdversaryGraph is an AI-assisted CTI-to-detection workbench for mapping threat reports and IOC context to MITRE ATT&CK, comparing TTP overlap with known groups and campaigns, identifying detection gaps, and exporting analyst-ready outputs.

Current release v2.5.x adds the IOC Library, searchable multi-select actor filtering, VirusTotal IOC enrichment, STIX/TAXII import/export, MISP JSON import, custom IOC feeds, Sigma/YARA rule-feed sync, sandbox behavior enrichment, selftest and troubleshooting support, and stronger IOC-to-TTP evidence priority.

AdversaryGraph does not perform definitive attribution. TTP overlap and Jaccard similarity are analytical signals for hypothesis generation, prioritization, and further investigation.

## Start Here

1. [Open the Project Hub](https://1200km.com/adversarygraph/)
2. [Follow the full deployment flow](/full-flow)
3. [Review all platform capabilities](/capabilities)
4. [Read the AI Analysis workflow](/ai-analysis/overview)
5. [Review the visual guide](/visual-guide)
6. [Read the 1200km article](https://1200km.com/articles/adversarygraph-v2-self-hosted-ai-cti-platform.html)
7. [Review Group & Campaign Similarity](/compare/overview)
8. [Export reports and detection backlog](/generating-reports)

## Full Self-Hosted Platform

Use Docker for private AI-assisted report analysis, provider-configured LLM extraction, stored reports, campaign comparison, IOC enrichment, feed management, API access, PDF exports, and scheduled ATT&CK/ATLAS synchronization.

AdversaryGraph is self-hosted. In Docker mode, report content is sent only to the LLM provider configured by the operator. For fully private analysis, use a local or private LLM gateway.

## ATT&CK Data Provenance

AdversaryGraph uses official MITRE ATT&CK STIX bundles. The active domain, version, and generated/synchronized timestamp are shown in the relevant UI. Counts depend on the selected domain and release.

## Validation and Limitations

LLM-generated mappings may contain false positives, false negatives, or ambiguous technique assignments. Analysts must validate mappings against source evidence, procedure descriptions, telemetry requirements, and ATT&CK definitions. See [Evaluation and Analyst Validation](/evaluation).

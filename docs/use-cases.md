---
id: use-cases
title: Use Cases
sidebar_position: 4
---

# AdversaryGraph Use Cases

This page organizes AdversaryGraph workflows into three levels:

- **10 simple use cases**: one or two steps for fast analyst actions.
- **10 intermediate use cases**: three to five steps for structured CTI, SOC, and detection tasks.
- **10 complex platform workflows**: full workflows using multiple modules. Five are investigation workflows and five are defense / MITRE coverage workflows.

## Simple Use Cases

1. [Check One IOC](/use-cases/simple-check-an-ioc) - Check whether one IP, domain, URL, or hash has useful enrichment context.
2. [Open One Actor Profile](/use-cases/simple-open-actor-profile) - Review the core context for one ATT&CK group or actor.
3. [Show Actor TTPs On The Matrix](/use-cases/simple-show-actor-on-matrix) - Visualize one actor's known ATT&CK behavior.
4. [Search The IOC Library](/use-cases/simple-search-ioc-library) - Find whether an observable already exists in local or synced intelligence.
5. [Sync ThreatFox IOCs](/use-cases/simple-sync-threatfox) - Refresh open-source IOC data for actor and malware context.
6. [Import A Navigator Layer](/use-cases/simple-import-navigator-layer) - Load an existing ATT&CK layer for review or comparison.
7. [Export A PDF Report](/use-cases/simple-export-pdf-report) - Create a shareable analyst report from reviewed findings.
8. [Run Deployment Selftest](/use-cases/simple-run-selftest) - Check whether the deployment is healthy before analysis.
9. [Add A Custom IOC Feed](/use-cases/simple-add-custom-ioc-feed) - Connect a private or custom IOC feed.
10. [Open Troubleshooting For An Error](/use-cases/simple-open-troubleshooting) - Move from a popup error to practical remediation.

## Intermediate Use Cases

11. [Map A Report To ATT&CK](/use-cases/intermediate-map-report-to-attack) - Turn one report into reviewed ATT&CK techniques.
12. [Compare Incident TTPs To Actors](/use-cases/intermediate-compare-incident-to-actors) - Use TTP overlap to generate actor hypotheses.
13. [Build A Sector Threat Brief](/use-cases/intermediate-build-sector-brief) - Create a practical threat brief for one sector/customer.
14. [Enrich Actor IOCs](/use-cases/intermediate-enrich-actor-iocs) - Add current observable context to one actor profile.
15. [Import MISP JSON](/use-cases/intermediate-import-misp-json) - Bring MISP event or attribute exports into IOC Library.
16. [Pull TAXII Or Import STIX](/use-cases/intermediate-pull-taxii-stix) - Exchange structured intelligence with CTI platforms.
17. [Sync YARA And Sigma Feeds](/use-cases/intermediate-sync-yara-sigma) - Connect detection-rule context to IOCs and malware.
18. [Compare Two Reports](/use-cases/intermediate-compare-two-reports) - Assess whether two reports describe related activity.
19. [Review One Coverage Gap](/use-cases/intermediate-review-coverage-gap) - Compare a threat layer to existing coverage.
20. [Use A Local LLM For Private Reports](/use-cases/intermediate-use-local-llm) - Analyze sensitive content without public LLM routing.

## Complex Investigation Workflows

21. [Investigation: Ransomware Intrusion Triage](/use-cases/investigation-ransomware-intrusion) - Investigate a ransomware report from intake to actor hypothesis and detection handoff.
22. [Investigation: Cloud And Kubernetes Incident](/use-cases/investigation-cloud-incident) - Investigate a cloud/Kubernetes incident using sector, TTP, IOC, and detection context.
23. [Investigation: Cluster Multiple APT Reports](/use-cases/investigation-apt-campaign-cluster) - Assess whether several reports belong to one campaign cluster.
24. [Investigation: Malware Family Behavior Mapping](/use-cases/investigation-malware-family) - Build an ATT&CK and IOC profile for a malware family.
25. [Investigation: Validate A Third-Party CTI Report](/use-cases/investigation-third-party-report-validation) - Validate a vendor or public CTI report before using it operationally.

## Complex Defense And MITRE Coverage Workflows

26. [Defense: Build MITRE Coverage Baseline](/use-cases/defense-mitre-coverage-baseline) - Create a baseline of current coverage across MITRE ATT&CK.
27. [Defense: Create Sector-Based Detection Roadmap](/use-cases/defense-sector-detection-roadmap) - Create a detection roadmap for a sector/customer environment.
28. [Defense: Build IOC Enrichment Pipeline](/use-cases/defense-ioc-enrichment-pipeline) - Create a repeatable SOC enrichment pipeline for incoming IOCs.
29. [Defense: Create Detection Content From CTI](/use-cases/defense-detection-content-from-intel) - Turn CTI findings into detection content candidates.
30. [Defense: Executive Risk And Coverage Report](/use-cases/defense-executive-risk-coverage-report) - Produce an executive report showing threat relevance and coverage posture.


## Selection Guide

- Start with **simple** workflows when you need a fast lookup, sync, export, or troubleshooting action.
- Use **intermediate** workflows when you need analyst review, comparison, enrichment, or structured handoff.
- Use **complex** workflows when you need an end-to-end investigation, a sector roadmap, a MITRE coverage baseline, or a full CTI-to-detection package.

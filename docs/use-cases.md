---
id: use-cases
title: Use Cases
sidebar_position: 4
---

# AdversaryGraph Use Cases

AdversaryGraph is built for CTI, detection engineering, SOC, incident response, and security research workflows where raw reports, actor profiles, observables, and ATT&CK knowledge need to become structured analyst output.

The examples below show the main ways to use the platform. They are written as practical analyst workflows rather than feature descriptions.

## 1. Map A New Threat Report To MITRE ATT&CK

**Question:** Which techniques are described in this report, and what evidence supports each mapping?

**Flow:** Upload a PDF, DOCX, TXT, or paste report text into AI Analysis, choose an LLM provider, review extracted techniques, adjust review status, then inject accepted TTPs into Navigator.

**Output:** ATT&CK technique list, evidence snippets, confidence values, review status, Navigator layer, JSON, and PDF report.

## 2. Build A Client-Facing CTI Briefing

**Question:** What are the key behaviors, likely operational themes, and detection priorities for a customer report?

**Flow:** Analyze the report, validate extracted TTPs, compare against known actors, add relevant IOCs, and export a PDF with evidence-backed findings.

**Output:** Briefing-ready report with ATT&CK coverage, actor similarity, IOC context, and detection handoff notes.

## 3. Compare An Incident To Known APT Groups

**Question:** Which known groups have the strongest TTP overlap with this incident?

**Flow:** Extract TTPs from the incident report, run group comparison, inspect Jaccard similarity, open matching actor pages, and review shared techniques.

**Output:** Ranked actor candidates for hypothesis generation, not definitive attribution.

## 4. Compare Two Or More Threat Reports

**Question:** Are these incidents operationally related, or do they only share common techniques?

**Flow:** Analyze each report, store the results, open report comparison, and compare overlapping TTPs, tactics, IOCs, and actor links.

**Output:** Shared behavior profile, differences, and evidence-backed comparison table.

## 5. Turn CTI Into A Detection Backlog

**Question:** Which ATT&CK techniques should detection engineering prioritize?

**Flow:** Accept validated TTPs, review tactic coverage, inspect detection guidance, export structured results, and convert gaps into backlog tickets.

**Output:** Prioritized TTP list, tactic coverage, detection notes, and exportable evidence.

## 6. Create ATT&CK Navigator Layers

**Question:** How can I visualize selected techniques for a report, actor, campaign, or customer?

**Flow:** Select TTPs manually, import a layer, inject AI-extracted techniques, or load actor TTPs, then export the Navigator-compatible layer.

**Output:** ATT&CK Navigator JSON layer and interactive matrix view.

## 7. Review Detection Coverage Gaps

**Question:** Which tactics or techniques are under-covered by my current mapping?

**Flow:** Load selected TTPs into Navigator, inspect tactic distribution, compare against actor or campaign profiles, and review missing areas.

**Output:** Coverage gap view and candidate detection priorities.

## 8. Track Actor Relevance By Sector

**Question:** Which adversaries are most relevant to telecom, finance, cloud, Kubernetes, Microsoft 365, or another customer environment?

**Flow:** Use Sector Intel filters, choose sectors, regions, technologies, and activity window, then inspect ranked actors and related TTPs.

**Output:** Relevant actor list, score explanation, selected TTPs, and matrix overlay.

## 9. Build A Sector-Specific Threat Model

**Question:** Which actors, TTPs, and campaigns matter most for this customer sector?

**Flow:** Filter by sector and technology, review actors, open actor profiles, show relevant TTPs on the matrix, and export findings.

**Output:** Sector threat model with actor context and ATT&CK behavior map.

## 10. Enrich Actor Profiles With Current IOCs

**Question:** What observables are currently connected to this actor or malware family?

**Flow:** Open an actor page, use the IOCs tab, sync ThreatFox or custom feeds, enrich actor context, and export CSV.

**Output:** Actor-linked IOC set with type, source, last seen, malware family, and optional TTP mapping.

## 11. Maintain A Central IOC Library

**Question:** How can I search and organize all collected IOCs in one place?

**Flow:** Open IOC Library, search by indicator, description, malware, campaign, actor, type, or source; sort by last seen; filter by multiple actors.

**Output:** Searchable observable library with enrichment actions and export paths.

## 12. Enrich An IOC With VirusTotal

**Question:** What does VirusTotal know about this IP, domain, URL, or hash?

**Flow:** Open VirusTotal Lookup or the IOC Library enrichment action, query the indicator, review reputation, detections, tags, crowdsourced rules, related objects, and possible actor/TTP links.

**Output:** Structured enrichment panel with links back to actor pages, TTPs, Navigator, and My TTPs.

## 13. Pull Intelligence From OTX, Malpedia, And ThreatFox

**Question:** Can I enrich actors and IOCs with external open intelligence?

**Flow:** Configure API keys, use Reference Sync or actor enrichment, pull source-backed data, and map malware families or actor aliases where possible.

**Output:** Enriched actor/IOC evidence with source labels and timestamps.

## 14. Import Custom Private Feeds

**Question:** How do I add my own internal IOCs or customer intelligence?

**Flow:** Add a custom JSON, CSV, or TXT feed in IOC Library or Reference Sync, label the source, sync it, and keep it separate from public reference data.

**Output:** Private/custom IOC records in the external persistent database.

## 15. Import And Export STIX/TAXII Intelligence

**Question:** How do I exchange structured intelligence with other CTI tools?

**Flow:** Export IOC data as STIX, import STIX files, or pull TAXII collection objects where supported.

**Output:** STIX indicators and observed-data records connected to the IOC Library.

## 16. Connect MISP JSON Exports

**Question:** How do I bring MISP event or attribute exports into the workflow?

**Flow:** Provide a MISP JSON export URL or local gateway URL, sync it as a source, then filter imported observables in IOC Library.

**Output:** MISP-backed IOC records that can be searched, enriched, and exported.

## 17. Sync Sigma And YARA Rule Feeds

**Question:** Which public or private rules mention the same malware, behavior, or indicators?

**Flow:** Add Sigma/YARA feed sources, sync detection feeds, and review matched rule context in enrichment results.

**Output:** Detection-rule context for IOCs, malware families, and techniques.

## 18. Enrich Malware Behavior From Sandbox Feeds

**Question:** What runtime behavior is associated with this malware sample or family?

**Flow:** Sync sandbox behavior sources, connect behavior artifacts to indicators or malware families, and inspect mapped TTPs.

**Output:** Behavior evidence that supports IOC-to-TTP and malware-to-TTP mapping.

## 19. Extract IOCs From Uploaded Reports

**Question:** Which IPs, domains, URLs, hashes, and file names appear in this report?

**Flow:** Upload a report, run analysis, extract observables, map them to actors or malware where evidence exists, and store them in the IOC Library.

**Output:** Report-derived IOCs with source report context and optional actor/TTP links.

## 20. Analyze DFIR Report Examples

**Question:** How do known DFIR writeups map to ATT&CK and actor behavior?

**Flow:** Open DFIR Examples, select a downloaded report metadata entry, review linked TTPs and actors, then use the source report for AI analysis if needed.

**Output:** Practice dataset for validating extraction, comparison, and detection workflows.

## 21. Compare Two APT Groups

**Question:** Which techniques are shared or different between APT28 and APT29, or any other groups?

**Flow:** Open Group vs Group, select multiple actors, inspect shared/different techniques, and review the combined matrix overlay.

**Output:** Actor-to-actor behavior comparison with overlap matrix and technique table.

## 22. Track ATT&CK Changes Over Time

**Question:** Did MITRE change this actor, campaign, or technique profile?

**Flow:** Use Track Changes on actor profiles, sync reference data, and compare current ATT&CK data with stored references.

**Output:** Analyst-visible change tracking for actor and technique updates.

## 23. Use Local Or Private LLMs

**Question:** Can I analyze sensitive reports without sending them to a public LLM API?

**Flow:** Configure the local LLM provider/gateway in the Docker deployment, choose it in AI Analysis, and keep report processing inside your controlled environment.

**Output:** Private AI-assisted extraction with operator-controlled model routing.

## 24. Build A Repeatable CTI Pipeline

**Question:** How do I move from intake to validated intelligence to detection handoff?

**Flow:** Use Operations and Pipeline to track report intake, analysis status, reviewed TTPs, actor hypotheses, IOC enrichment, and detection candidates.

**Output:** Repeatable CTI-to-detection workflow with analyst review states and auditable outputs.

## 25. Validate Tool Health Before Analysis

**Question:** Is the deployment ready, or is a data/API/key problem blocking analysis?

**Flow:** Run the built-in selftest, review popup errors, use Recheck after fixing configuration, and open troubleshooting pages for known failure modes.

**Output:** Clear readiness status for API, database, ATT&CK/ATLAS data, and optional enrichment keys.

## 26. Prepare Executive Or Maintainer Evidence

**Question:** How can I show that the tool is maintainable and ready for review?

**Flow:** Use release notes, selftest output, screenshots, sample datasets, API docs, PDF exports, and validation pages to show installation, functionality, and limitations.

**Output:** Evidence package for GitHub release notes, external validation, publication, or stakeholder review.

## Capability Map

| Capability | Use Cases |
| --- | --- |
| AI report extraction | 1, 2, 3, 4, 19, 20, 23, 24 |
| ATT&CK Navigator and layers | 1, 5, 6, 7, 8, 9, 21 |
| Actor and campaign comparison | 3, 4, 8, 9, 21, 22 |
| Sector intelligence | 8, 9 |
| IOC Library | 10, 11, 12, 14, 15, 16, 19 |
| External enrichment | 12, 13, 17, 18 |
| STIX/TAXII/MISP workflows | 15, 16 |
| Detection engineering handoff | 5, 7, 17, 18, 24 |
| Operations and pipeline | 2, 19, 24, 26 |
| Deployment reliability | 23, 25, 26 |

## Recommended Starting Paths

**For CTI analysts:** start with use cases 1, 3, 8, 10, and 21.

**For detection engineers:** start with use cases 5, 6, 7, 17, and 18.

**For SOC and IR teams:** start with use cases 2, 4, 11, 12, 19, and 24.

**For platform reviewers:** start with use cases 15, 16, 23, 25, and 26.

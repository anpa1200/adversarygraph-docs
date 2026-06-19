---
id: capabilities
title: Platform Capabilities
sidebar_position: 3
---

# Platform Capabilities

AdversaryGraph is a self-hosted CTI-to-detection platform. It connects reports, IOCs, malware behavior, threat actors, campaigns, sectors, ATT&CK/ATLAS techniques, detection rules, and analyst exports into one local workflow.

The platform is designed for private analyst workstations, internal CTI teams, detection engineering teams, and controlled self-hosted deployments.

## Capability Summary

| Area | What It Provides |
|---|---|
| AI report analysis | Extract ATT&CK/ATLAS mapping candidates from reports with evidence and review status |
| ATT&CK/ATLAS Navigator | Explore matrices, build My TTPs, overlay actors/campaigns, import/export layers |
| Actor intelligence | Browse ATT&CK groups, aliases, descriptions, techniques, campaigns, reports, IOCs, platforms, and tactic coverage |
| Sector intelligence | Rank actors by sector, region, technology/environment, and activity window |
| IOC Library | Search, filter, sort, enrich, export, and map indicators to actors and TTPs |
| Enrichment | VirusTotal, ThreatFox, OTX, Malpedia, MISP Galaxy, custom feeds, sandbox behavior, Sigma/YARA context |
| Feed management | Central reference, IOC, rule, behavior, STIX/TAXII, MISP, and custom feed sync |
| IOC-to-TTP mapping | Prioritized evidence model: strict source first, enrichment metadata second, optional AI last |
| Comparison | Compare selected TTPs to groups, campaigns, and stored reports |
| DFIR examples | Indexed public DFIR examples for training and controlled analysis workflows |
| Operations | Stored reports, investigations, pipeline workflows, selftest, troubleshooting, API access, exports |
| Outputs | PDF, JSON, CSV, STIX 2.1, ATT&CK Navigator layers, detection backlog material |

## AI Report Analysis

AdversaryGraph analyzes reports from:

- pasted text
- PDF
- DOCX
- TXT

Supported model paths:

- Claude through Anthropic
- OpenAI
- Gemini
- MiniMax
- local/private OpenAI-compatible LLM gateways

The output is not treated as final truth. Each mapping should be reviewed by an analyst.

Analysis results include:

- extracted ATT&CK/ATLAS technique IDs
- mapped tactic context
- evidence excerpts
- confidence
- review status
- source report context
- exportable JSON/PDF output
- actions to add accepted TTPs to Navigator

Review statuses:

- suggested
- accepted
- rejected
- needs-evidence

## ATT&CK And ATLAS Navigator

Navigator supports:

- Enterprise ATT&CK
- Mobile ATT&CK
- ICS ATT&CK
- MITRE ATLAS

Core actions:

- search techniques by ID/name
- select and deselect My TTPs
- import ATT&CK Navigator layers
- export Navigator JSON
- load saved layers
- show actor or campaign TTPs on the matrix
- overlay selected TTPs
- review tactic coverage
- inspect technique detail context

The matrix is used as a working surface for investigation and detection coverage, not only as a visual reference.

## ATT&CK Group Library

Actor pages include:

- ATT&CK group ID
- actor aliases
- actor description
- known techniques
- named campaigns
- CTI/IR report links
- current IOC counts
- tactic coverage
- observed platforms
- technique usage evidence
- ATT&CK source references
- actor IOC tab
- actions to load, merge, copy, track, and overlay actor TTPs

Actor data comes from ATT&CK references, synced public metadata, MISP Galaxy, Malpedia, enrichment feeds, and imported local reports.

## Sector Intelligence

Sector Intelligence helps answer which actors matter for a specific customer or environment.

Filters:

- sector
- region/geography
- technology/environment
- activity window
- multiple selections per parameter
- free search

Ranking considers:

- direct sector evidence
- region evidence
- technology/environment TTP matches
- activity recency
- campaign relationships
- ATT&CK technique depth
- MISP Galaxy context
- local custom evidence

Actor cards include buttons for:

- actor information
- TTP information
- IOC view
- show relevant TTPs on the matrix

## IOC Library

The IOC Library is the central observable workspace.

Supported IOC types include:

- IPv4/IPv6
- domain
- URL
- MD5
- SHA1
- SHA256
- file/hash aliases normalized from provider-specific labels
- custom feed observables

Library functions:

- full-text search
- type filter
- source filter
- group/actor multi-select search
- sort by last seen
- sort by actor/group
- sort by type
- export CSV
- check IOC in VirusTotal
- open enrichment view
- sync source
- import custom feeds
- import STIX/TAXII
- import MISP JSON
- map IOC to actor
- map IOC to TTP

## VirusTotal Enrichment

VirusTotal lookup supports:

- IP
- domain
- URL
- MD5
- SHA1
- SHA256

The enrichment view can display:

- reputation verdict
- last analysis stats
- detection ratio
- malicious/suspicious/harmless counts
- tags
- categories
- related URLs/domains/files where available
- malware/family context when present
- possible ATT&CK tags
- possible actor or alias matches
- source links back to VirusTotal

Available actions:

- add discovered TTPs to My TTPs
- show discovered TTPs on the matrix
- open linked actor page when matched

## ThreatFox, OTX, Malpedia, And MISP Galaxy

ThreatFox:

- recent IOC synchronization
- optional sync on Docker startup
- malware family and confidence metadata
- actor mapping when the source contains actor or alias evidence

OTX:

- actor-attributed pulse enrichment
- pulse IOC import
- actor and malware context

Malpedia:

- malware-family metadata
- actor-family relationships
- family aliases and references

MISP Galaxy:

- threat actor metadata
- sector and region context
- motivation and category evidence
- alias enrichment

## Custom Feeds

Custom feeds can be connected from the UI/API.

Supported formats:

- JSON
- CSV
- TXT
- MISP JSON export
- STIX 2.1 bundle
- TAXII collection object URL
- Sigma feeds
- YARA feeds
- sandbox behavior feeds

Feed records are appended or updated in the local database. Existing indicators are merged by normalized value and type, preserving source metadata, first seen, last seen, actor links, confidence, and enrichment context.

## STIX, TAXII, MISP, And OpenCTI Workflows

Structured CTI workflows include:

- export STIX 2.1 bundles
- import STIX indicators and observed-data
- pull TAXII 2.1 collection objects
- import MISP JSON exports
- prepare OpenCTI-compatible CTI handoff material
- keep local source attribution on imported records

This allows AdversaryGraph to sit before or beside a CTI platform: analysts can review, enrich, and validate before promoting data elsewhere.

## YARA, Sigma, And Sandbox Behavior

Rule and behavior context helps connect observables to detection engineering.

YARA support:

- import YARA rule feeds
- attach malware/file context to IOC enrichment
- preserve source labels and rule references

Sigma support:

- import Sigma rule feeds
- link rule metadata to techniques where available
- support detection backlog and coverage workflows

Sandbox behavior support:

- ingest behavior summaries
- map observed malware behavior to ATT&CK candidates
- enrich file/hash IOCs with behavior context

## IOC-To-TTP Mapping

AdversaryGraph maps IOCs to TTPs using a strict priority model:

1. strict source/report evidence
2. enrichment-platform metadata
3. optional AI enrichment fallback

This prevents weak automatic claims from overriding stronger evidence.

Mapping stores:

- IOC
- technique ID
- evidence source
- priority type
- confidence
- actor/campaign context where available
- raw enrichment reference when available

AI fallback is optional and should be used when deterministic evidence is insufficient.

## Comparison And Similarity

Comparison modes:

- selected TTPs vs groups
- selected TTPs vs campaigns
- selected TTPs vs previous reports
- group vs group

Outputs include:

- overlap score
- shared techniques
- unique techniques
- missing coverage
- tactic distribution
- matrix diff
- PDF summary

Similarity is a hypothesis-generation signal, not attribution proof.

## DFIR Examples

DFIR Examples provides public report examples for training and validation workflows.

Use it to:

- browse public CTI/IR report examples
- inspect associated TTPs and actors
- download/source the original report where available
- run a local AI analysis on an authorized copy
- compare extracted results to expected report context

## Operations And Pipeline

Operational modules include:

- stored report sessions
- previous analysis history
- delete previous analysis when needed
- intelligence pipeline workflows
- report comparison
- tracked actor changes
- selftest status
- troubleshooting pages
- health checks
- scheduled sync jobs
- API automation

## Two-Database Architecture

AdversaryGraph uses persistent local storage for:

- synced public reference data
- private analyses
- custom reports
- custom IOCs
- custom feeds
- rule feeds
- enrichment state
- actor links
- report history

The database directory is external to the containers by default. Rebuilding containers should not delete local data.

## API And Automation

The FastAPI backend exposes API routes for:

- health
- selftest
- analysis
- sessions
- layers
- compare
- sync
- IOC library
- enrichment
- exports

Open API docs at:

```text
http://localhost:8000/docs
```

## Exports

Supported outputs:

- PDF analysis reports
- JSON analysis data
- ATT&CK Navigator JSON layers
- CSV IOC exports
- STIX 2.1 bundles
- detection backlog material

## Security And Privacy

AdversaryGraph is self-hosted, but security still depends on deployment choices.

Important controls:

- keep `.env` private
- use local/private LLM for sensitive reports
- protect API keys
- place internet-facing deployments behind TLS and authentication
- restrict network exposure
- back up PostgreSQL
- define data retention
- validate every AI-generated mapping

## What AdversaryGraph Does Not Do

AdversaryGraph does not:

- prove attribution
- replace analyst review
- guarantee AI mapping correctness
- act as a SIEM
- act as an EDR
- replace a CTI platform such as OpenCTI or MISP
- automatically make weak IOC-to-actor links without source evidence

It is a workbench for turning intelligence into structured, reviewable, detection-oriented output.

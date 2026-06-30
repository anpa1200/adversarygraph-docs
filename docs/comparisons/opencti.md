---
id: opencti
title: AdversaryGraph vs OpenCTI
---

# AdversaryGraph vs OpenCTI

OpenCTI is a full cyber threat intelligence platform built around a knowledge graph, entities, relationships, observables, indicators, reports, connectors, and operational CTI workflows. AdversaryGraph is a smaller self-hosted analyst workbench focused on CTI-to-detection conversion and evidence review.

Official reference: https://docs.opencti.io/

## Fit Comparison

| Need | OpenCTI | AdversaryGraph |
|---|---|---|
| CTI system of record | Strong fit | Not the primary goal |
| Knowledge graph and entity lifecycle | Strong fit | Focused local evidence graph and correlation views |
| Connector ecosystem | Strong fit | Selected feeds, enrichment, OpenCTI sync, STIX/TAXII/MISP imports |
| AI-assisted report-to-ATT&CK mapping | Depends on integrations | Core workflow |
| TTP overlap against ATT&CK groups/campaigns/reports | Possible with modeling | Core workflow |
| Detection backlog and telemetry readiness | Requires local process | Built into review workflow |
| Attack Simulation and SIEM validation | Not primary role | Core v5 workflow |

## Use Together

Recommended operating model:

1. Use OpenCTI as the CTI system of record.
2. Pull selected reports, indicators, labels, or observables into AdversaryGraph.
3. Run AI-assisted ATT&CK extraction, IOC/CVE enrichment, actor comparison, and detection-gap review.
4. Export reviewed results back to OpenCTI or to detection engineering workflows.

## Boundary

AdversaryGraph should not be described as an OpenCTI replacement. It is better described as an analysis and detection-handoff layer that can sit beside OpenCTI.

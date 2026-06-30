---
id: commercial-trust
title: Commercial Trust
sidebar_position: 2
---

# Commercial Trust

AdversaryGraph is being shaped as a commercial-grade, self-hosted CTI-to-detection workbench. This page gives reviewers, buyers, partners, and internal security teams a clear view of what is implemented, how it is validated, where the boundaries are, and how the platform fits beside existing CTI and detection tools.

## Trust Positioning

| Area | Current Position |
|---|---|
| Deployment model | Self-hosted Docker platform for local labs, private analyst workstations, and controlled internal deployments |
| Main value | Turn CTI, IOCs, CVEs, malware-analysis evidence, asset inventory, and validation telemetry into reviewed ATT&CK/ATLAS mappings and detection-engineering outputs |
| Data ownership | Operator-controlled database and local deployment; reports are sent only to the configured LLM provider |
| Access control | Native username/password auth, viewer/analyst/admin roles, bootstrap admin setup, optional trusted reverse-proxy identity |
| Evidence model | AI output is reviewable assistance; ATT&CK mapping, actor similarity, CVE relationships, and detection content require analyst validation |
| Security validation | CI includes tests, lint, SAST, dependency audit, Docker build check, container scan, and secret scan |
| Observability | Authenticated dashboard with API uptime, latency, status counters, recent traces, redacted log tail, and Prometheus-compatible metrics |

## Commercial-Readiness Evidence

- [Full platform capability map](/capabilities)
- [Architecture diagrams](/architecture)
- [Observability and security validation](/observability-security-validation)
- [Case studies and validation examples](/case-studies-validation)
- [Security and deployment guidance](/security)
- [Public roadmap](/roadmap)
- [Comparison pages](/comparisons/overview)

## What Is Implemented

AdversaryGraph currently includes:

- CTI report analysis from pasted text, PDF, DOCX, and TXT
- ATT&CK/ATLAS Navigator workflows
- ATT&CK Group Library and actor/campaign/report similarity
- IOC Library and IOC Investigation workflows
- CVE Library with NVD/CISA KEV ingest, CVSS/CWE/CPE fields, and strict evidence links
- Asset Attack Surface mapping from inventory files
- Malware Analysis backed by MalwareGraph for static triage, strings, unpacking, decompilation/debug review, and AI summaries
- Attack Simulation with lab telemetry, SIEM forwarding, source-shaped AI telemetry, and attack-chain graphs
- Authentication, admin panel, user roles, and observability
- API workflows, exports, and operational pipeline views

## What Is Not Claimed

AdversaryGraph does not claim to be:

- a managed SaaS
- a multi-tenant enterprise platform
- a full replacement for OpenCTI, MISP, ATT&CK Navigator, Atomic Red Team, or malware sandboxes
- an automated attribution engine
- a production EDR or SIEM
- a general exploit runner
- a tool that makes AI-generated mappings operationally true without analyst review

## Buyer / Reviewer Checklist

| Question | Where To Verify |
|---|---|
| Can I deploy it privately? | [Full deployment flow](/full-flow) |
| Are screenshots real and current? | [Case studies and validation examples](/case-studies-validation) |
| What is the security posture? | [Security and deployment](/security) |
| How does it monitor itself? | [Observability and security validation](/observability-security-validation) |
| What does it replace or complement? | [Comparison pages](/comparisons/overview) |
| What is planned next? | [Roadmap](/roadmap) |

## Commercial Next Steps

The strongest path from source-available platform to commercial product is:

1. Package a supported Docker profile with documented backup/restore and upgrade flow.
2. Add a signed Windows Lab Agent for real Windows Event Log, Sysmon, Defender, PowerShell, registry, process, and ETW telemetry.
3. Add organization/workspace boundaries before claiming enterprise multi-tenancy.
4. Add support contracts, release SLAs, vulnerability handling SLAs, and tested upgrade paths.
5. Publish repeatable demo datasets and detection-engineering validation exercises.

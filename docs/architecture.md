---
id: architecture
title: Architecture Diagrams
sidebar_position: 3
---

# Architecture Diagrams

AdversaryGraph is a self-hosted CTI-to-detection platform. The architecture is intentionally modular: the browser workspace stays separate from the API, database, background workers, MalwareGraph service, and attack-simulation lab fixtures.

## Platform Runtime

```text
Browser UI
  |
  | HTTPS / local reverse proxy
  v
React Frontend (nginx)
  |
  | /api/*
  v
FastAPI Backend
  |        |          |             |
  |        |          |             +--> Observability: health, metrics, traces, redacted logs
  |        |          +----------------> LLM providers: Claude, OpenAI, Gemini, MiniMax, local gateway
  |        +---------------------------> Redis / background jobs
  +------------------------------------> PostgreSQL
                                           |
                                           +--> ATT&CK / ATLAS reference data
                                           +--> APT, campaign, technique, IOC, CVE, asset, report, user data
```

## Intelligence And Evidence Model

```text
Reports / logs / PCAP / pasted text
        |
        v
AI-assisted extraction
        |
        v
Analyst review: accept / reject / needs evidence
        |
        +--> ATT&CK / ATLAS technique candidates
        +--> IOCs and observable context
        +--> CVE and vulnerability context
        +--> Detection backlog and telemetry gaps
        +--> Exports: PDF, JSON, CSV, STIX, Navigator layer
```

## Correlation Model

```text
APT / Group
  | uses
  v
TTP / Technique  <---- evidence ---- Report / Campaign
  | observed with
  v
IOC / Observable <---- source ---- IOC feeds / enrichment / manual import
  |
  | may relate to
  v
CVE / Vulnerability ---- affects ---- Product / CPE / Asset exposure
```

Relationships are source-backed where possible. Weak or AI-only relationships are treated as review candidates, not final truth.

## Attack Simulation And SIEM Validation

```text
Analyst chooses TTP
        |
        v
Attack Simulation scenario
        |
        +--> Lab-backed execution against approved Docker fixture
        |       |
        |       +--> Real lab logs: NGINX, auth, endpoint fixture telemetry
        |
        +--> AI-assisted source-shaped telemetry challenge
                |
                +--> Vendor/source-like events: Windows Event, Sysmon, EDR, DNS, proxy, WAF

Collected telemetry
        |
        +--> Real-time log viewer
        +--> Saved local logs
        +--> SIEM forwarding destination
```

Lab-backed logs and AI-generated telemetry are labeled separately. AI telemetry validates parser/rule/correlation handling; it is not proof of exploit execution.

## Malware Analysis Boundary

```text
Sample upload / selected sample
        |
        v
MalwareGraph-backed static workflow
        |
        +--> Hash and feed checks
        +--> PE/static triage
        +--> Strings and IOC extraction
        +--> Unpacking/deobfuscation hints
        +--> Decompilation/debug-style workspace
        +--> AI behavior/function summaries

Dynamic workflow
        |
        +--> Explicitly gated
        +--> Requires isolated runtime profile
        +--> Findings remain analyst-assistance output
```

## Security And Observability

```text
Operator
  |
  +--> Authenticated UI
  |       +--> Admin Panel
  |       +--> Observability Dashboard
  |
  +--> CI / release validation
          +--> tests
          +--> lint
          +--> SAST
          +--> dependency audits
          +--> secret scan
          +--> Docker build
          +--> container scan
```

Production deployments should use TLS, authentication, network restrictions, private provider keys, backups, retention policy, and external monitoring.

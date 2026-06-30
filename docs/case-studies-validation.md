---
id: case-studies-validation
title: Case Studies And Validation Examples
sidebar_position: 4
---

# Case Studies And Validation Examples

These examples show how to validate AdversaryGraph workflows using screenshots, reproducible demo data, and explicit boundaries. They are designed for reviewers and detection engineers, not as proof of compromise or attribution.

## Case Study 1: From Logs To Report

Goal: turn firewall and EDR-style telemetry into a reviewed investigation with IOCs, TTP leads, graph pivots, actor-overlap hypotheses, and a final report.

<figure>
<img src="/adversarygraph-docs/img/from-log-to-report/16-investigation-workspace.png" alt="Investigation workspace with suspicious behavior IOCs TTPs and report workflow" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Investigation workspace consolidates log analysis, suspicious behavior, IOCs, TTP leads, and report context.</figcaption>
</figure>

Validation checks:

- IOCs are source-tagged.
- TTPs remain analyst-review candidates until accepted.
- Actor comparison is treated as hypothesis generation, not attribution proof.
- Final report includes evidence and caveats.

Related workflow: [Investigation: Ransomware Intrusion](/use-cases/investigation-ransomware-intrusion).

## Case Study 2: Attack Simulation To SIEM

Goal: choose a technique, run an approved validation scenario, inspect real-time telemetry, and forward selected logs to a SIEM collector.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px', margin: '24px 0'}}>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/attack-simulation-v5/01-attack-simulation-matrix.png" alt="Attack Simulation matrix with available simulation techniques" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>TTP-first selection through the simulation matrix.</figcaption>
</figure>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/attack-simulation-v5/07-real-time-attack-logs.png" alt="Real-time attacked server logs in AdversaryGraph" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Real-time log review before SIEM forwarding.</figcaption>
</figure>
</div>

Validation checks:

- Scenario states telemetry source and event structure.
- Real lab telemetry is separated from AI-generated telemetry.
- SIEM destination is approved by the operator.
- Detection feasibility depends on the receiving SIEM parser and rule logic.

Related guide: [Attack Simulation](/attack-simulation).

## Case Study 3: CVE To APT / TTP / IOC Correlation

Goal: review vulnerability context without turning CVE exposure into attribution.

<figure>
<img src="/adversarygraph-docs/img/adversarygraph-v5.3/cve-library.png" alt="CVE Library showing CVSS KEV metadata and relationship detail panel" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>CVE Library supports CVSS/KEV review and strict evidence links to related actors, techniques, and indicators.</figcaption>
</figure>

Validation checks:

- CVSS and KEV fields come from synced vulnerability sources.
- CVE-to-APT/TTP/IOC links require explicit evidence.
- Relationship details are review material, not attribution proof.
- Missing CPE or asset context is called out as a gap.

Related guide: [CVE Library](/cve-cvss-intelligence).

## Case Study 4: Malware Analysis Boundary

Goal: triage a Windows sample, extract indicators, review strings and decompilation, and keep runtime claims separate from static evidence.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px', margin: '24px 0'}}>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/malware-analysis-v4/01-malware-analysis-dashboard.png" alt="Malware Analysis dashboard with case controls and analysis summary" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Malware Analysis case dashboard for controlled triage.</figcaption>
</figure>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/malware-analysis-v4/10-debugger-decompilation-ide.png" alt="Debugger style decompilation IDE with pseudocode and recovered APIs" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Decompilation/debug-style workspace for function review and validation gaps.</figcaption>
</figure>
</div>

Validation checks:

- Static evidence is labeled separately from runtime claims.
- Dynamic execution is gated and requires an isolated runtime profile.
- AI behavior summaries are review aids.
- Hash/feed results are contextual evidence, not final verdicts.

Related guide: [Malware Analysis](/malware-analysis).

## Case Study 5: Operator Readiness

Goal: prove that the platform is healthy, authenticated, observable, and reviewable before a pilot.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px', margin: '24px 0'}}>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/adversarygraph-v5.3/admin-users.png" alt="Admin Panel showing users roles account enablement and reset controls" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Admin Panel validates users, roles, and account management.</figcaption>
</figure>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/adversarygraph-v5.4/observability-dashboard.png" alt="Observability dashboard with API metrics traces and log tail" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Observability dashboard validates runtime health and operational traces.</figcaption>
</figure>
</div>

Validation checks:

- Auth is enabled and named admin accounts exist.
- API health endpoint returns the current version.
- Observability routes show recent request traces and redacted log tail.
- CI security checks are green or documented with known exceptions.

Related guide: [Observability and security validation](/observability-security-validation).

---
id: observability-security-validation
title: Observability, Security Scanning, And Validation Examples
sidebar_position: 12
---

# Observability, Security Scanning, And Validation Examples

AdversaryGraph includes operator-facing observability for the self-hosted platform. It is designed to help an administrator confirm API health, inspect request latency, review recent traces, tail redacted application logs, and export Prometheus-style metrics for an external monitoring stack.

The observability view is operational telemetry. It does not replace a SIEM, EDR, or production APM platform, and it does not prove that a detection worked. Use it to validate platform behavior and then confirm detection outcomes in the connected SIEM or telemetry backend.

<figure>
<img src="/adversarygraph-docs/img/adversarygraph-v5.4/observability-dashboard.png" alt="AdversaryGraph Observability dashboard with API health metrics request traces log tail and Prometheus preview" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Observability dashboard: API uptime, request volume, latency, status families, recent traces, route counts, redacted log tail, and Prometheus metrics preview.</figcaption>
</figure>

## Runtime Observability

| Area | What Is Available | Why It Matters |
|---|---|---|
| API health | `/api/health` plus authenticated observability summary | Confirms the API process and version are responding |
| Request metrics | Total requests, status families, top routes, average and maximum latency | Finds failed routes and slow API surfaces |
| Request traces | Recent method, path, status, duration, client host, and timestamp | Gives a compact view of what the UI or API clients are doing |
| Log tail | Redacted API log tail from the configured log file | Supports quick troubleshooting without entering the container |
| Prometheus output | `/api/observability/metrics` | Allows scrape-based external monitoring |

Observability endpoints are authenticated in normal deployments. Keep the dashboard limited to trusted operators because traces and log lines may reveal route names, request timing, and operational details.

## What Is Logged

AdversaryGraph records operational events needed for troubleshooting and validation:

- request method, route, status family, and latency
- recent request trace metadata
- last observed backend error summary
- API log tail with common credential markers redacted
- platform health and self-test results through existing system routes

The observability layer is intentionally not a long-term evidence store. For long retention, forward platform logs to a dedicated log backend and forward attack-simulation telemetry to the approved SIEM collector.

## Security Scanning

The repository validation flow now covers application code, dependencies, secrets, and containers.

| Check | Local Command / CI Job | Purpose |
|---|---|---|
| Python lint | `ruff check .` | Finds Python correctness and style issues |
| Backend SAST | Bandit in CI and `make security-scan` | Flags risky Python patterns such as weak hashes, unsafe parsing, and command execution |
| Python dependency audit | `pip-audit -r requirements.txt` | Checks Python dependencies for known vulnerabilities |
| Frontend dependency audit | `npm audit --audit-level=high` | Checks frontend packages for high severity vulnerabilities |
| Secret scan | Gitleaks in CI and local scan when installed | Finds committed tokens, passwords, and private keys |
| Docker configuration | `docker compose config --quiet` | Validates Compose syntax before deployment |
| Container scan | Trivy in CI and local scan when installed | Checks built images for known OS/package vulnerabilities |

Latest local validation snapshot:

- Backend route tests passed.
- Frontend production build passed.
- Ruff passed.
- Bandit passed for medium/high confidence checks.
- `pip-audit` reported no known Python dependency vulnerabilities.
- `npm audit --audit-level=high` reported no frontend vulnerabilities.
- Docker Compose config validation passed.
- Local Gitleaks and Trivy execution depends on the tools being installed; CI runs those checks.

## Case Studies And Validation Examples

Use these examples to prove the platform workflow, not to claim that a production environment is covered.

### Attack Simulation To SIEM

1. Choose a supported ATT&CK technique in Attack Simulation.
2. Run a lab-backed simulation or an AI-generated source-shaped telemetry challenge.
3. Inspect real-time logs in AdversaryGraph.
4. Forward the selected event stream to the approved SIEM collector.
5. Confirm parser, field mapping, rule hit, and alert context in the SIEM.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px', margin: '24px 0'}}>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/attack-simulation-v5/01-attack-simulation-matrix.png" alt="Attack Simulation matrix showing available simulated ATTACK techniques as highlighted cells" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Select the technique from the ATT&CK-style simulation matrix.</figcaption>
</figure>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/attack-simulation-v5/03-siem-forwarding-configuration.png" alt="Attack Simulation SIEM forwarding configuration with destination source and delivery controls" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Configure the approved SIEM destination, payload format, source, and auth mode.</figcaption>
</figure>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/attack-simulation-v5/07-real-time-attack-logs.png" alt="Real-time Attack Simulation logs showing lab web access events" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Validate generated lab telemetry before sending it to the SIEM.</figcaption>
</figure>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/attack-simulation-v5/08-siem-history-and-delivery.png" alt="Attack Simulation SIEM delivery history and saved forwarding targets" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Review delivery history and saved SIEM forwarding targets.</figcaption>
</figure>
</div>

Relevant guide: [Attack Simulation](/attack-simulation).

### CVE To APT / TTP / IOC Correlation

1. Sync NVD and CISA KEV records.
2. Review CVSS, CWE, CPE, KEV status, and source metadata.
3. Inspect strict CVE relationship evidence to actors, techniques, and indicators.
4. Treat the relationship as an evidence link, not attribution proof.

<figure>
<img src="/adversarygraph-docs/img/adversarygraph-v5.3/cve-library.png" alt="CVE Library with NVD KEV CVSS filtering and strict correlation detail panel" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>CVE Library validation: sync status, CVSS/KEV metadata, and strict correlation review in one workspace.</figcaption>
</figure>

Relevant guide: [CVE Library](/cve-cvss-intelligence).

### Authentication And Admin Validation

1. Enable native authentication.
2. Bootstrap the first administrator.
3. Create named viewer, analyst, and admin users.
4. Confirm role-gated access to operational modules.
5. Remove bootstrap credentials from the runtime environment after permanent admin accounts exist.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px', margin: '24px 0'}}>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/adversarygraph-v5.3/login-page.png" alt="AdversaryGraph login page with username password fields and setup guide link" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Protected login page for private analyst workspaces.</figcaption>
</figure>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/adversarygraph-v5.3/admin-users.png" alt="Admin Panel showing user creation role assignment account enablement and reset controls" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Admin Panel validates named users, roles, account status, and password reset flow.</figcaption>
</figure>
</div>

Relevant section: [Authentication And User Management](/capabilities#authentication-and-user-management).

### Malware Analysis Boundary Validation

1. Upload or select an authorized Windows sample.
2. Review static triage, strings, recovered imports, unpacking hints, and debug workspace output.
3. Confirm that gated dynamic-analysis steps are clearly marked and separated from static findings.
4. Treat AI summaries as analyst-assistance output requiring validation.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px', margin: '24px 0'}}>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/malware-analysis-v4/01-malware-analysis-dashboard.png" alt="Malware Analysis dashboard with case controls hash check and analysis summary" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Malware Analysis case dashboard for static triage and analyst-controlled workflow.</figcaption>
</figure>
<figure style={{margin: 0}}>
<img src="/adversarygraph-docs/img/malware-analysis-v4/10-debugger-decompilation-ide.png" alt="Malware debugger decompilation IDE with recovered pseudocode entrypoint details and recovered APIs" loading="lazy" style={{width: '100%', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}} />
<figcaption>Decompilation/debug view separates static artifacts from runtime validation requirements.</figcaption>
</figure>
</div>

Relevant guide: [Malware Analysis](/malware-analysis).

## Operational Limits

- Observability is in-process and intended for troubleshooting, not long-term monitoring.
- Logs are redacted for common credential markers, but operators should still avoid exposing the dashboard publicly.
- Security scans reduce risk but do not replace manual review, threat modeling, or deployment hardening.
- Attack Simulation telemetry must be run only against authorized lab targets and approved SIEM collectors.

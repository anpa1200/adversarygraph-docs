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

Relevant guide: [Attack Simulation](/attack-simulation).

### CVE To APT / TTP / IOC Correlation

1. Sync NVD and CISA KEV records.
2. Review CVSS, CWE, CPE, KEV status, and source metadata.
3. Inspect strict CVE relationship evidence to actors, techniques, and indicators.
4. Treat the relationship as an evidence link, not attribution proof.

Relevant guide: [CVE Library](/cve-cvss-intelligence).

### Authentication And Admin Validation

1. Enable native authentication.
2. Bootstrap the first administrator.
3. Create named viewer, analyst, and admin users.
4. Confirm role-gated access to operational modules.
5. Remove bootstrap credentials from the runtime environment after permanent admin accounts exist.

Relevant section: [Authentication And User Management](/capabilities#authentication-and-user-management).

### Malware Analysis Boundary Validation

1. Upload or select an authorized Windows sample.
2. Review static triage, strings, recovered imports, unpacking hints, and debug workspace output.
3. Confirm that gated dynamic-analysis steps are clearly marked and separated from static findings.
4. Treat AI summaries as analyst-assistance output requiring validation.

Relevant guide: [Malware Analysis](/malware-analysis).

## Operational Limits

- Observability is in-process and intended for troubleshooting, not long-term monitoring.
- Logs are redacted for common credential markers, but operators should still avoid exposing the dashboard publicly.
- Security scans reduce risk but do not replace manual review, threat modeling, or deployment hardening.
- Attack Simulation telemetry must be run only against authorized lab targets and approved SIEM collectors.

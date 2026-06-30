---
id: architecture
title: Architecture Diagrams
sidebar_position: 3
---

# Architecture Diagrams

AdversaryGraph is a self-hosted CTI-to-detection platform. The architecture is intentionally modular: the browser workspace stays separate from the API, database, background workers, MalwareGraph service, and attack-simulation lab fixtures.

The diagrams below are reviewer-facing architecture infographics. They show data flow, trust boundaries, storage responsibilities, and where analyst validation is required.

## Platform Runtime

<div className="ag-arch ag-arch-runtime">
  <div className="ag-zone ag-zone-user">
    <span className="ag-zone-label">User Boundary</span>
    <div className="ag-node ag-node-primary">
      <strong>Analyst Browser</strong>
      <span>Private workspace UI</span>
    </div>
  </div>
  <div className="ag-flow-arrow">HTTPS / local reverse proxy</div>
  <div className="ag-zone">
    <span className="ag-zone-label">Frontend</span>
    <div className="ag-node">
      <strong>React Frontend</strong>
      <span>nginx static application</span>
    </div>
  </div>
  <div className="ag-flow-arrow">/api/*</div>
  <div className="ag-zone">
    <span className="ag-zone-label">Backend Runtime</span>
    <div className="ag-node ag-node-core">
      <strong>FastAPI Backend</strong>
      <span>Auth, APIs, review workflow, exports</span>
    </div>
  </div>
  <div className="ag-spokes">
    <div className="ag-node">
      <strong>PostgreSQL</strong>
      <span>ATT&CK / ATLAS, APTs, TTPs, IOCs, CVEs, assets, users, reports</span>
    </div>
    <div className="ag-node">
      <strong>Redis / Jobs</strong>
      <span>Background sync and worker state</span>
    </div>
    <div className="ag-node">
      <strong>LLM Providers</strong>
      <span>Claude, OpenAI, Gemini, MiniMax, local gateway</span>
    </div>
    <div className="ag-node">
      <strong>Observability</strong>
      <span>Health, request metrics, traces, redacted logs, Prometheus output</span>
    </div>
  </div>
</div>

**Trust boundary:** report content is sent only to the LLM provider configured by the operator. The database and logs are operator-controlled in the self-hosted deployment.

## Intelligence And Evidence Model

<div className="ag-pipeline">
  <div className="ag-stage">
    <span>1</span>
    <strong>Ingest</strong>
    <p>Reports, logs, PCAP-derived text, IOCs, malware findings, asset inventories, and pasted analyst notes.</p>
  </div>
  <div className="ag-stage">
    <span>2</span>
    <strong>Extract</strong>
    <p>AI-assisted parsing identifies observables, ATT&CK/ATLAS candidates, CVEs, suspicious behavior, and evidence snippets.</p>
  </div>
  <div className="ag-stage ag-stage-review">
    <span>3</span>
    <strong>Analyst Review</strong>
    <p>Accept, reject, or mark findings as needing evidence. AI output is never treated as final truth by itself.</p>
  </div>
  <div className="ag-stage">
    <span>4</span>
    <strong>Operationalize</strong>
    <p>Navigator layers, IOC/CVE context, detection backlog, telemetry gaps, PDF reports, JSON, CSV, and STIX exports.</p>
  </div>
</div>

<div className="ag-output-grid">
  <div><strong>ATT&CK / ATLAS</strong><span>Technique candidates, tactics, evidence, review state</span></div>
  <div><strong>IOCs</strong><span>Observable values, source attribution, enrichment context</span></div>
  <div><strong>CVEs</strong><span>CVSS, KEV, CWE, CPE, evidence links</span></div>
  <div><strong>Detection</strong><span>Telemetry readiness, backlog, validation gaps</span></div>
</div>

## Correlation Model

<div className="ag-correlation">
  <div className="ag-corr-node ag-corr-actor">
    <strong>APT / Group</strong>
    <span>ATT&CK groups, aliases, reports, campaigns</span>
  </div>
  <div className="ag-corr-node ag-corr-ttp">
    <strong>TTP / Technique</strong>
    <span>ATT&CK / ATLAS technique, tactic, platform, telemetry requirement</span>
  </div>
  <div className="ag-corr-node ag-corr-ioc">
    <strong>IOC / Observable</strong>
    <span>IP, domain, URL, hash, artifact, source metadata</span>
  </div>
  <div className="ag-corr-node ag-corr-cve">
    <strong>CVE / Vulnerability</strong>
    <span>CVSS, KEV, CWE, CPE, affected product, asset exposure</span>
  </div>
  <div className="ag-corr-node ag-corr-evidence">
    <strong>Evidence</strong>
    <span>Reports, campaigns, enrichment feeds, analyst notes, validation output</span>
  </div>
</div>

<div className="ag-rule-strip">
  <strong>Correlation rule:</strong>
  <span>source-backed relationships first, enrichment metadata second, optional AI only as a review candidate. Weak or AI-only relationships are not final attribution.</span>
</div>

Relationships are source-backed where possible. Weak or AI-only relationships are treated as review candidates, not final truth.

## Attack Simulation And SIEM Validation

<div className="ag-split-diagram">
  <div className="ag-split-head">
    <strong>Analyst selects ATT&CK TTP</strong>
    <span>Scenario page explains behavior, telemetry source, event structure, detection focus, and validation gaps.</span>
  </div>
  <div className="ag-split-columns">
    <div className="ag-lane ag-lane-real">
      <h3>Lab-Backed Telemetry</h3>
      <div className="ag-node"><strong>Approved Docker Fixture</strong><span>Web server, endpoint fixture, service target</span></div>
      <div className="ag-node"><strong>Real Target Logs</strong><span>NGINX/access/auth/security/error or endpoint fixture telemetry</span></div>
      <div className="ag-node"><strong>Real-Time Viewer</strong><span>Run ID, raw line, source, status, client, bytes, event type</span></div>
    </div>
    <div className="ag-lane ag-lane-ai">
      <h3>AI-Assisted Telemetry Challenge</h3>
      <div className="ag-node"><strong>Coherent Kill Chain</strong><span>Ordered phases, related events, explain-attack output</span></div>
      <div className="ag-node"><strong>Source-Shaped Events</strong><span>Windows Event, Sysmon, EDR, DNS, proxy, WAF, firewall</span></div>
      <div className="ag-node"><strong>Parser / Rule Drill</strong><span>Validates SIEM field handling and correlation logic</span></div>
    </div>
  </div>
  <div className="ag-siem-row">
    <div><strong>Collected Telemetry</strong><span>Saved local logs and selected event streams</span></div>
    <div><strong>SIEM Forwarding</strong><span>Approved HTTP collector destination, auth mode, payload format</span></div>
    <div><strong>Detection Review</strong><span>Parser result, rule hit, missed stages, coverage gaps</span></div>
  </div>
</div>

Lab-backed logs and AI-generated telemetry are labeled separately. AI telemetry validates parser/rule/correlation handling; it is not proof of exploit execution.

## Malware Analysis Boundary

<div className="ag-malware-boundary">
  <div className="ag-malware-left">
    <span className="ag-zone-label">Default Workflow</span>
    <h3>MalwareGraph-Backed Static Analysis</h3>
    <ul>
      <li>Hash and feed checks</li>
      <li>PE/static triage</li>
      <li>Strings and IOC extraction</li>
      <li>Unpacking and deobfuscation hints</li>
      <li>Decompilation/debug-style workspace</li>
      <li>AI behavior and function summaries</li>
    </ul>
  </div>
  <div className="ag-malware-right">
    <span className="ag-zone-label">Gated Boundary</span>
    <h3>Runtime / Dynamic Analysis</h3>
    <ul>
      <li>Requires explicit isolated runtime profile</li>
      <li>Network and execution controls must be configured by operator</li>
      <li>Runtime claims must be separated from static findings</li>
      <li>AI summaries remain analyst-assistance output</li>
    </ul>
  </div>
</div>

## Security And Observability

<div className="ag-security-grid">
  <div className="ag-node ag-node-primary">
    <strong>Authenticated UI</strong>
    <span>Native login, viewer/analyst/admin roles, admin panel</span>
  </div>
  <div className="ag-node">
    <strong>Observability Dashboard</strong>
    <span>Health, uptime, latency, traces, redacted log tail, Prometheus metrics</span>
  </div>
  <div className="ag-node">
    <strong>CI Validation</strong>
    <span>Backend tests, frontend build, docs build, Docker build check</span>
  </div>
  <div className="ag-node">
    <strong>Security Scanning</strong>
    <span>Ruff, Bandit SAST, pip-audit, npm audit, Gitleaks, Trivy</span>
  </div>
</div>

Production deployments should use TLS, authentication, network restrictions, private provider keys, backups, retention policy, and external monitoring.

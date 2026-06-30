import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const features = [
  ['Full Deployment Flow', 'Clone the repository, configure secrets, start Docker, verify selftest, sync ATT&CK/ATLAS, and connect IOC/rule/enrichment feeds.', '/full-flow'],
  ['Attack Simulation', 'Run TTP-first validation workflows, inspect real lab telemetry, forward events to SIEM collectors, and use AI-assisted kill-chain drills for detection engineering.', '/attack-simulation'],
  ['Malware Analysis', 'Analyze Windows samples through the MalwareGraph-backed workflow: static triage, strings, unpacking, decompilation, debug workspaces, AI summaries, and gated dynamic analysis.', '/malware-analysis'],
  ['Asset Attack Surface', 'Upload asset inventories, normalize exposure, score risk, map likely ATT&CK techniques, and create attack-surface cases for validation and prioritization.', '/platform-guide'],
  ['CVE Library', 'Sync NVD and CISA KEV, enrich CVSS fields, and review strict CVE-to-APT/TTP/IOC evidence links without treating vulnerability data as attribution.', '/cve-cvss-intelligence'],
  ['Authentication And Users', 'Enable native login, bootstrap an administrator, create viewer/analyst/admin users, and harden access for private team deployments.', '/capabilities#authentication-and-user-management'],
  ['Observability And Validation', 'Review API health, request traces, redacted log tails, Prometheus metrics, security scanning, and validation examples.', '/observability-security-validation'],
  ['Platform Capabilities', 'Review the full capability map: AI analysis, actor intelligence, IOC/CVE libraries, enrichment, feeds, STIX/TAXII/MISP, attack simulation, malware analysis, exports, and APIs.', '/capabilities'],
  ['AI-Assisted Mapping', 'Ingest PDF, DOCX, TXT, or pasted reports through the LLM provider configured by the operator, then review evidence-backed ATT&CK mapping candidates.', '/ai-analysis/overview'],
  ['ATT&CK And ATLAS Navigator', 'Explore Enterprise, Mobile, ICS, and ATLAS matrices, build layers, review technique context, and plan coverage.', '/navigator/overview'],
  ['Group, Campaign, And Report Similarity', 'Use TTP overlap for hypothesis generation, prioritization, report comparison, and gap analysis. Similarity is not attribution.', '/compare/overview'],
  ['Operations, Security, And Validation', 'Operate the self-hosted platform with selftests, troubleshooting, evaluation guidance, API access, and deployment hardening.', '/security'],
];

const proofScreens = [
  ['Attack Simulation', 'AI-generated kill-chain graph, SIEM forwarding, and telemetry validation workflow.', '/img/attack-simulation-v5/05-ai-generated-attack-chain-graph.png', '/attack-simulation'],
  ['CVE Library', 'NVD/KEV sync controls, CVSS enrichment state, and strict relationship review.', '/img/adversarygraph-v5.3/cve-library.png', '/cve-cvss-intelligence'],
  ['Protected Login', 'Native username/password entry point for protected analyst workspaces.', '/img/adversarygraph-v5.3/login-page.png', '/capabilities#authentication-and-user-management'],
  ['Admin Panel', 'Named users, role assignment, account enablement, and password reset.', '/img/adversarygraph-v5.3/admin-users.png', '/capabilities#authentication-and-user-management'],
  ['Observability', 'API health, request traces, redacted log tail, route metrics, and Prometheus preview.', '/img/adversarygraph-v5.4/observability-dashboard.png', '/observability-security-validation'],
  ['Malware Analysis', 'Static triage, strings, unpacking, debugger, and AI summary workflow.', '/img/malware-analysis-v4/01-malware-analysis-dashboard.png', '/malware-analysis'],
  ['IOC Investigation', 'Source-backed pivots, enrichment, graph review, and investigation handoff.', '/img/adversarygraph-v3/06-relationship-graph-node-panel.png', '/capabilities#ioc-investigation'],
];

export default function Home() {
  return <Layout title="AdversaryGraph Documentation — CTI-to-Detection Workbench | 1200km" description="Documentation for AdversaryGraph AI, a self-hosted CTI-to-detection platform for ATT&CK mapping, IOC and CVE intelligence, malware analysis, attack simulation, feed synchronization, authentication, and detection engineering handoff.">
    <header className="hero hero--adversarygraph"><div className="container hero--adversarygraph__content">
      <h1 className="hero__title">AdversaryGraph Documentation</h1>
      <p className="hero__subtitle">Self-hosted CTI-to-detection workbench for ATT&amp;CK mapping, IOC and CVE intelligence, malware analysis, attack simulation, detection-gap analysis, and analyst-ready outputs.</p>
      <p>AdversaryGraph assists analysts but does not replace analyst validation. TTP overlap, CVE exposure, and actor similarity are investigation leads, not attribution proof.</p>
      <div className="hero-actions">
        <Link className="button button--primary button--lg" to="/full-flow">Get Started</Link>
        <Link className="button button--secondary button--lg" to="/attack-simulation">Attack Simulation</Link>
        <Link className="button button--secondary button--lg" to="/capabilities">Capabilities</Link>
        <Link className="button button--secondary button--lg" href="https://1200km.com/adversarygraph/">Project Hub</Link>
      </div>
    </div></header>
    <main>
      <section className="tm-section"><div className="container"><h2>Start Here</h2>
        <ol><li>Clone the repository and create `.env`</li><li>Start the Docker stack</li><li>Run selftest and confirm API health</li><li>Sync ATT&amp;CK, ATLAS, actor metadata, IOC feeds, YARA/Sigma, and sandbox behavior sources</li><li>Analyze a report or IOC</li><li>Review mappings, enrich context, compare actors, and export outputs</li></ol>
      </div></section>
      <section className="tm-section"><div className="container"><h2>Self-Hosted Platform</h2>
        <p><strong>AdversaryGraph Docker</strong> is the supported full platform: private AI-assisted extraction, stored analyses, native users and roles, APIs, PDF reports, IOC enrichment, CVE Library, STIX/TAXII/MISP workflows, YARA/Sigma sync, malware-analysis handoff, attack simulation, and scheduled reference synchronization.</p>
        <p>Report content is sent only to the LLM provider configured by the operator. For fully private analysis, use a local or private OpenAI-compatible gateway. Native authentication can protect the workspace with viewer, analyst, and admin roles.</p>
        <Link to="/full-flow">Follow the complete clone-to-feed-sync flow →</Link>
      </div></section>
      <section className="tm-section tm-release"><div className="container">
        <span className="tm-badge">v5.x</span>
        <h2>Current Release Focus</h2>
        <p>AdversaryGraph v5.x expands from CTI mapping into detection validation and operations: attack simulation, real lab telemetry review, SIEM forwarding, AI-generated kill-chain drills, CVE Library correlations, native authentication, admin user management, and observability.</p>
        <div className="hero-actions">
          <Link className="button button--primary" to="/attack-simulation">Open Attack Simulation Guide</Link>
          <Link className="button button--secondary" to="/cve-cvss-intelligence">Review CVE Library</Link>
          <Link className="button button--secondary" to="/capabilities#authentication-and-user-management">Review Auth</Link>
          <Link className="button button--secondary" to="/observability-security-validation">Review Observability</Link>
          <Link className="button button--secondary" href="https://medium.com/@1200km/adversarygraph-v5-0-from-cti-mapping-to-attack-simulation-and-siem-validation-21873b2a6c39">Read Release Article</Link>
        </div>
      </div></section>
      <section className="tm-section"><div className="container">
        <h2>Current Platform Proof</h2>
        <p className="tm-section-lead">Screenshots are taken from the current local v5.3 platform and show the modules documented in this guide.</p>
        <div className="tm-screenshot-grid">
          {proofScreens.map(([title, body, src, href]) => <Link className="tm-screenshot-card" to={href} key={title}>
            <img src={src} alt={`${title} screenshot in AdversaryGraph`} loading="lazy" />
            <span><strong>{title}</strong>{body}</span>
          </Link>)}
        </div>
      </div></section>
      <section className="tm-section"><div className="container"><h2>Documentation Areas</h2><div className="tm-grid">
        {features.map(([title,body,href]) => <article className="tm-card" key={title}><h3>{title}</h3><p>{body}</p><Link to={href}>Read more →</Link></article>)}
      </div></div></section>
    </main>
  </Layout>;
}

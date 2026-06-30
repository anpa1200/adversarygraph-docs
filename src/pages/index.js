import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const features = [
  ['Commercial Trust', 'Review implemented capabilities, boundaries, validation evidence, deployment posture, and commercial-readiness checklist.', '/commercial-trust'],
  ['Architecture Diagrams', 'Understand runtime services, data flow, ATT&CK/CVE/IOC correlations, Attack Simulation, Malware Analysis, and observability boundaries.', '/architecture'],
  ['Case Studies And Validation', 'Walk through screenshot-backed validation examples for logs-to-report, SIEM validation, CVE correlation, auth/admin, and malware analysis.', '/case-studies-validation'],
  ['Comparison Pages', 'Compare AdversaryGraph with OpenCTI, MISP, ATT&CK Navigator, Atomic Red Team, and malware sandboxes using practical fit criteria.', '/comparisons/overview'],
  ['Full Deployment Flow', 'Clone the repository, configure secrets, start Docker, verify selftest, sync ATT&CK/ATLAS, and connect IOC/rule/enrichment feeds.', '/full-flow'],
  ['Attack Simulation', 'Run TTP-first validation workflows, inspect real lab telemetry, forward events to SIEM collectors, and use AI-assisted kill-chain drills for detection engineering.', '/attack-simulation'],
  ['Malware Analysis', 'Analyze Windows samples through the MalwareGraph-backed workflow: static triage, strings, unpacking, decompilation, debug workspaces, AI summaries, and gated dynamic analysis.', '/malware-analysis'],
  ['Asset Attack Surface', 'Upload asset inventories, normalize exposure, score risk, map likely ATT&CK techniques, and create attack-surface cases for validation and prioritization.', '/platform-guide'],
  ['CVE Library', 'Sync NVD and CISA KEV, enrich CVSS fields, and review strict CVE-to-APT/TTP/IOC evidence links without treating vulnerability data as attribution.', '/cve-cvss-intelligence'],
  ['Authentication And Users', 'Enable native login, bootstrap named administrators, manage RBAC permissions, sessions, MFA workflow state, audit history, and trusted proxy SSO metadata.', '/authentication-and-users'],
  ['Observability And Validation', 'Review API health, request traces, redacted log tails, Prometheus metrics, security scanning, and validation examples.', '/observability-security-validation'],
  ['Platform Capabilities', 'Review the full capability map: AI analysis, actor intelligence, IOC/CVE libraries, enrichment, feeds, STIX/TAXII/MISP, attack simulation, malware analysis, exports, and APIs.', '/capabilities'],
  ['AI-Assisted Mapping', 'Ingest PDF, DOCX, TXT, or pasted reports through the LLM provider configured by the operator, then review evidence-backed ATT&CK mapping candidates.', '/ai-analysis/overview'],
  ['ATT&CK And ATLAS Navigator', 'Explore Enterprise, Mobile, ICS, and ATLAS matrices, build layers, review technique context, and plan coverage.', '/navigator/overview'],
  ['Group, Campaign, And Report Similarity', 'Use TTP overlap for hypothesis generation, prioritization, report comparison, and gap analysis. Similarity is not attribution.', '/compare/overview'],
  ['Operations, Security, And Validation', 'Operate the self-hosted platform with selftests, troubleshooting, evaluation guidance, API access, and deployment hardening.', '/security'],
];

const trustProof = [
  ['Self-hosted', 'Docker deployment with operator-controlled storage, provider keys, and database.'],
  ['Evidence-first', 'AI mapping, actor similarity, CVE links, and malware summaries are reviewable signals, not final proof.'],
  ['Security-scanned', 'CI covers tests, lint, SAST, dependency audit, Docker build, container scan, and secret scan.'],
  ['Observable', 'Runtime health, request traces, route metrics, redacted log tail, and Prometheus output.'],
];

const proofScreens = [
  ['Attack Simulation', 'AI-generated kill-chain graph, SIEM forwarding, and telemetry validation workflow.', '/img/attack-simulation-v5/05-ai-generated-attack-chain-graph.png', '/attack-simulation'],
  ['CVE Library', 'NVD/KEV sync controls, CVSS enrichment state, and strict relationship review.', '/img/adversarygraph-v5.3/cve-library.png', '/cve-cvss-intelligence'],
  ['Protected Login', 'Native username/password entry point for protected analyst workspaces.', '/img/adversarygraph-v5.3/login-page.png', '/capabilities#authentication-and-user-management'],
  ['Admin Panel', 'Named users, effective permissions, sessions, MFA state, audit history, and password reset.', '/img/adversarygraph-v5.3/admin-users.png', '/authentication-and-users'],
  ['Observability', 'API health, request traces, redacted log tail, route metrics, and Prometheus preview.', '/img/adversarygraph-v5.4/observability-dashboard.png', '/observability-security-validation'],
  ['Malware Analysis', 'Static triage, strings, unpacking, debugger, and AI summary workflow.', '/img/malware-analysis-v4/01-malware-analysis-dashboard.png', '/malware-analysis'],
  ['IOC Investigation', 'Source-backed pivots, enrichment, graph review, and investigation handoff.', '/img/adversarygraph-v3/06-relationship-graph-node-panel.png', '/capabilities#ioc-investigation'],
];

export default function Home() {
  return <Layout title="AdversaryGraph — Commercial-Ready CTI-to-Detection Workbench | 1200km" description="Commercial trust documentation for AdversaryGraph AI: a self-hosted CTI-to-detection platform for ATT&CK mapping, IOC and CVE intelligence, malware analysis, attack simulation, observability, security validation, and detection engineering handoff.">
    <header className="hero hero--adversarygraph"><div className="container hero--adversarygraph__content">
      <span className="tm-badge">AdversaryGraph v5.5</span>
      <h1 className="hero__title">CTI-to-detection workbench for teams that need evidence, not guesswork</h1>
      <p className="hero__subtitle">Self-hosted platform for ATT&amp;CK/ATLAS mapping, IOC and CVE intelligence, malware-analysis triage, asset attack-surface review, Attack Simulation, SIEM validation, observability, and analyst-ready outputs.</p>
      <p>Built for controlled deployments, private analysis, and detection-engineering handoff. AI assists the workflow; analysts validate the evidence.</p>
      <div className="hero-actions">
        <Link className="button button--primary button--lg" to="/commercial-trust">Commercial Trust</Link>
        <Link className="button button--secondary button--lg" to="/case-studies-validation">Validation Examples</Link>
        <Link className="button button--secondary button--lg" to="/architecture">Architecture</Link>
        <Link className="button button--secondary button--lg" to="/comparisons/overview">Compare</Link>
        <Link className="button button--secondary button--lg" href="https://1200km.com/adversarygraph/">Project Hub</Link>
      </div>
    </div></header>
    <main>
      <section className="tm-section tm-release"><div className="container">
        <h2>Commercial Trust Snapshot</h2>
        <p className="tm-section-lead">AdversaryGraph is source-available and self-hosted. The current focus is production hardening: clear boundaries, documented validation, screenshot-backed workflows, secure deployment guidance, and compatibility with established CTI and detection tools.</p>
        <div className="tm-grid">
          {trustProof.map(([title, body]) => <article className="tm-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </div></section>
      <section className="tm-section"><div className="container"><h2>Start Here</h2>
        <ol><li>Read the commercial trust and boundary page</li><li>Review architecture diagrams and deployment posture</li><li>Check screenshot-backed validation examples</li><li>Compare fit against OpenCTI, MISP, ATT&amp;CK Navigator, Atomic Red Team, and sandboxes</li><li>Clone the repository, configure `.env`, start Docker, and run selftest</li><li>Sync ATT&amp;CK/ATLAS, analyze a report or IOC, validate evidence, and export outputs</li></ol>
      </div></section>
      <section className="tm-section"><div className="container"><h2>Self-Hosted Platform</h2>
        <p><strong>AdversaryGraph Docker</strong> is the supported full platform: private AI-assisted extraction, stored analyses, enterprise access controls, APIs, PDF reports, IOC enrichment, CVE Library, STIX/TAXII/MISP workflows, YARA/Sigma sync, malware-analysis handoff, attack simulation, and scheduled reference synchronization.</p>
        <p>Report content is sent only to the LLM provider configured by the operator. For fully private analysis, use a local or private OpenAI-compatible gateway. Native authentication can protect the workspace with RBAC roles, per-user permissions, session controls, MFA workflow support, audit history, and trusted proxy SSO metadata.</p>
        <Link to="/full-flow">Follow the complete clone-to-feed-sync flow →</Link>
      </div></section>
      <section className="tm-section tm-release"><div className="container">
        <span className="tm-badge">v5.x</span>
        <h2>Current Release Focus</h2>
        <p>AdversaryGraph v5.x expands from CTI mapping into detection validation and operations: attack simulation, real lab telemetry review, SIEM forwarding, AI-generated kill-chain drills, CVE Library correlations, enterprise access controls, admin/user operations, audit history, and observability.</p>
        <div className="hero-actions">
          <Link className="button button--primary" to="/commercial-trust">Review Trust Package</Link>
          <Link className="button button--primary" to="/attack-simulation">Open Attack Simulation Guide</Link>
          <Link className="button button--secondary" to="/cve-cvss-intelligence">Review CVE Library</Link>
          <Link className="button button--secondary" to="/authentication-and-users">Review Auth</Link>
          <Link className="button button--secondary" to="/observability-security-validation">Review Observability</Link>
          <Link className="button button--secondary" href="https://medium.com/@1200km/adversarygraph-v5-0-from-cti-mapping-to-attack-simulation-and-siem-validation-21873b2a6c39">Read Release Article</Link>
        </div>
      </div></section>
      <section className="tm-section"><div className="container">
        <h2>Where It Fits</h2>
        <p className="tm-section-lead">AdversaryGraph complements established tools instead of trying to replace them. It sits between intelligence intake and detection engineering.</p>
        <div className="tm-grid">
          <article className="tm-card"><h3>Before CTI Systems</h3><p>Extract, review, enrich, and normalize report evidence before pushing selected outputs into an OpenCTI or MISP-centered workflow.</p><Link to="/comparisons/opencti">OpenCTI comparison →</Link></article>
          <article className="tm-card"><h3>Around ATT&amp;CK Layers</h3><p>Build layers from evidence, actors, reports, assets, malware findings, and validation telemetry, then export Navigator-compatible artifacts.</p><Link to="/comparisons/attack-navigator">Navigator comparison →</Link></article>
          <article className="tm-card"><h3>Before Detection Deployment</h3><p>Review telemetry readiness, validate lab or source-shaped events, forward to SIEM, and record detection gaps before operational rollout.</p><Link to="/comparisons/atomic-red-team">Atomic Red Team comparison →</Link></article>
          <article className="tm-card"><h3>After Malware Analysis</h3><p>Turn sandbox/static findings into ATT&amp;CK context, IOCs, CVE links, actor/report comparison, and case-ready outputs.</p><Link to="/comparisons/malware-sandboxes">Sandbox comparison →</Link></article>
        </div>
      </div></section>
      <section className="tm-section"><div className="container">
        <h2>Current Platform Proof</h2>
        <p className="tm-section-lead">Screenshots are taken from current v5.x local platform workflows. Some auth/CVE/malware screenshots are representative historical captures where the workflow remains current.</p>
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

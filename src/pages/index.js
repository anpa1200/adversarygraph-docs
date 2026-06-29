import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const features = [
  ['Full Deployment Flow', 'Clone the repository, configure secrets, start Docker, verify selftest, sync ATT&CK/ATLAS, and connect IOC/rule/enrichment feeds.', '/full-flow'],
  ['Attack Simulation', 'Run TTP-first validation workflows, inspect real lab telemetry, forward events to SIEM collectors, and use AI-assisted kill-chain drills for detection engineering.', '/attack-simulation'],
  ['Malware Analysis', 'Analyze Windows samples through the MalwareGraph-backed workflow: static triage, strings, unpacking, decompilation, debug workspaces, AI summaries, and gated dynamic analysis.', '/malware-analysis'],
  ['Asset Attack Surface', 'Upload asset inventories, normalize exposure, score risk, map likely ATT&CK techniques, and create attack-surface cases for validation and prioritization.', '/platform-guide'],
  ['Platform Capabilities', 'Review the full capability map: AI analysis, actor intelligence, IOC Library, enrichment, feeds, STIX/TAXII/MISP, YARA/Sigma, sandbox behavior, exports, and APIs.', '/capabilities'],
  ['AI-Assisted Mapping', 'Ingest PDF, DOCX, TXT, or pasted reports through the LLM provider configured by the operator, then review evidence-backed ATT&CK mapping candidates.', '/ai-analysis/overview'],
  ['ATT&CK And ATLAS Navigator', 'Explore Enterprise, Mobile, ICS, and ATLAS matrices, build layers, review technique context, and plan coverage.', '/navigator/overview'],
  ['Group, Campaign, And Report Similarity', 'Use TTP overlap for hypothesis generation, prioritization, report comparison, and gap analysis. Similarity is not attribution.', '/compare/overview'],
  ['Operations, Security, And Validation', 'Operate the self-hosted platform with selftests, troubleshooting, evaluation guidance, API access, and deployment hardening.', '/security'],
];

export default function Home() {
  return <Layout title="AdversaryGraph Documentation — CTI-to-Detection Workbench | 1200km" description="Documentation for AdversaryGraph AI, a self-hosted CTI-to-detection platform for AI-assisted ATT&CK mapping, IOC enrichment, feed synchronization, and detection engineering handoff.">
    <header className="hero hero--adversarygraph"><div className="container hero--adversarygraph__content">
      <h1 className="hero__title">AdversaryGraph Documentation</h1>
      <p className="hero__subtitle">AI-assisted CTI-to-detection workbench for ATT&amp;CK mapping, group and campaign similarity, detection-gap analysis, and analyst-ready outputs.</p>
      <p>AdversaryGraph assists analysts but does not replace analyst validation. TTP overlap is an investigation lead, not attribution proof.</p>
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
        <p><strong>AdversaryGraph Docker</strong> is the supported full platform: private AI-assisted extraction, stored analyses, APIs, PDF reports, IOC enrichment, STIX/TAXII/MISP workflows, YARA/Sigma sync, sandbox behavior, and scheduled reference synchronization.</p>
        <p>Report content is sent only to the LLM provider configured by the operator. For fully private analysis, use a local or private OpenAI-compatible gateway.</p>
        <Link to="/full-flow">Follow the complete clone-to-feed-sync flow →</Link>
      </div></section>
      <section className="tm-section tm-release"><div className="container">
        <span className="tm-badge">v5.0</span>
        <h2>Attack Simulation For Detection Engineering</h2>
        <p>AdversaryGraph v5 adds TTP-first attack simulation, real lab-target telemetry, SIEM forwarding, saved non-secret collector destinations, named coherent scenario templates, AI-generated attack-chain graphs, and explainable multi-source telemetry drills.</p>
        <div className="hero-actions">
          <Link className="button button--primary" to="/attack-simulation">Open Attack Simulation Guide</Link>
          <Link className="button button--secondary" href="https://medium.com/@1200km/adversarygraph-v5-0-from-cti-mapping-to-attack-simulation-and-siem-validation-21873b2a6c39">Read Release Article</Link>
          <Link className="button button--secondary" to="/platform-guide#attack-simulation">See Platform Context</Link>
        </div>
      </div></section>
      <section className="tm-section"><div className="container"><h2>Documentation Areas</h2><div className="tm-grid">
        {features.map(([title,body,href]) => <article className="tm-card" key={title}><h3>{title}</h3><p>{body}</p><Link to={href}>Read more →</Link></article>)}
      </div></div></section>
    </main>
  </Layout>;
}

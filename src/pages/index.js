import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const features = [
  ['AI-Assisted Mapping', 'Docker ingests PDF, DOCX, TXT, or pasted text through the LLM provider configured by the operator, then returns evidence-backed ATT&CK mapping candidates.', '/ai-analysis/overview'],
  ['ATT&CK Workspace', 'Explore Enterprise, Mobile, and ICS, build layers, review technique details, and plan detection coverage.', '/navigator/overview'],
  ['Group & Campaign Similarity', 'Use Jaccard TTP overlap for hypothesis generation, prioritization, and gap analysis. Similarity is not attribution.', '/compare/overview'],
  ['Web vs Docker', 'Review the precise capability and security differences between the public browser workspace and self-hosted platform.', '/functionality-parity'],
  ['Evaluation', 'Validate LLM mappings, evidence grounding, false positives, false negatives, and detection-engineering handoffs.', '/evaluation'],
  ['Security', 'Protect provider keys, PostgreSQL, APIs, trusted identity headers, and internet-facing deployments.', '/security'],
];

export default function Home() {
  return <Layout title="ThreatMapper Documentation — CTI-to-Detection Workbench" description="Documentation for ThreatMapper, an AI-assisted ATT&CK mapping and CTI-to-detection workbench with public Web and self-hosted Docker modes.">
    <header className="hero hero--threatmapper"><div className="container" style={{textAlign:'center',padding:'4rem 1rem 3rem'}}>
      <h1 className="hero__title">ThreatMapper Documentation</h1>
      <p className="hero__subtitle">AI-assisted CTI-to-detection workbench for ATT&amp;CK mapping, group and campaign similarity, detection-gap analysis, and analyst-ready outputs.</p>
      <p>ThreatMapper assists analysts but does not replace analyst validation. TTP overlap is an investigation lead, not attribution proof.</p>
      <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
        <Link className="button button--primary button--lg" href="https://1200km.com/threat-matrix/">Open Web Workspace</Link>
        <Link className="button button--secondary button--lg" to="/getting-started">Deploy Docker</Link>
        <Link className="button button--secondary button--lg" href="https://1200km.com/threatmapper/">Project Hub</Link>
      </div>
    </div></header>
    <main>
      <section className="tm-section"><div className="container"><h2>Start Here</h2>
        <ol><li>Open the Project Hub</li><li>Explore the browser-native Web Workspace</li><li>Read the AI Analysis workflow</li><li>Review Group &amp; Campaign Similarity</li><li>Deploy Docker for private AI-assisted analysis</li><li>Export reports and detection backlog</li></ol>
      </div></section>
      <section className="tm-section"><div className="container"><h2>Web vs Docker</h2>
        <p><strong>Public Web Workspace:</strong> browser-native exploration with no LLM report extraction or backend private-report storage.</p>
        <p><strong>Full Docker Platform:</strong> self-hosted AI-assisted extraction, stored analyses, APIs, PDF reports, and ATT&amp;CK sync. Report content is sent to the provider configured by the operator.</p>
        <Link to="/functionality-parity">Review the canonical functionality table →</Link>
      </div></section>
      <section className="tm-section"><div className="container"><h2>Documentation Areas</h2><div className="tm-grid">
        {features.map(([title,body,href]) => <article className="tm-card" key={title}><h3>{title}</h3><p>{body}</p><Link to={href}>Read more →</Link></article>)}
      </div></div></section>
    </main>
  </Layout>;
}

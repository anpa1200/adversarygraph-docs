import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const features = [
  ['Full Deployment Flow', 'Clone the repository, configure secrets, start Docker, verify selftest, sync ATT&CK/ATLAS, and connect IOC/rule/enrichment feeds.', '/full-flow'],
  ['Platform Capabilities', 'Review the full capability map: AI analysis, actor intelligence, IOC Library, enrichment, feeds, STIX/TAXII/MISP, YARA/Sigma, sandbox behavior, exports, and APIs.', '/capabilities'],
  ['AI-Assisted Mapping', 'Ingest PDF, DOCX, TXT, or pasted reports through the LLM provider configured by the operator, then review evidence-backed ATT&CK mapping candidates.', '/ai-analysis/overview'],
  ['ATT&CK And ATLAS Navigator', 'Explore Enterprise, Mobile, ICS, and ATLAS matrices, build layers, review technique context, and plan coverage.', '/navigator/overview'],
  ['Group, Campaign, And Report Similarity', 'Use TTP overlap for hypothesis generation, prioritization, report comparison, and gap analysis. Similarity is not attribution.', '/compare/overview'],
  ['Operations, Security, And Validation', 'Operate the self-hosted platform with selftests, troubleshooting, evaluation guidance, API access, and deployment hardening.', '/security'],
];

export default function Home() {
  return <Layout title="AdversaryGraph Documentation — CTI-to-Detection Workbench | 1200km" description="Documentation for AdversaryGraph AI, a self-hosted CTI-to-detection platform for AI-assisted ATT&CK mapping, IOC enrichment, feed synchronization, and detection engineering handoff.">
    <header className="hero hero--adversarygraph"><div className="container" style={{textAlign:'center',padding:'4rem 1rem 3rem'}}>
      <img src="/adversarygraph-docs/img/adversarygraph-ai-banner.png" alt="AdversaryGraph AI" style={{maxWidth:'760px',width:'100%',borderRadius:'8px',marginBottom:'2rem'}} />
      <h1 className="hero__title">AdversaryGraph Documentation</h1>
      <p className="hero__subtitle">AI-assisted CTI-to-detection workbench for ATT&amp;CK mapping, group and campaign similarity, detection-gap analysis, and analyst-ready outputs.</p>
      <p>AdversaryGraph assists analysts but does not replace analyst validation. TTP overlap is an investigation lead, not attribution proof.</p>
      <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
        <Link className="button button--primary button--lg" to="/full-flow">Get Started</Link>
        <Link className="button button--secondary button--lg" to="/capabilities">Capabilities</Link>
        <Link className="button button--secondary button--lg" to="/getting-started">Quick Setup</Link>
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
      <section className="tm-section"><div className="container"><h2>Documentation Areas</h2><div className="tm-grid">
        {features.map(([title,body,href]) => <article className="tm-card" key={title}><h3>{title}</h3><p>{body}</p><Link to={href}>Read more →</Link></article>)}
      </div></div></section>
    </main>
  </Layout>;
}

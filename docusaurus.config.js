// @ts-check
const config = {
  title: 'AdversaryGraph Documentation — CTI-to-Detection Workbench | 1200km',
  tagline: 'Self-hosted CTI-to-detection intelligence platform — map ATT&CK evidence, enrich IOC/CVE context, analyze malware, validate telemetry, and manage protected analyst workflows.',
  favicon: 'img/favicon.png',

  url: 'https://1200km.com',
  baseUrl: '/adversarygraph-docs/',
  scripts: [{src: 'https://1200km.com/assets/docusaurus-ecosystem.js?v=20260614-3', defer: true}],
  organizationName: 'anpa1200',
  projectName: 'adversarygraph-docs',

  headTags: [
    {
      tagName: 'script',
      attributes: { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-TMTG21RVHM' },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TMTG21RVHM');
      `,
    },
  ],

  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/anpa1200/adversarygraph-docs/edit/main/',
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  themeConfig: {
    image: 'img/adversarygraph-ai-og.png',
    metadata: [
      {
        name: 'keywords',
        content: 'cyber threat intelligence, MITRE ATT&CK, MITRE ATLAS, malware analysis, CTI-to-detection, detection engineering, threat hunting, TTP mapping, group similarity, campaign similarity, IOC enrichment, self-hosted CTI platform',
      },
    ],
    navbar: {
      title: 'AdversaryGraph',
      logo: { alt: 'AdversaryGraph AI', src: 'img/adversarygraph-ai-icon-192.png' },
      items: [
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs' },
        { to: '/platform-guide', label: 'Platform', position: 'left' },
        { to: '/commercial-trust', label: 'Trust', position: 'left' },
        { to: '/full-flow', label: 'Start', position: 'left' },
        { to: '/capabilities', label: 'Capabilities', position: 'left' },
        { to: '/authentication-and-users', label: 'Auth', position: 'left' },
        { to: '/malware-analysis', label: 'Malware', position: 'left' },
        { to: '/use-cases', label: 'Use Cases', position: 'left' },
        { to: '/api/overview', label: 'API', position: 'left' },
        {
          label: 'Projects',
          position: 'right',
          items: [
            { label: 'CTI Analyst Field Manual', href: 'https://1200km.com/cti-analyst-field-manual/' },
            { label: 'CTI as a Code', href: 'https://1200km.com/CTI_as_a_Code/' },
            { label: 'Operation Desert Hydra', href: 'https://1200km.com/operation-desert-hydra/' },
            { label: 'Customer-Driven AI CTI', href: 'https://1200km.com/customer-driven-ai-cti-project/' },
            { label: 'Israel Threat Actors CTI', href: 'https://1200km.com/israel-government-threat-actors-cti/' },
            { label: 'AI vs Defense', href: 'https://1200km.com/ai-vs-defense/' },
            { label: 'HexStrike AI', href: 'https://github.com/0x4m4/hexstrike-ai' },
          ],
        },
        { href: 'https://medium.com/@1200km', label: 'Medium', position: 'right' },
        { href: 'https://github.com/anpa1200/adversarygraph', label: 'GitHub', position: 'right' },
        { href: 'https://1200km.com/', label: 'Main', position: 'right', className: 'navbar-portfolio-btn' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Getting Started',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Platform Guide', to: '/platform-guide' },
            { label: 'Setup (10 min)', to: '/getting-started' },
            { label: 'Full Deployment Flow', to: '/full-flow' },
            { label: 'Core Workflow', to: '/ai-analysis/overview' },
          ],
        },
        {
          title: 'Features',
          items: [
            { label: 'Platform Capabilities', to: '/capabilities' },
            { label: 'Commercial Trust', to: '/commercial-trust' },
            { label: 'Architecture', to: '/architecture' },
            { label: 'Validation Examples', to: '/case-studies-validation' },
            { label: 'Navigator', to: '/navigator/overview' },
            { label: 'Compare Modes', to: '/compare/overview' },
            { label: 'Malware Analysis', to: '/malware-analysis' },
            { label: 'API Reference', to: '/api/overview' },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            { label: 'CTI Analyst Field Manual', href: 'https://1200km.com/cti-analyst-field-manual/' },
            { label: 'CTI as a Code', href: 'https://1200km.com/CTI_as_a_Code/' },
            { label: 'Operation Desert Hydra', href: 'https://1200km.com/operation-desert-hydra/' },
            { label: 'Customer-Driven AI CTI', href: 'https://1200km.com/customer-driven-ai-cti-project/' },
            { label: 'Israel Threat Actors CTI', href: 'https://1200km.com/israel-government-threat-actors-cti/' },
            { label: 'AI vs Defense', href: 'https://1200km.com/ai-vs-defense/' },
            { label: 'HexStrike AI', href: 'https://github.com/0x4m4/hexstrike-ai' },
          ],
        },
        {
          title: 'Author',
          items: [
            { label: 'Medium', href: 'https://medium.com/@1200km' },
            { label: 'GitHub', href: 'https://github.com/anpa1200' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrey-pautov/' },
          ],
        },
        {
          title: 'Compare',
          items: [
            { label: 'Comparison Overview', to: '/comparisons/overview' },
            { label: 'OpenCTI', to: '/comparisons/opencti' },
            { label: 'MISP', to: '/comparisons/misp' },
            { label: 'ATT&CK Navigator', to: '/comparisons/attack-navigator' },
            { label: 'Atomic Red Team', to: '/comparisons/atomic-red-team' },
            { label: 'Malware Sandboxes', to: '/comparisons/malware-sandboxes' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Andrey Pautov. AdversaryGraph AI — CTI-to-detection workbench and self-hosted ATT&CK analysis platform.`,
    },
    prism: {
      additionalLanguages: ['bash', 'json', 'python', 'yaml'],
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;

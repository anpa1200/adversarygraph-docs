---
id: roadmap
title: Roadmap
sidebar_position: 12
---

# What's Coming Next

ThreatMapper is functional and actively developed.

## Recently Shipped (v0.4.0)

**Group vs Group** — compare up to 6 APT groups simultaneously: N×N Jaccard overlap matrix, combined ATT&CK view with per-group coloured dots, sortable technique table. [See docs →](/compare/group-vs-group)

**Clickable TTP detail panels** — every technique ID in the UI (Navigator, APT Library, Compare, Group vs Group) opens a slide-in panel with description, detection guidance, Anomaly Detection Atlas links, ITDR Handbook links, and CTI Field Manual. [See docs →](/navigator/ttp-details)

**Ecosystem sidebar links** — one-click navigation to ThreatMapper Web Tool (no-Docker browser version), CTI Knowledge Base, and 1200km.com directly from the sidebar.

## On the Roadmap

**TAXII/STIX import** — accept threat intelligence directly from TAXII feeds (MISP, OpenCTI, commercial CTI platforms) so you can analyse structured intelligence without manual copy-paste.

**Team collaboration** — shared TTP layers with user namespacing; see who saved what and when.

**Detection coverage overlay** — import your existing SIGMA rule library and visualise which ATT&CK techniques you have coverage for vs which are blind spots. A "detection coverage" layer that you can compare against APT profiles.

**Automatic APT tracking** — when ATT&CK releases a new version that adds techniques to a group you're tracking, send a notification (webhook or email).

---

## Contributing

The project is open source under the MIT licence.

- **GitHub:** https://github.com/anpa1200/threatmapper
- **Issues and feature requests:** open an issue on GitHub
- **Medium article:** [ThreatMapper: I Built a Self-Hosted AI Threat Intelligence Platform](https://medium.com/@1200km/threatmapper-i-built-a-self-hosted-ai-threat-intelligence-platform-heres-how-to-use-it-0aa7673e6bd8)

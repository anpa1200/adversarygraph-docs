---
id: sigma-yara-rule-feeds
title: Sync Sigma And YARA Rule Feeds
sidebar_position: 17
---

# Sync Sigma And YARA Rule Feeds

**Analyst question:** Which detection rules mention the same malware, behavior, or indicators?

**Primary users:** Detection engineer, malware analyst, SOC content engineer, or CTI analyst.

## Scenario

An IOC or malware family is known, but the analyst needs to know whether public or private detection content already exists.

## Inputs

- Sigma feed URL/path
- YARA feed URL/path
- IOC or malware family names
- Optional TTP mappings

## Prerequisites

- Rule feed sources are configured
- Rule syntax is parsable enough for metadata extraction
- Source licenses are acceptable
- Detection feed sync is working

## Detailed Workflow

1. Add Sigma and YARA feed sources.
2. Run detection feed sync.
3. Open IOC or malware enrichment context.
4. Review matching rule names, tags, references, and descriptions.
5. Connect rule context to relevant TTPs where supported.
6. Use matches as detection research starting points, not final production rules.

## Analyst Decisions

- Is the rule relevant to this malware or just a broad signature?
- Can the rule run in the organization detection stack?
- Is the rule production-safe or research-only?
- Which ATT&CK technique does the rule support?

## Expected Outputs

- Matched Sigma/YARA rule context
- Detection research leads
- TTP support notes
- Rule source references

## Common Pitfalls

- Copying rules into production without testing
- Ignoring license restrictions
- Treating weak string matches as strong evidence
- Missing environment-specific tuning


## Handoff Guidance

Give detection engineers rule references, related IOCs, and ATT&CK context so they can create tested production content.

## Review Standard

- Keep evidence attached to every accepted finding.
- Separate observed behavior from enrichment and hypothesis.
- Use `needs-evidence` for plausible but unproven mappings.
- Treat actor similarity, IOC enrichment, and rule matches as analytical signals until corroborated.
- Export only reviewed results for customer, SOC, incident response, or detection engineering use.

## Related Platform Areas

- AI Analysis
- ATT&CK Navigator
- ATT&CK Group Library
- IOC Library
- Reference Sync
- Operations / Pipeline
- PDF, JSON, CSV, STIX, or Navigator export depending on workflow

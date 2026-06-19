---
id: custom-private-feeds
title: Import Custom Private Feeds
sidebar_position: 14
---

# Import Custom Private Feeds

**Analyst question:** How can internal or customer-specific IOCs be added without losing source separation?

**Primary users:** SOC platform engineer, CTI analyst, IR team, or customer environment owner.

## Scenario

The organization has private indicators from cases, honeypots, EDR exports, customer reports, or internal research. These should persist outside the container and remain clearly labeled.

## Inputs

- JSON, CSV, or TXT feed URL/path
- Feed label
- Indicator type hints if needed
- Optional actor or malware fields

## Prerequisites

- External persistent DB/data directory is configured
- Feed format is known
- Sensitive data handling is approved
- Source label naming standard exists

## Detailed Workflow

1. Open IOC Library or Reference Sync custom feed form.
2. Add feed label and source URL/path.
3. Choose JSON, CSV, or TXT format.
4. Sync the feed and review imported counts.
5. Filter by the new source label.
6. Enrich selected indicators if allowed.
7. Document retention and sharing restrictions.

## Analyst Decisions

- Is the feed public, customer-confidential, or internal-only?
- Should indicators be mapped to actors or remain unmapped?
- Are fields normalized enough for search?
- Can these IOCs be sent to VT/OTX enrichment?

## Expected Outputs

- Private IOC records
- Source-labeled feed import
- Searchable and filterable indicators
- Optional enrichment results

## Common Pitfalls

- No source label
- Accidentally enriching sensitive IOCs externally
- Losing private data during container rebuild due to wrong volume setup
- Importing malformed CSV without validation


## Handoff Guidance

Use custom feeds for internal hunting and customer-specific context while keeping them separate from public reference intelligence.

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

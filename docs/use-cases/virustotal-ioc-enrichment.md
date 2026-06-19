---
id: virustotal-ioc-enrichment
title: Enrich An IOC With VirusTotal
sidebar_position: 12
---

# Enrich An IOC With VirusTotal

**Analyst question:** What does VirusTotal know about this IP, domain, URL, or hash?

**Primary users:** SOC analyst, CTI analyst, malware analyst, or threat hunter.

## Scenario

An indicator appears in a report or alert. The analyst needs reputation, related context, possible malware/actor links, rule hits, and ATT&CK pivots.

## Inputs

- IP, domain, URL, MD5, SHA1, or SHA256
- VirusTotal API key
- Local actor and TTP database
- Optional IOC Library record

## Prerequisites

- VIRUSTOTAL_API_KEY is configured in the API container
- Indicator type is normalized correctly
- Network access to VirusTotal is available
- Rate limits are understood

## Detailed Workflow

1. Open VirusTotal Lookup or click Enrichment from IOC Library/actor IOC view.
2. Submit the normalized indicator.
3. Review detection ratio, reputation, tags, categories, and last analysis stats.
4. Review crowdsourced Sigma/YARA/rule context when available.
5. Inspect relationships such as communicating files, resolutions, downloaded files, or contacted domains.
6. Check whether tags, names, or relationships match local actors, malware families, or ATT&CK techniques.
7. Add relevant TTPs to My TTPs or show them on Navigator only after reviewing evidence.

## Analyst Decisions

- Is the indicator malicious, suspicious, benign, or unknown?
- Is the VT signal fresh or historical?
- Is an actor link direct or just a tag coincidence?
- Should the indicator be blocked, hunted, monitored, or used only as context?

## Expected Outputs

- Structured VT enrichment
- Related objects and tags
- Possible actor/malware/TTP links
- Matrix pivots and My TTPs actions

## Common Pitfalls

- Sending sensitive private IOCs to a third-party service without approval
- Treating vendor detections as full context
- Mapping tags to actors without evidence
- Ignoring VT rate limits or API errors


## Handoff Guidance

Use VT enrichment to decide next pivots: related files, domains, actor pages, relevant TTPs, and SOC watchlists.

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

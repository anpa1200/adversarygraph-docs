---
id: security
title: Security and Deployment
sidebar_position: 11
---

# Security and Deployment

## Self-Hosted Deployment Security

AdversaryGraph is self-hosted. Report content is sent only to the LLM provider configured by the operator. For fully private analysis, use a local or private LLM gateway. Reports, IOCs, feed records, enrichment state, and analyses may be stored in PostgreSQL.

Trusted-header authentication and `admin`, `analyst`, and `viewer` roles are supported when `AUTH_ENABLED=true`, but they depend on a correctly configured authenticating reverse proxy. Never expose trusted identity headers directly to clients.

## API Key Handling

- Store provider keys in `.env` environment variables and never commit `.env`.
- Restrict provider keys where possible and rotate exposed credentials.
- Protect the API and database; keys do not make an internet-facing deployment safe.

## Production Hardening Checklist

- Put the service behind VPN, SSO, OAuth proxy, or an access-controlled reverse proxy.
- Enable `AUTH_ENABLED=true` and configure trusted identity headers correctly.
- Use TLS and strong secrets.
- Do not expose PostgreSQL publicly.
- Do not expose the API directly without authentication.
- Restrict CORS and network access.
- Limit upload size and configure retention.
- Back up PostgreSQL and test restore procedures.
- Review application, proxy, and provider logs.
- Rotate LLM API keys.

AdversaryGraph is suitable for local labs, private analyst workstations, internal CTI workflows, and controlled self-hosted deployments. Internet-facing deployments require additional access control and hardening.

## Attack Simulation Boundary

Attack Simulation is for authorized lab validation only. Real telemetry comes from approved lab fixtures in the self-hosted Docker deployment. AI-generated telemetry is synthetic source-shaped data for SIEM parser, rule, and correlation exercises; it is not proof of exploit execution or production detection coverage.

Do not point simulations or SIEM forwarding at unauthorized systems. Store SIEM collector URLs only when they are approved for the lab, and keep bearer tokens, passwords, and custom header values out of screenshots and commits.

---
id: authentication-and-users
title: Authentication And Users
sidebar_position: 10
---

# Authentication And Users

AdversaryGraph v5.5 adds enterprise access controls for controlled self-hosted
deployments. The feature is intended for private analyst workspaces and internal
team deployments, not public multi-tenant SaaS exposure.

## Access Model

| Layer | What It Does |
|---|---|
| Native login | Username/password login with HttpOnly browser session cookie |
| API bearer token | Token returned after login for scripted API workflows |
| Expanded RBAC | Role defaults for viewer, analyst, threat intelligence, detection engineering, incident response, audit, security admin, service account, and admin users |
| Permission overrides | Per-user permissions can add explicit access on top of role defaults |
| Sessions | Session expiry, session inventory, self-service revoke-all, and admin session revocation |
| MFA workflow | Local account MFA setup, confirmation, and admin disable workflow support |
| Audit history | Login, failed login, MFA failure, logout, user changes, password reset, session revocation, feed sync, export, SIEM forwarding, and file upload events |
| SSO boundary | Trusted OIDC/SAML reverse-proxy mode through signed identity headers |

## Recommended Deployment Pattern

1. Keep the default deployment private while bootstrapping users.
2. Set `AUTH_ENABLED=true`.
3. Configure a strong temporary `AUTH_BOOTSTRAP_ADMIN_PASSWORD`.
4. Sign in as the bootstrap admin and create named admin/security accounts.
5. Clear the bootstrap password from the environment.
6. Create analyst, viewer, auditor, service-account, and workflow-specific users.
7. Put production deployments behind TLS and a trusted identity-aware reverse proxy.

## Roles

| Role | Typical Use |
|---|---|
| `viewer` | Read-only review of ATT&CK, CVE, IOC, reports, and reference views |
| `analyst` | Normal CTI and detection workflow access |
| `threat_intel` | Actor, campaign, report, IOC, and feed-focused work |
| `detection_engineer` | Coverage, Attack Simulation, SIEM validation, and detection backlog work |
| `incident_responder` | Investigation, IOC pivots, report generation, and incident handoff |
| `auditor` | Read-only operational review and audit evidence |
| `security_admin` | User/session/MFA/security administration without full platform ownership |
| `service_account` | Scripted API workflows and automation |
| `admin` | Full platform administration |

## Configuration

```env
AUTH_ENABLED=true
AUTH_DEFAULT_ROLE=viewer
AUTH_SESSION_MINUTES=720
AUTH_PASSWORD_MIN_LENGTH=12
AUTH_PASSWORD_REQUIRE_UPPER=false
AUTH_PASSWORD_REQUIRE_LOWER=false
AUTH_PASSWORD_REQUIRE_NUMBER=false
AUTH_PASSWORD_REQUIRE_SPECIAL=false
AUTH_MFA_ENABLED=false
AUTH_BOOTSTRAP_ADMIN_USERNAME=admin
AUTH_BOOTSTRAP_ADMIN_PASSWORD=
AUTH_SSO_MODE=proxy
PROXY_SECRET=
```

Password policy flags are intentionally explicit so an operator can match local
security policy. MFA workflow support is available for local users; production
SSO should normally enforce MFA at the identity provider.

## Trusted Proxy SSO

For OIDC/SAML deployments, use an authenticating reverse proxy in front of the
API and UI. The proxy must:

- terminate TLS;
- authenticate the user with the enterprise identity provider;
- strip all client-supplied identity headers;
- add trusted `X-Auth-User` and `X-Auth-Roles` headers;
- sign requests with `X-Internal-Proxy-Secret` matching `PROXY_SECRET`.

Do not expose the API directly to the internet with trusted-header auth enabled.

## Admin Panel

The Admin Panel exposes:

- user inventory;
- role and permission review;
- user creation and enable/disable workflow;
- password reset;
- MFA state and admin disable;
- active/recent sessions;
- revoke-all and user-session revocation;
- audit history.

## Security Boundary

Native auth is a practical access-control layer for self-hosted deployments. For
internet-facing production use, combine it with TLS, network restrictions,
secret rotation, backups, observability, and an identity-aware gateway. See
[Security](/security), [Commercial Trust](/commercial-trust), and
[Observability and Security Validation](/observability-security-validation).

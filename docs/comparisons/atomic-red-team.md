---
id: atomic-red-team
title: AdversaryGraph vs Atomic Red Team
---

# AdversaryGraph vs Atomic Red Team

Atomic Red Team provides small, focused tests mapped to MITRE ATT&CK techniques. It is useful for validating whether controls observe or block specific behaviors. AdversaryGraph focuses on planning, context, telemetry readiness, SIEM forwarding, source-shaped validation events, and CTI-to-detection handoff.

Official reference: https://github.com/redcanaryco/atomic-red-team

## Fit Comparison

| Need | Atomic Red Team | AdversaryGraph |
|---|---|---|
| Atomic behavior tests | Strong fit | Selected lab-backed and source-shaped scenarios |
| Endpoint command execution tests | Strong fit with approved runners | Not a general arbitrary command runner |
| CTI report-to-test planning | Requires separate process | Core workflow |
| Telemetry readiness matrix | Requires separate process | Built into technique review direction |
| SIEM event forwarding | Requires separate process | Supported |
| Attack-chain story and explain view | Not primary role | Supported |

## Use Together

Recommended operating model:

1. Use AdversaryGraph to identify priority TTPs from reports, actors, CVEs, assets, and malware findings.
2. Review telemetry requirements and detection feasibility.
3. Use Atomic Red Team or another approved execution framework for endpoint-level control validation where appropriate.
4. Bring the observed telemetry and detection outcomes back into AdversaryGraph as validation evidence.

## Boundary

AdversaryGraph Attack Simulation is defensive validation tooling. It is not a full endpoint emulation framework and should not be used as a generic command-execution system.

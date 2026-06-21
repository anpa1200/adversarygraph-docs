---
id: investigation-ransomware-intrusion
title: "Investigation: From Log To Report"
sidebar_position: 21
---

# Investigation: From Log To Report

**Level:** Complex Platform Workflow

**Published walkthrough:** [From Log to Report: Using AdversaryGraph to Turn Firewall and EDR Noise Into a CTI Investigation](https://medium.com/@1200km/from-log-to-report-using-adversarygraph-eff2e1d8f2cd)

![AdversaryGraph From Log to Report workflow overview](/img/from-log-to-report/01-hero-platform-overview.png)

## Real-Life Scenario

A SOC receives noisy firewall telemetry and EDR process logs from a suspicious workstation. The customer needs a defensible answer, not only a list of alerts: what happened, which indicators matter, which ATT&CK techniques are supported by evidence, which pivots deserve enrichment, and what can be handed to detection engineering.

This use case shows the full AdversaryGraph path from raw telemetry to a structured investigation and final report.

![Platform audience and workflow context](/img/from-log-to-report/02-platform-audience-infographic.png)

## Goal

Turn separate firewall and EDR logs into:

- extracted IOCs
- suspicious behavior rows with evidence
- ATT&CK TTP leads
- enriched IOC investigation results
- relationship graph pivots
- an investigation TTP layer
- actor-overlap hypotheses
- an AI investigation summary
- a final report

![Investigation goal and evidence flow](/img/from-log-to-report/03-investigation-goal-infographic.png)

## End-To-End Flow

![Animated full workflow from logs to report](/img/from-log-to-report/04-full-flow-presentation.gif)

1. Create a new investigation workspace.
2. Analyze firewall logs in **AI Analysis -> Log / PCAP** mode.
3. Add the firewall analysis result to the investigation.
4. Analyze EDR logs as a separate **Log / PCAP** run.
5. Add the EDR analysis result to the same investigation.
6. Review extracted IOCs, suspicious behaviors, and TTP leads.
7. Investigate high-value IOCs in **IOC Investigation**.
8. Review Tier 1 / Tier 2 / Tier 3 pivots and the relationship graph.
9. Add useful IOC investigation results to the same investigation.
10. Send the investigation TTP layer to the ATT&CK matrix.
11. Compare the TTP layer with threat actors.
12. Generate an AI summary.
13. Build and export the final report.

## Step 1: Create The Investigation

Start with an investigation workspace before analyzing logs. This keeps every later result tied to the same case.

![Create the investigation workspace first](/img/from-log-to-report/05-create-new-investigation.png)

The investigation will collect:

- log analysis results
- report analysis results
- suspicious behavior rows
- TTPs
- IOCs
- IOC investigation findings
- actor comparison results
- AI summaries
- final reports

## Step 2: Analyze Firewall Logs

Open **AI Analysis**, choose **Log / PCAP**, and upload or paste the firewall logs only. No manual prompt is needed; AdversaryGraph uses its built-in log-analysis system prompt.

![Analyze firewall logs in Log / PCAP mode](/img/from-log-to-report/06-analyze-firewall-logs.gif)

The expected output is a structured first-pass analysis: suspicious destinations, repeated C2-like connections, extracted domains/IPs, possible TTPs, and evidence snippets.

## Step 3: Analyze EDR Logs Separately

Run the EDR logs as a second analysis source. Keeping sources separate makes the evidence easier to audit later.

![Analyze EDR logs as a separate source](/img/from-log-to-report/07-analyze-edr-logs.gif)

The EDR result should identify suspicious process chains, command-line behavior, staging paths, persistence leads, and extracted hashes or file names.

## Step 4: Review Extracted IOCs

AdversaryGraph extracts IOCs from each source and keeps the source context attached.

![Firewall IOC extraction](/img/from-log-to-report/08-extracted-iocs-firewall.png)

![EDR IOC extraction](/img/from-log-to-report/09-extracted-iocs-edr.png)

## Step 5: Review Suspicious Behaviors

Suspicious behavior rows explain what was observed and why it matters. They are useful for both CTI notes and detection engineering.

![Suspicious behavior evidence table](/img/from-log-to-report/10-suspicious-behaviors.png)

Examples include Office-to-script execution, PowerShell download behavior, discovery commands, suspicious staging paths, signed-binary proxy execution, and persistence indicators.

## Step 6: Review ATT&CK Technique Leads

Technique leads remain analyst-review items. A TTP should be accepted only when the source evidence supports the ATT&CK behavior.

![ATT&CK technique leads from the log evidence](/img/from-log-to-report/11-attack-technique-leads.png)

## Step 7: Investigate High-Value IOCs

Open **IOC Investigation** for the strongest extracted indicator.

![IOC Investigation input for a high-value indicator](/img/from-log-to-report/12-ioc-investigation-input.png)

Review the verdict, source coverage, timeline, reputation signals, source conflicts, actor leads, and ATT&CK leads.

![IOC Investigation verdict and source coverage](/img/from-log-to-report/13-ioc-investigation-summary.png)

## Step 8: Pivot Through The Relationship Graph

The graph is used for source-backed pivots. Click nodes to review connected domains, IPs, URLs, hashes, malware leads, actor leads, collections, and source context.

![IOC relationship graph with connected pivots](/img/from-log-to-report/14-ioc-investigation-graph.png)

Treat graph links as investigation leads until corroborated by stronger evidence.

## Step 9: Add IOC Investigation Results

Add useful IOC investigation output back into the active investigation.

![Add IOC Investigation results into the case](/img/from-log-to-report/15-add-ioc-result-to-investigation.png)

This keeps the IOC verdict, pivots, TTP leads, and source evidence in the same workspace as the original log analysis.

## Step 10: Review The Investigation Workspace

The investigation workspace merges all accepted evidence.

![Investigation workspace with merged logs, behaviors, TTPs, and IOCs](/img/from-log-to-report/16-investigation-workspace.png)

Use this view to check whether the case has enough evidence for a report, whether more IOC pivots are needed, and whether weak TTPs should be removed or marked for review.

## Step 11: Send TTPs To The Matrix

Create a Navigator-like layer from investigation TTPs and send it to the ATT&CK matrix.

![Investigation TTP layer on the ATT&CK matrix](/img/from-log-to-report/17-ttp-layer-on-matrix.png)

This helps show coverage across tactics and makes the behavior easier to compare with known actor profiles.

## Step 12: Compare With Threat Actors

Use overlap comparison as a hypothesis-generation tool, not attribution.

![Actor overlap comparison saved to the case](/img/from-log-to-report/18-actor-comparison.png)

Shared TTPs should be reviewed for distinctiveness. Common techniques such as PowerShell, Valid Accounts, Phishing, or Data Encrypted for Impact carry less weight unless paired with stronger evidence.

## Step 13: Generate AI Summary And Report

Generate an AI investigation summary from the saved evidence.

![AI investigation summary saved as evidence](/img/from-log-to-report/19-ai-investigation-summary.png)

Then build the final report.

![Final report preview](/img/from-log-to-report/20-final-report-preview.png)

![Animated report generation workflow](/img/from-log-to-report/21-report-generation-workflow.gif)

## Expected Result

The final output is a structured investigation package with source-tagged logs, extracted IOCs, reviewed suspicious behaviors, ATT&CK TTP leads, enrichment evidence, graph pivots, matrix context, actor-overlap hypotheses, and a report that can be exported as PDF, Markdown, or TXT.

## Review Notes

- Keep firewall and EDR logs as separate analysis runs.
- Add each useful result to the same investigation.
- Do not treat actor overlap as attribution.
- Keep source tags attached to each IOC and TTP.
- Discount high-frequency techniques unless the surrounding evidence is distinctive.
- Use the final report as a reviewed handoff artifact, not as raw LLM output.

## Platform Areas Used

- Investigation
- AI Analysis -> Log / PCAP
- IOC Investigation
- IOC Library
- Relationship Graph
- Navigator matrix
- Group comparison
- Report builder
- PDF / Markdown / TXT exports

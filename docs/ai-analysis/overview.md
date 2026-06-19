---
id: overview
title: AI Analysis
sidebar_position: 1
---

# AI Analysis

This is the core feature. Upload a threat report — or paste raw text — and AdversaryGraph extracts every ATT&CK technique the LLM identifies, with evidence snippets and confidence scores, in real time.

## Supported Input Formats

| Format | Notes |
|---|---|
| `.pdf` | Text extraction via PyMuPDF |
| `.docx` | Text extraction via python-docx |
| `.txt` | Plain text, raw paste |
| Paste area | Raw text, Slack messages, SIEM alerts, vendor advisories |

Maximum file size: 50 MB.

## Upload Your Report

Navigate to **Analyze** in the sidebar. You'll see:

![AI Analysis — upload form with provider and domain selection](/img/screenshots/15_upload_report.png)

1. Select your **LLM Provider** (Claude / OpenAI / Gemini / MiniMax / Local)
2. Select the **Domain** — `enterprise-attack` for most corporate IR work
3. Optionally enter a **name** for this session (shows in the Reports library later)
4. Paste text or upload a file
5. Click **Analyse with AI**

You'll immediately see the LLM's response streaming token by token, just like ChatGPT — you can read the thinking as it happens.

![LLM streaming response — tokens appearing in real time](/img/screenshots/16_upload_report2.png)

## Reading the Results

When the stream completes, three tabs appear:

![Results overview — three tabs with full analysis output](/img/screenshots/17_results_techniques.png)

### Techniques Tab

The core output. Each row shows:

![Techniques tab — extracted ATT&CK techniques with evidence and confidence scores](/img/screenshots/18_results_apt_matches.png)

| Field | Example |
|---|---|
| ATT&CK ID | T1059.001 |
| Name | PowerShell |
| Tactic | Execution |
| Confidence | 92% |
| Evidence | *"executed a base64-encoded PowerShell payload"* |

The **evidence** field is a direct quote or paraphrase from your source document — trace every mapping back to its origin in the text.

:::warning Reviewer-assigned analytic confidence
Model confidence is extraction confidence, not analytic confidence. Analytic confidence must be assigned by the reviewer after validating source evidence, procedure descriptions, ATT&CK definitions, and telemetry requirements.

LLM mappings may contain false positives, false negatives, or ambiguous technique assignments. Treat the output as a structured first pass, not a final intelligence judgment.
:::

- **High confidence (≥ 80%)** — the text explicitly described the behaviour
- **Medium (50–79%)** — behaviour was clearly implied
- **Low (< 50%)** — inferred; validate manually before acting on it

### Group Similarity Leads Tab

Computed locally using Jaccard similarity between your extracted techniques and every named ATT&CK group's known TTP set. The top 10 are shown with:

![Group similarity leads ranked by Jaccard TTP overlap](/img/screenshots/19_results_tab3.png)

- Similarity score (0–100%)
- Shared technique count
- List of the overlapping technique IDs

A match above 25–30% is worth investigating. Use it as a lead for further research, not definitive attribution.

### Raw Response Tab

The LLM's full JSON output. Useful for debugging when the model outputs something unexpected.

![Raw Response tab — full LLM JSON output for inspection and debugging](/img/screenshots/20_results_tab4.png)

## Inject into Navigator

Click **→ Inject into Navigator** to push all extracted techniques into your live Navigator layer. You can then:

![Inject into Navigator button — pushes all extracted techniques to the heatmap](/img/screenshots/21_inject_navigator.png)

- See the techniques highlighted on the full ATT&CK matrix
- Overlay a group profile to visualise the behavioural overlap
- Export as ATT&CK Navigator JSON or PDF

## Download PDF Report

Click **↓ PDF report** in the results summary bar to download a formatted multi-page report including the cover page, executive summary, techniques table, group-similarity leads, and tactic coverage breakdown. The report is generated on the backend and returned as a direct browser download.

Previous analysis sessions can be re-downloaded at any time from [Compare → Reports (DB 2)](/compare/reports).

---

Next: [AI Chat Assistant →](/ai-analysis/chat-assistant)

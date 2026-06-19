---
id: getting-started
title: Setup (10 Minutes)
sidebar_position: 2
---

# Setup (10 Minutes)

## Prerequisites

- Docker + Docker Compose
- An API key for at least one of: Anthropic (Claude), OpenAI, Google Gemini

## Step 1: Clone and configure

```bash
git clone https://github.com/anpa1200/adversarygraph.git
cd adversarygraph
cp .env.example .env
```

:::warning
You must create `.env` before running `docker compose up`. Without it the container starts with empty API keys and AI Analysis returns 500.
:::

Open `.env` and add your keys. You only need one:

```env
ANTHROPIC_API_KEY=sk-ant-...
# OPENAI_API_KEY=sk-...
# GEMINI_API_KEY=AIza...

DB_PASS=choose_a_strong_password
```

For local/private LLM analysis, use an OpenAI-compatible endpoint:

```env
LOCAL_LLM_BASE_URL=http://host.docker.internal:11434/v1
LOCAL_LLM_API_KEY=local
LOCAL_LLM_MODEL=llama3.1:8b
```

Optional enrichment platform keys:

```env
# abuse.ch ThreatFox recent IOC sync
THREATFOX_AUTH_KEY=your_abuse_ch_auth_key
AUTO_THREATFOX_SYNC_ON_STARTUP=true
AUTO_THREATFOX_SYNC_DAYS=7

# AlienVault OTX actor-attributed pulse enrichment
OTX_API_KEY=your_otx_key

# VirusTotal on-demand IOC reputation and relationship lookup
VIRUSTOTAL_API_KEY=your_virustotal_key

# Daily dynamic DB refresh schedule in UTC
DYNAMIC_DB_SYNC_HOUR=3
DYNAMIC_DB_SYNC_MINUTE=30
DYNAMIC_DB_IOC_SYNC_DAYS=7
```

These enrichment keys are optional. MITRE ATT&CK / ATLAS reference sync and the built-in public MISP Galaxy metadata sync do not require API keys. MISP JSON exports, STIX/TAXII collection URLs, custom JSON/CSV/TXT feeds, Sigma/YARA feeds, and sandbox behavior feeds are connected later from the UI/API as source URLs or tokens.

:::warning
Never commit a filled `.env` file. For team deployments, inject secrets through your deployment platform or secret manager.
:::

If you want a faster first start and only need Enterprise ATT&CK, set:

```env
ATTCK_DOMAINS=enterprise-attack
```

This downloads ~35 MB instead of ~105 MB.

## Step 2: Start

```bash
docker compose up
```

The first start downloads and ingests ATT&CK data automatically. Watch progress:

```bash
docker compose logs -f api
```

You'll see something like:

![docker compose up — first start with ATT&CK ingestion in progress](/img/screenshots/12_setup_start.png)

```
Parsing enterprise-attack-19.1.json ...
  Parsed: current tactics, techniques, groups, campaigns, and relationships
Finished ingesting enterprise-attack v19.1
INFO:     Application startup complete.
```

This takes 5–15 minutes depending on your network speed. Subsequent startups are instant — data is cached in the PostgreSQL volume.

## Step 3: Open

Frontend: http://localhost:3000

![AdversaryGraph frontend — Navigator ready after ingestion](/img/screenshots/13_setup_open.png)

API docs (Swagger UI): http://localhost:8000/docs

![AdversaryGraph API docs — Swagger UI for headless access](/img/screenshots/14_setup_open2.png)

## What's Ready

Once the ingestion log shows `Application startup complete`, you have:

- The currently ingested MITRE ATT&CK Enterprise release; counts depend on the release
- The ATT&CK Navigator ready for technique selection
- The AI Analysis endpoint ready (as long as at least one API key is set)
- Jaccard comparison against all ATT&CK groups and campaigns

## Troubleshooting

**AI Analysis returns 500** — check that your API key is set correctly in `.env` and the container was restarted after you added it.

**Navigator shows no data** — the ingestion is still running. Check `docker compose logs -f api` and wait for the `Finished ingesting` message.

**Port 3000 is taken** — edit `docker-compose.yml` and change the host port mapping for the frontend service.

---

Next: [Core Workflow: AI Analysis →](/ai-analysis/overview)

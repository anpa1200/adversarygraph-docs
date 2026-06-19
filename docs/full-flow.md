---
id: full-flow
title: "Get Started: Full Deployment Flow"
sidebar_position: 2
---

# Get Started: Full Deployment Flow

This page covers the complete first-run path for the self-hosted AdversaryGraph platform: clone, configure, start Docker, verify health, synchronize references, connect feeds, and run the first analysis.

## 1. Clone The Repository

```bash
git clone https://github.com/anpa1200/adversarygraph.git
cd adversarygraph
```

Check that Docker Compose is available:

```bash
docker compose version
```

## 2. Create `.env`

```bash
cp .env.example .env
```

Edit `.env` before the first `docker compose up`.

Minimum required settings:

```env
DB_NAME=threatmapper
DB_USER=tm_user
DB_PASS=choose_a_strong_password

ATTCK_DOMAINS=enterprise-attack,mobile-attack,ics-attack,atlas
LOG_LEVEL=info
AUTH_ENABLED=false
AUTH_DEFAULT_ROLE=admin
```

Add at least one AI provider if you want report analysis:

```env
ANTHROPIC_API_KEY=
OPENAI_API_KEY=
GEMINI_API_KEY=
```

For a local or private OpenAI-compatible LLM gateway:

```env
LOCAL_LLM_BASE_URL=http://host.docker.internal:11434/v1
LOCAL_LLM_API_KEY=local
LOCAL_LLM_MODEL=llama3.1:8b
```

## 3. Add Optional Enrichment Keys

These keys are not required for initial ATT&CK/ATLAS sync, but they unlock IOC enrichment and reputation workflows.

```env
# abuse.ch ThreatFox recent IOC sync
THREATFOX_AUTH_KEY=
AUTO_THREATFOX_SYNC_ON_STARTUP=true
AUTO_THREATFOX_SYNC_DAYS=7

# AlienVault OTX actor-attributed pulse enrichment
OTX_API_KEY=

# VirusTotal on-demand IOC reputation and relationship lookup
VIRUSTOTAL_API_KEY=

# Daily dynamic DB refresh schedule in UTC
DYNAMIC_DB_SYNC_HOUR=3
DYNAMIC_DB_SYNC_MINUTE=30
DYNAMIC_DB_IOC_SYNC_DAYS=7
```

Keep filled `.env` files private. Do not commit secrets.

## 4. Start The Stack

```bash
docker compose up -d --build
```

Watch startup logs:

```bash
docker compose logs -f api
```

The first startup downloads and ingests MITRE ATT&CK/ATLAS references. This can take several minutes.

## 5. Verify Services

Open the UI:

```text
http://localhost:3000
```

Check API health:

```bash
curl http://localhost:8000/api/health
```

Open API docs:

```text
http://localhost:8000/docs
```

Run the built-in selftest:

```bash
docker compose run --rm selftest
```

The UI also runs selftest checks and shows clear error popups with recheck and troubleshooting actions.

## 6. Confirm The External Database

The default persistent PostgreSQL directory is created outside the containers:

```text
./data/postgres
```

This database stores private analyses, custom IOCs, feed metadata, synced references, report history, and local operator data. Keep it during rebuilds and upgrades.

If you change database credentials after the data directory already exists, apply them to the existing PostgreSQL role:

```bash
./scripts/apply-db-env-creds.sh
docker compose up -d --force-recreate api worker beat frontend
```

## 7. Synchronize ATT&CK And ATLAS References

Open:

```text
http://localhost:3000/feeds
```

Run the reference synchronization for the domains you need:

- Enterprise ATT&CK
- Mobile ATT&CK
- ICS ATT&CK
- MITRE ATLAS

The sync imports matrices, tactics, techniques, sub-techniques, groups, campaigns, relationships, references, and metadata.

You can also trigger sync through the API:

```bash
curl -X POST http://localhost:8000/api/sync/trigger \
  -H 'Content-Type: application/json' \
  -d '{"domains":["enterprise-attack","mobile-attack","ics-attack","atlas"],"force":false}'
```

## 8. Synchronize Actor And Sector Metadata

From **Feeds Management**, run public metadata syncs:

- MISP Galaxy actor and sector context
- Malpedia malware-family and actor evidence
- dynamic actor-sector relevance data
- MITRE campaign and group updates

This populates Sector Intelligence, actor pages, aliases, activity windows, campaign context, and relevance explanations.

## 9. Synchronize IOC Sources

From **Feeds Management** or **IOC Library**, connect and sync IOC sources:

- ThreatFox recent IOC feed
- AlienVault OTX pulses
- custom JSON/CSV/TXT IOC feeds
- MISP JSON exports
- STIX 2.1 bundles
- TAXII 2.1 collection object URLs

After feed sync, choose whether to run IOC-to-TTP enrichment for new unmapped IOCs.

Recommended priority model:

1. strict report/source evidence
2. enrichment-platform metadata
3. optional AI fallback

## 10. Connect Detection And Behavior Feeds

Use **Feeds Management** for rule and behavior context:

- Sigma rule feeds
- YARA rule feeds
- sandbox behavior feeds
- malware behavior reports
- custom internal rule repositories

These sources help connect observables and malware behavior to ATT&CK techniques and detection opportunities.

## 11. Run The First IOC Check

Open:

```text
http://localhost:3000/virustotal
```

Search an IP, domain, URL, MD5, SHA1, or SHA256.

The enrichment view can show:

- reputation verdicts
- detection ratio
- last analysis stats
- tags
- related malware/family context
- extracted ATT&CK candidates
- possible actor links
- actions to add relevant TTPs to My TTPs
- actions to show relevant TTPs on the matrix

## 12. Run The First Report Analysis

Open:

```text
http://localhost:3000/analysis
```

Use paste, PDF, DOCX, or TXT input.

Choose a configured provider:

- Claude
- OpenAI
- Gemini
- local OpenAI-compatible LLM

Review every mapping. Accept only mappings supported by behavior evidence.

## 13. Move Findings To The Matrix

After report analysis or IOC enrichment:

1. Add relevant TTPs to **My TTPs**.
2. Open **Navigator**.
3. Review matrix coverage.
4. Overlay actor or campaign profiles.
5. Export ATT&CK Navigator JSON if needed.

## 14. Compare Against Actors, Campaigns, And Reports

Use Compare workflows to answer:

- Which groups share the strongest TTP overlap?
- Which campaigns look behaviorally similar?
- Which previous internal report overlaps this incident?
- Which overlap is generic commodity behavior?
- Which techniques are detection gaps?

Similarity is an investigation lead, not attribution proof.

## 15. Export Outputs

Export analyst-ready deliverables:

- PDF reports
- JSON analysis output
- ATT&CK Navigator layers
- STIX 2.1 bundles
- CSV IOC exports
- detection backlog material

## 16. Operate The Platform

Regular operator workflow:

```bash
git pull
docker compose up -d --build
docker compose run --rm selftest
```

Use:

- **Troubleshooting** for deployment errors
- **Feeds Management** for sync status and feed actions
- **IOC Library** for observables and enrichment
- **Compare → Reports** for previous analysis sessions
- **API docs** for automation

## First-Day Checklist

- `.env` exists and contains correct DB credentials.
- At least one LLM provider or local LLM endpoint is configured.
- Docker stack is running.
- API health returns OK.
- Selftest passes.
- ATT&CK/ATLAS references are synced.
- ThreatFox/OTX/VirusTotal keys are configured if needed.
- Custom IOC, MISP, STIX/TAXII, Sigma, YARA, and sandbox feeds are connected.
- First IOC check works.
- First report analysis works.
- My TTPs can be shown on Navigator.
- PDF and Navigator exports work.

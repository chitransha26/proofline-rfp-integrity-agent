# Proofline — RFP Response Integrity Agent

[Live interactive demo](https://proofline-rfp.ch4.chatgpt.site) · Built by [Chitransha Mishra](https://github.com/chitransha26)

> Catch the claim your RFP copilot would confidently submit.

Proofline is a portfolio-grade pre-submission control layer that determines whether every material RFP claim is supported, applicable, current, and approved before it becomes a buyer-facing commitment.

## Why this product

Most AI RFP tools optimize first-draft speed. Proofline addresses a different risk: a fluent, cited answer can still be wrong for the proposed entity, product tier, deployment model, territory, contract, or effective date.

Proofline treats every response as a set of atomic commercial claims. Each claim receives an inspectable admissibility decision and retains the exact evidence span, applicable scope, accountable authority, and policy version used to reach it.

![Proofline product preview](public/og.png)

It is intentionally not another “upload a document and generate prose” demo. The product models the defensible chain from requirement to evidence to atomic claim to human approval to export.

## Demo workflow

1. Load the fictional, industry-neutral Northstar Group enterprise vendor RFP.
2. Decompose completed responses into atomic commercial claims.
3. Review admissibility decisions and deterministic submission gates.
4. Inspect the exact evidence span and six scope dimensions carried by it.
5. Apply qualified language only when evidence supports a narrower statement.
6. Route exceptions to the accountable authority—not merely a past contributor.
7. Export a reproducible submission manifest.

## Deliberately planted integrity traps

- Expired SOC 2 evidence
- Conflicting 30-day and 90-day retention policies
- SSO available only on the Enterprise plan
- Incomplete cross-border processing evidence across the United States, Canada, and Mexico
- Missing accessibility applicability determination
- Insurance evidence with incomplete territorial and currency scope
- Customer-specific 99.99% SLA presented beside the standard 99.9% SLA
- Five requirements embedded in one question
- A later RFP amendment changing the deadline
- An indirect prompt injection hidden in an appendix

## Claim-admissibility model

Proofline does not present an opaque model-generated confidence percentage. It assigns inspectable, claim-level decisions:

- **Admissible** — the precise statement is grounded in current evidence for the response context.
- **Qualify** — evidence supports a narrower statement, which Proofline proposes explicitly.
- **Approval required** — applicability or a commercial exception belongs to a named authority.
- **Blocked** — the proposed claim is unsupported, expired, prohibited, or wrong-scope.

Negative assurance is intentional: Proofline exports its audit manifest but does not label a response submission-ready while material gate conditions remain.

## North American applicability model

Proofline separates core evidence from configurable applicability profiles:

- United States federal requirements plus the applicable states and territories
- Canadian federal requirements plus the applicable provinces and territories
- Mexican federal requirements
- Cross-border processing, subprocessors, transfer safeguards, currencies, governing law, and territorial scope
- Optional sector overlays for regulated industries and public procurement

The default demo uses a North America profile with no sector overlay. Proofline measures requirement and evidence coverage; it does not represent that software can make a legal-compliance determination. Questions of legal applicability are routed to counsel or the designated procurement owner.

## Evaluation metrics for a production implementation

- Requirement extraction recall
- Atomic sub-requirement coverage
- Evidence precision and scope correctness
- Unsupported-claim detection precision and recall
- Wrong-scope detection across entity, product, deployment, territory, contract, and date
- Conflict-detection precision and recall
- Correct abstention and false-block rates
- SME-routing accuracy
- Spreadsheet round-trip fidelity
- Submission-gate recall and reproducibility
- Time to approved draft

## Product architecture for the next phase

The current deployment is an interactive deterministic portfolio demo—not a live AI service. A production implementation would add isolated document ingestion, permission-aware retrieval, evidence-span extraction, metadata-filtered scope evaluation, claim-level entailment checks, deterministic policy gates, immutable audit events, and format-preserving Word/Excel export.

## Local development

```bash
npm install
npm run dev
```

Build for production with `npm run build`.

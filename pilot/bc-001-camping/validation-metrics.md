# BC-001 Validation Metrics

## Purpose

This file defines how early landingpage tests for BC-001 should be evaluated.

## Core metrics

| Metric | Meaning | Early signal |
|---|---|---|
| CTA click rate | Interest in the offer | 3 percent or higher |
| Email opt-in rate | Stronger intent | 1 percent or higher |
| Scroll depth | Message relevance | 50 percent or more |
| Lead magnet conversion | Problem interest | compare against product CTA |
| Qualitative feedback | Problem clarity | recurring comments or questions |

## Decision levels

### Continue

Continue if at least two metrics show a positive signal and the qualitative feedback confirms a concrete problem.

### Iterate

Iterate if users engage with the topic but not with the product promise. In that case, change positioning before changing the product.

### Pause

Pause if traffic quality is acceptable but CTA and opt-in both stay weak.

### Reject

Reject only if repeated tests fail across different angles and target groups.

## First test recommendation

Start with LP-001 Kabelstation.

Reason:

- clear problem
- clear use situation
- strong link to content
- less generic than storage products
- good fit for a system brand

## Minimum tracking setup

- page views
- CTA clicks
- email opt-ins
- scroll depth
- traffic source
- device type
- search term or ad group

## Review cadence

Do not decide from one tiny data point. Evaluate after a minimally meaningful sample and document the decision in the decision log.

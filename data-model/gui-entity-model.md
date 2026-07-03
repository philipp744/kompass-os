# GUI Entity Model

## Purpose
Define entities so that they remain readable in a future web interface.

## Rule
Every entity needs two layers:

1. Stable ID for machines
2. Human label for users

Example:
- ID: PRD-008
- Label: Kabelstation

## Required GUI fields
Every visible entity should provide:

| Field | Purpose |
|---|---|
| id | stable reference |
| label | readable name |
| type | entity type |
| status | visible state |
| priority | sorting and dashboard use |
| summary | short human explanation |
| related_ids | links to connected entities |
| next_action | what should happen next |

## Core GUI views

### Market view
Shows markets, scores and active business cases.

### Business case view
Shows target groups, problems, products, landingpages and decisions.

### Product view
Shows solved problems, status, score, risks and validation path.

### Landingpage view
Shows hypothesis, target group, CTA, metrics and result.

### Experiment view
Shows traffic, events, cost, outcome and next action.

## Status display
Use clear states:

- idea
- hypothesis
- research
- prototype
- testing
- validated
- paused
- rejected

## GUI principle
Users should never need to understand internal IDs to use the system. IDs are shown only as secondary references.
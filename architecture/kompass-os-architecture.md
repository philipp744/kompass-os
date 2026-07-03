# Kompass OS Architecture

## Layer 1 - Knowledge
Stores structured business knowledge.

Core entities:
- Markets
- Business Cases
- Target Groups
- Situations
- Problems
- Product Families
- Products
- Keywords
- Landing Pages
- Sources
- Experiments
- Decisions

Output: knowledge graph.

## Layer 2 - Decision
Transforms knowledge into priorities.

Components:
- scoring
- evidence weighting
- opportunity score
- risk score
- decision log

Output: ranked business cases.

## Layer 3 - Validation
Executes market validation.

Flow:
Idea -> Landing Page -> Traffic -> Behaviour -> Decision

Stores:
- CTR
- Opt-ins
- Cost
- Feedback
- Outcome

## Layer 4 - Execution
Production assets.

- prototypes
- shop
- SEO
- content
- suppliers
- branding

## Layer 5 - Learning
Feeds results back into the knowledge graph.

Every experiment updates:
- hypothesis
- score
- decision
- next action

## Principle
Knowledge flows upward.
Evidence flows downward.
Nothing bypasses the validation layer.
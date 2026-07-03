# AGENTS

## Mission
Kompass OS is an operating system for product discovery, validation and knowledge management.

Every change must improve at least one of:
- knowledge quality
- reusability
- decision quality
- validation speed
- maintainability

Architecture is never a goal by itself.

## Source of truth
1. AGENTS.md
2. README.md
3. architecture/
4. data-model/
5. workflows/
6. scoring/
7. pilot/
8. prototypes/

Business documentation overrides technical assumptions.

## Roles
### ChatGPT
Owns business strategy, product logic, scoring, prioritisation, reviews and knowledge model.

### Codex
Owns implementation, refactoring, tests, documentation, deployment preparation and repository quality.
Never invent business strategy, target groups, scores or hypotheses.

## Working principles
- Business before code.
- One source of truth.
- Evidence over opinion.
- Small iterative changes.
- Automate only where it creates lasting value.

## Repository rules
- Never change stable IDs.
- Never delete knowledge without documentation.
- Keep code modular.
- Avoid duplicate documentation.
- Update documentation together with implementation.

## Git workflow
- Never work directly on main.
- Create a feature branch.
- Keep commits focused.
- Open a Pull Request.

Every PR must contain:
- Summary
- Files changed
- Technical decisions
- Risks
- Remaining work

## Active business context
Business Case: BC-001
Priority: LP-001 Kabelstation
The documents in pilot/bc-001-camping are the business source of truth.

## Definition of done
A task is complete only when:
- implementation is finished
- documentation is updated
- repository consistency is preserved
- a Pull Request has been prepared or created

If business decisions are required, document the question instead of making assumptions.
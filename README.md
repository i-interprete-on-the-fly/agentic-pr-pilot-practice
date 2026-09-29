# agentic-pr-pilot-practice

Tiny TypeScript string utilities (`slugify`, `truncate`, `titleCase`, `safeEqual`).

The library itself is not the point. This repo is the target of an **agentic PR
pilot built in n8n**: labelled GitHub issues are picked up by an AI agent, the
drafted change is checked by tests and lint in a sandboxed container, a human
approves it, and only then does a draft pull request with an evidence summary
get opened. Pull requests from the pilot stay open for human review.

## Working on it

```sh
npm ci
npm test      # Jest
npm run lint  # ESLint (typescript-eslint)
npm run build # tsc
```

CI runs the same checks on every pull request (`.github/workflows/ci.yml`),
independent of the pilot's own gate.

## Filing work for the agent

Open an issue with the label `agent-ok` and exactly one category label:

| Label          | Allowed work                               |
| -------------- | ------------------------------------------ |
| `cat:docs`     | README, doc comments                       |
| `cat:tests`    | new or improved tests under `test/`        |
| `cat:refactor` | small refactors in `src/` (not `src/auth`) |

Issues that touch sensitive areas (`src/auth/`, `.github/`, `package.json`,
`package-lock.json`) are routed to a human and never reach the agent.

## License

MIT

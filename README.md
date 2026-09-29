# agentic-pr-pilot-practice

Tiny TypeScript string utilities (`slugify`, `truncate`, `titleCase`, `safeEqual`).

The library itself is not the point. This repo is the target of an **agentic PR
pilot built in n8n**: labelled GitHub issues are picked up by an AI agent, the
drafted change is checked by tests and lint in a sandboxed container, a human
approves it, and only then does a draft pull request with an evidence summary
get opened. Pull requests from the pilot stay open for human review.

## Usage

All four functions are exported from `src/index.ts`.

```ts
import { slugify, truncate, titleCase, safeEqual } from './src';
```

### `slugify(input)`

Turns text into a URL-safe slug: accents are stripped, the text is lowercased,
and every run of characters other than `a-z` and `0-9` becomes a single `-`.
Leading and trailing dashes are removed.

```ts
slugify('Hello, World!'); // 'hello-world'
```

### `truncate(input, maxLength, suffix = '…')`

Shortens text to at most `maxLength` characters. When the text is cut, the
`suffix` is appended and counts toward `maxLength`. Text that already fits is
returned unchanged. A negative `maxLength` throws a `RangeError`.

```ts
truncate('The quick brown fox', 10); // 'The quick…'
```

### `titleCase(input)`

Capitalizes each word and lowercases the rest of it. Short connector words
(`a`, `an`, `and`, `as`, `at`, `but`, `by`, `for`, `in`, `of`, `on`, `or`,
`the`, `to`) stay lowercase unless they are the first word. Runs of whitespace
collapse to a single space.

```ts
titleCase('the lord of the rings'); // 'The Lord of the Rings'
```

### `safeEqual(a, b)`

Compares two strings in constant time with respect to their contents, so the
comparison doesn't leak secrets through timing. It returns `true` only when the
strings are identical.

```ts
safeEqual('s3cret', 's3cret'); // true
safeEqual('s3cret', 'guess'); // false
```

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

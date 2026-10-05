# flook-spike-big

A larger, zero-dependency target for the Flook agent-reliability spike. Three
substantial modules (`case`, `truncate`, `sanitize`) are intentionally
unimplemented — each is its own "issue", in its own source file so parallel
agents don't conflict.

```bash
npm test                                # full suite
node --test test/case.test.js           # a single issue's tests
```

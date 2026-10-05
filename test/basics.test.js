import { test } from "node:test";
import assert from "node:assert/strict";
import { paginate, slugify, sumBy } from "../src/basics.js";

test("slugify normalizes a title into a slug", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
});

test("paginate returns the requested page", () => {
  assert.deepEqual(paginate([1, 2, 3, 4, 5, 6, 7], 2, 3), [4, 5, 6]);
});

test("sumBy sums a derived value", () => {
  assert.equal(sumBy([{ n: 1 }, { n: 2 }, { n: 3 }], (x) => x.n), 6);
});

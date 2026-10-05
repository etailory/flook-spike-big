import { test } from "node:test";
import assert from "node:assert/strict";
import { middleTruncate, truncate, truncateWords } from "../src/truncate.js";

test("truncate cuts a long string and adds an ellipsis", () => {
  assert.equal(truncate("hello world", 8), "hello w…");
  assert.equal(truncate("hello", 8), "hello");
});

test("truncateWords keeps the first n words", () => {
  assert.equal(truncateWords("the quick brown fox", 2), "the quick");
  assert.equal(truncateWords("the quick brown fox", 5), "the quick brown fox");
});

test("middleTruncate keeps head and tail with an ellipsis", () => {
  assert.equal(middleTruncate("abcdefghij", 7), "abc…hij");
  assert.equal(middleTruncate("hello", 7), "hello");
  assert.equal(middleTruncate("", 7), "");
});

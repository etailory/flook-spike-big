import { test } from "node:test";
import assert from "node:assert/strict";
import { escapeHtml, normalizeWhitespace, stripHtml } from "../src/sanitize.js";

test("normalizeWhitespace collapses runs of whitespace", () => {
  assert.equal(normalizeWhitespace("  hello   world  "), "hello world");
  assert.equal(normalizeWhitespace("a\t b \n c"), "a b c");
});

test("escapeHtml escapes HTML-significant characters", () => {
  assert.equal(escapeHtml("<>&"), "&lt;&gt;&amp;");
  assert.equal(escapeHtml(`a"b`), "a&quot;b");
  assert.equal(escapeHtml("a'b"), "a&#39;b");
});

test("stripHtml removes tags and keeps text", () => {
  assert.equal(stripHtml("<p>Hello <b>world</b></p>"), "Hello world");
  assert.equal(stripHtml("no tags"), "no tags");
});

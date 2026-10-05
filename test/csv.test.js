import { test } from "node:test";
import assert from "node:assert/strict";
import { parseCsv, serializeCsv } from "../src/csv.js";

test("parseCsv parses a single row", () => {
  assert.deepEqual(parseCsv("a,b,c"), [["a", "b", "c"]]);
});

test("parseCsv parses multiple rows", () => {
  assert.deepEqual(parseCsv("a,b\n1,2\n3,4"), [["a", "b"], ["1", "2"], ["3", "4"]]);
});

test("parseCsv handles quoted fields containing commas", () => {
  assert.deepEqual(parseCsv('"a,b",c'), [["a,b", "c"]]);
});

test("parseCsv handles escaped quotes", () => {
  assert.deepEqual(parseCsv('"a""b"'), [['a"b']]);
});

test("parseCsv handles newlines inside quoted fields", () => {
  assert.deepEqual(parseCsv('"line1\nline2",x'), [["line1\nline2", "x"]]);
});

test("parseCsv ignores a trailing newline", () => {
  assert.deepEqual(parseCsv("a,b\n"), [["a", "b"]]);
});

test("parseCsv returns an empty array for empty input", () => {
  assert.deepEqual(parseCsv(""), []);
});

test("parseCsv keeps empty fields", () => {
  assert.deepEqual(parseCsv("a,,c"), [["a", "", "c"]]);
});

test("parseCsv handles Windows line endings", () => {
  assert.deepEqual(parseCsv("a,b\r\nc,d"), [["a", "b"], ["c", "d"]]);
});

test("serializeCsv writes a single row", () => {
  assert.equal(serializeCsv([["a", "b", "c"]]), "a,b,c");
});

test("serializeCsv writes multiple rows", () => {
  assert.equal(serializeCsv([["a", "b"], ["c", "d"]]), "a,b\nc,d");
});

test("serializeCsv quotes fields containing commas", () => {
  assert.equal(serializeCsv([["a,b", "c"]]), '"a,b",c');
});

test("serializeCsv escapes double quotes", () => {
  assert.equal(serializeCsv([['a"b']]), '"a""b"');
});

test("round trip preserves data", () => {
  const rows = [
    ["name", "bio"],
    ["a,b", 'he said "hi"'],
  ];
  assert.deepEqual(parseCsv(serializeCsv(rows)), rows);
});

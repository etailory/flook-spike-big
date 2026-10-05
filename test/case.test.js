import { test } from "node:test";
import assert from "node:assert/strict";
import { camelCase, kebabCase, snakeCase } from "../src/case.js";

test("camelCase joins words into lower camelCase", () => {
  assert.equal(camelCase("hello world"), "helloWorld");
  assert.equal(camelCase("hello world foo"), "helloWorldFoo");
});

test("snakeCase joins words with underscores", () => {
  assert.equal(snakeCase("Hello World"), "hello_world");
  assert.equal(snakeCase("hello world foo"), "hello_world_foo");
});

test("kebabCase joins words with hyphens", () => {
  assert.equal(kebabCase("Hello World"), "hello-world");
  assert.equal(kebabCase("hello world foo"), "hello-world-foo");
});

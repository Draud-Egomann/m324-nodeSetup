import { strict as assert } from "assert";
import { sum } from "./index.js";

describe("sum", () => {
  it("should return 3 for 1 + 2", () => {
    assert.equal(sum(1, 2), 3);
  });

  it("should return 1.1 for 0.5 + 0.6", () => {
    assert.equal(sum(0.5, 0.6), 1.1);
  });

  it("should return 0 for -1 + 1", () => {
    assert.equal(sum(-1, 1), 0);
  });

  it("should return -3 for -1 + -2", () => {
    assert.equal(sum(-1, -2), -3);
  });
});
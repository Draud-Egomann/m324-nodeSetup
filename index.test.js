import { strict as assert } from "assert";
import { sum } from "./index.js";

describe("sum", () => {
  it("should return 3 for 1 + 2", () => {
    assert.equal(sum(1, 2), 3);
  });
});
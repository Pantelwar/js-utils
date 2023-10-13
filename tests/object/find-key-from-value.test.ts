import { findKeyFromValue } from "../../src";

describe("Find key from value", () => {
  it("should not find key if object is empty", () => {
    expect(findKeyFromValue({}, 1)).toBeUndefined();
  });

  it("should find key if object is not empty", () => {
    expect(findKeyFromValue({ a: 1 }, 1)).toEqual("a");
  });

  it("should find the last key if there are multiple keys with same value", () => {
    expect(findKeyFromValue({ a: 1, b: 1 }, 1)).toEqual("b");
  });

  it("should not find key if value is not found", () => {
    expect(findKeyFromValue({ a: 1, b: 2 }, 3)).toBeUndefined();
  });
});

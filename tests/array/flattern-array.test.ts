import { flattenArray } from "../../src";

describe("Flatten Array", () => {
  it("flattens an empty array", () => {
    expect(flattenArray([])).toEqual([]);
  });

  it("flattens an array", () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("flattens a 2d array", () => {
    expect(flattenArray([1, [1, 2], 3])).toEqual([1, 1, 2, 3]);
  });

  it("flattens a 3d array", () => {
    expect(flattenArray([1, [1, [1, 2]], 3])).toEqual([1, 1, 1, 2, 3]);
  });

  it("flattens an array of objects", () => {
    expect(flattenArray([{ a: 1 }, { b: 2 }, { c: 3 }])).toEqual([
      { a: 1 },
      { b: 2 },
      { c: 3 },
    ]);
  });

  it("flattens a 2d array of objects", () => {
    expect(flattenArray([1, [{ a: 1 }, { b: 2 }], 3])).toEqual([
      1,
      { a: 1 },
      { b: 2 },
      3,
    ]);
  });
});

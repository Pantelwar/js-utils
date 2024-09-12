/**
 * @jest-environment jsdom
 */

import { convertToFD } from "../../src";

describe("Convert object to form data", () => {
  it("should convert a non object to form data", () => {
    expect(convertToFD(undefined)).toEqual(new FormData());
    expect(convertToFD(null)).toEqual(new FormData());
  });

  it("should convert an empty object to form data", () => {
    const formData = convertToFD({});
    expect(formData).toEqual(new FormData());
  });

  it("should convert an object to form data", () => {
    const formData = convertToFD({ a: 1 });
    expect(formData.get("a")).toEqual("1");
  });

  it("should convert a complex object to form data", () => {
    const formData = convertToFD({
      a: { this: "is an object" },
      b: 10,
      c: "string",
      d: true,
      e: null,
      f: undefined,
      g: new Blob(["test"], { type: "text/plain" }),
      h: [1, 2, 3],
      i: [{ a: 1 }, { b: 2 }],
      j: [
        new Blob(["test"], { type: "text/plain" }),
        new Blob(["test"], { type: "text/plain" }),
      ],
    });
    expect(formData.get("a")).toBe(JSON.stringify({ this: "is an object" }));
    expect(formData.get("b")).toEqual("10");
    expect(formData.get("c")).toEqual("string");
    expect(formData.get("d")).toEqual("true");
    expect(formData.has("e")).toEqual(false);
    expect(formData.has("f")).toEqual(false);
    const addedG = formData.get("g");
    expect(addedG).toHaveProperty("type", "text/plain");
    expect(addedG).toHaveProperty("size", 4);
    expect(formData.get("h")).toEqual("[1,2,3]");
    expect(formData.get("i")).toEqual(JSON.stringify([{ a: 1 }, { b: 2 }]));
    const addedFiles = formData.getAll("j");
    expect(addedFiles).toHaveLength(2);
  });
});

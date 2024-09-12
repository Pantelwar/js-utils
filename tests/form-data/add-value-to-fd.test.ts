/**
 * @jest-environment jsdom
 */

import { addValueToFD } from "../../src";

describe("Add value to form data", () => {
  it("should add a string to form data", () => {
    const formData = new FormData();
    addValueToFD(formData, "key", "value");
    expect(formData.get("key")).toEqual("value");
  });

  it("should add a number to form data", () => {
    const formData = new FormData();
    addValueToFD(formData, "key", 1);
    expect(formData.get("key")).toEqual("1");
  });

  it("should add a boolean to form data", () => {
    const formData = new FormData();
    addValueToFD(formData, "key", true);
    expect(formData.get("key")).toEqual("true");
  });

  it("should add an object to form data", () => {
    const formData = new FormData();
    addValueToFD(formData, "key", { a: 1 });
    expect(formData.get("key")).toEqual(JSON.stringify({ a: 1 }));
  });

  it("should add an array to form data", () => {
    const formData = new FormData();
    addValueToFD(formData, "key", [1, 2, 3]);
    expect(formData.get("key")).toEqual("[1,2,3]");
  });

  it("should add a file to form data", () => {
    const formData = new FormData();
    addValueToFD(formData, "key", new Blob(["test"], { type: "text/plain" }));
    const addedBlob = formData.get("key");
    expect(addedBlob).toHaveProperty("type", "text/plain");
    expect(addedBlob).toHaveProperty("name", "blob");
    expect(addedBlob).toHaveProperty("size", 4);
  });

  it("should add an array of files to form data", () => {
    const formData = new FormData();
    addValueToFD(formData, "key", [
      new Blob(["test"], { type: "text/plain" }),
      new Blob(["test"], { type: "text/plain" }),
    ]);
    const addedBlobs = formData.getAll("key");
    expect(addedBlobs).toHaveLength(2);
    expect(addedBlobs[0]).toHaveProperty("type", "text/plain");
    expect(addedBlobs[0]).toHaveProperty("name", "blob");
    expect(addedBlobs[0]).toHaveProperty("size", 4);
    expect(addedBlobs[1]).toHaveProperty("type", "text/plain");
    expect(addedBlobs[1]).toHaveProperty("name", "blob");
    expect(addedBlobs[1]).toHaveProperty("size", 4);
  });
});

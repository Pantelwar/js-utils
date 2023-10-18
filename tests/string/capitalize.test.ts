import { capitalize } from "../../src";

describe("Capitalize", () => {
  it("capitalizes an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("capitalizes a lowercase string", () => {
    expect(capitalize("test")).toBe("Test");
  });

  it("capitalizes an uppercase string", () => {
    expect(capitalize("TEST")).toBe("Test");
  });

  it("capitalizes a string with numbers", () => {
    expect(capitalize("test@123")).toBe("Test@123");
  });

  it("capitalizes a string with special characters", () => {
    expect(capitalize("~!@#$%^&*()_+`1234567890-={}|[]:\";'<>?,./")).toBe(
      "~!@#$%^&*()_+`1234567890-={}|[]:\";'<>?,./"
    );
  });

  it("capitalizes a sentence", () => {
    expect(capitalize("the quick brown fox")).toBe("The quick brown fox");
  });
});

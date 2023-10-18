import { paramCase } from "../../src";

describe("Param Case", () => {
  it("converts an empty string", () => {
    expect(paramCase("")).toBe("");
  });

  it("converts a simple string", () => {
    expect(paramCase("this is a string")).toBe("this-is-a-string");
  });

  it("converts a string with whitespaces", () => {
    expect(paramCase("    this has    whitespaces    ")).toBe(
      "this-has-whitespaces"
    );
  });

  it("should remove all special characters", () => {
    expect(paramCase("this has $p3ci@l ch@r@ct$r$")).toBe(
      "this-has-p3cil-chrctr"
    );
  });

  it("should remove all emoijs", () => {
    expect(paramCase("🥳 Welcome to the party!!! Have fun 🎉")).toBe(
      "welcome-to-the-party-have-fun"
    );
  });
});

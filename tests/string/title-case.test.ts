import { titleCase } from "../../src";

describe("Title Case", () => {
  it("converts an empty string", () => {
    expect(titleCase("")).toBe("");
  });

  it("converts a simple string", () => {
    expect(titleCase("this is a string")).toBe("This Is A String");
  });

  it("converts a string with whitespaces", () => {
    expect(titleCase("    this has    whitespaces    ")).toBe(
      "This Has Whitespaces"
    );
  });

  it("converts a string with special characters", () => {
    expect(titleCase("this has $p3ci@l ch@r@ct$r$")).toBe(
      "This Has $p3ci@l Ch@r@ct$r$"
    );
  });

  it("converts a string with emojis", () => {
    expect(titleCase("🥳  Welcome to the party  !!!  Have fun 🎉")).toBe(
      "🥳 Welcome To The Party !!! Have Fun 🎉"
    );
  });
});

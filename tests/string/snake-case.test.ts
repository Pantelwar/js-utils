import { snakeCase } from "../../src";

describe("Snake Case", () => {
  it("converts an empty string", () => {
    expect(snakeCase("")).toBe("");
  });

  it("converts a simple string", () => {
    expect(snakeCase("this is a string")).toBe("this_is_a_string");
  });

  it("converts a string with whitespaces", () => {
    expect(snakeCase("    this has    whitespaces    ")).toBe(
      "this_has_whitespaces"
    );
  });

  it("should remove all special characters", () => {
    expect(snakeCase("this has $p3ci@l ch@r@ct$r$")).toBe(
      "this_has_p3cil_chrctr"
    );
  });

  it("should remove all emoijs", () => {
    expect(snakeCase("🥳 Welcome to the party!!! Have fun 🎉")).toBe(
      "welcome_to_the_party_have_fun"
    );
  });
});

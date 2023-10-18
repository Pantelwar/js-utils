/**
 * @jest-environment jsdom
 */

import { hasEmoji } from "../../src";

describe("Has emoij", () => {
  it("can check an empty string", () => {
    expect(hasEmoji("")).toBe(false);
  });

  it("can check a normal string", () => {
    expect(hasEmoji("This is a sentence")).toBe(false);
  });

  it("can check a string with emoji", () => {
    expect(hasEmoji("This is a sentence with emoji 😃")).toBe(true);
  });

  it("can check a string with special characters", () => {
    expect(
      hasEmoji("This is a sentence with special characters {}|:.,;'[]0819247")
    ).toBe(false);
  });

  it("can check a string with special characters and emoji", () => {
    expect(
      hasEmoji(
        "This is a sentence with special characters {}|:.,;'[]0819247 and emoji 😃"
      )
    ).toBe(true);
  });
});

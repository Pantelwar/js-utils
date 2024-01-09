/**
 * @jest-environment jsdom
 */

import { checkNumber } from "../../src";

describe("Check Number", () => {
  it("can check an empty string", () => {
    expect(checkNumber("")).toBe(true);
  });

  it("can check a string with alphabets", () => {
    expect(checkNumber("asdf")).toBe(false);
  });

  it("can check a string with digits", () => {
    expect(checkNumber("123")).toBe(true);
  });

  it("can check a string with alphabets and digits", () => {
    expect(checkNumber("asdf123")).toBe(false);
  });

  it("can check a string with digits and alphabets", () => {
    expect(checkNumber("123asdf")).toBe(false);
  });
});

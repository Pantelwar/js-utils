import { convertListcases } from "../../src";

describe("Convert listcases", () => {
  it("converts positive numbers to list case", () => {
    expect(convertListcases(1)).toBe("a");
    expect(convertListcases(2)).toBe("b");
    expect(convertListcases(3)).toBe("c");
    expect(convertListcases(4)).toBe("d");
    expect(convertListcases(5)).toBe("e");
    expect(convertListcases(6)).toBe("f");
    expect(convertListcases(7)).toBe("g");
    expect(convertListcases(8)).toBe("h");
    expect(convertListcases(9)).toBe("i");
    expect(convertListcases(10)).toBe("j");
    expect(convertListcases(11)).toBe("k");
    expect(convertListcases(12)).toBe("l");
    expect(convertListcases(13)).toBe("m");
    expect(convertListcases(14)).toBe("n");
    expect(convertListcases(15)).toBe("o");
    expect(convertListcases(16)).toBe("p");
    expect(convertListcases(17)).toBe("q");
    expect(convertListcases(18)).toBe("r");
    expect(convertListcases(19)).toBe("s");
    expect(convertListcases(20)).toBe("t");
    expect(convertListcases(21)).toBe("u");
    expect(convertListcases(22)).toBe("v");
    expect(convertListcases(23)).toBe("w");
    expect(convertListcases(24)).toBe("x");
    expect(convertListcases(25)).toBe("y");
    expect(convertListcases(26)).toBe("z");
  });

  it("converts negative number to list case", () => {
    expect(convertListcases(-1)).toBe("a");
    expect(convertListcases(-2)).toBe("b");
    expect(convertListcases(-3)).toBe("c");
    expect(convertListcases(-4)).toBe("d");
    expect(convertListcases(-5)).toBe("e");
    expect(convertListcases(-6)).toBe("f");
    expect(convertListcases(-7)).toBe("g");
    expect(convertListcases(-8)).toBe("h");
    expect(convertListcases(-9)).toBe("i");
    expect(convertListcases(-10)).toBe("j");
    expect(convertListcases(-11)).toBe("k");
    expect(convertListcases(-12)).toBe("l");
    expect(convertListcases(-13)).toBe("m");
    expect(convertListcases(-14)).toBe("n");
    expect(convertListcases(-15)).toBe("o");
    expect(convertListcases(-16)).toBe("p");
    expect(convertListcases(-17)).toBe("q");
    expect(convertListcases(-18)).toBe("r");
    expect(convertListcases(-19)).toBe("s");
    expect(convertListcases(-20)).toBe("t");
    expect(convertListcases(-21)).toBe("u");
    expect(convertListcases(-22)).toBe("v");
    expect(convertListcases(-23)).toBe("w");
    expect(convertListcases(-24)).toBe("x");
    expect(convertListcases(-25)).toBe("y");
    expect(convertListcases(-26)).toBe("z");
  });

  it("converts overflowing positive numbers to list case", () => {
    expect(convertListcases(26 + 1)).toBe("a");
    expect(convertListcases(26 + 2)).toBe("b");
    expect(convertListcases(26 + 3)).toBe("c");
    expect(convertListcases(26 + 4)).toBe("d");
    expect(convertListcases(26 + 5)).toBe("e");
    expect(convertListcases(26 + 6)).toBe("f");
    expect(convertListcases(26 + 7)).toBe("g");
    expect(convertListcases(26 + 8)).toBe("h");
    expect(convertListcases(26 + 9)).toBe("i");
    expect(convertListcases(26 + 10)).toBe("j");
    expect(convertListcases(26 + 11)).toBe("k");
    expect(convertListcases(26 + 12)).toBe("l");
    expect(convertListcases(26 + 13)).toBe("m");
    expect(convertListcases(26 + 14)).toBe("n");
    expect(convertListcases(26 + 15)).toBe("o");
    expect(convertListcases(26 + 16)).toBe("p");
    expect(convertListcases(26 + 17)).toBe("q");
    expect(convertListcases(26 + 18)).toBe("r");
    expect(convertListcases(26 + 19)).toBe("s");
    expect(convertListcases(26 + 20)).toBe("t");
    expect(convertListcases(26 + 21)).toBe("u");
    expect(convertListcases(26 + 22)).toBe("v");
    expect(convertListcases(26 + 23)).toBe("w");
    expect(convertListcases(26 + 24)).toBe("x");
    expect(convertListcases(26 + 25)).toBe("y");
    expect(convertListcases(26 + 26)).toBe("z");
  });

  it("converts overflowing negative number to list case", () => {
    expect(convertListcases(-26 - 1)).toBe("a");
    expect(convertListcases(-26 - 2)).toBe("b");
    expect(convertListcases(-26 - 3)).toBe("c");
    expect(convertListcases(-26 - 4)).toBe("d");
    expect(convertListcases(-26 - 5)).toBe("e");
    expect(convertListcases(-26 - 6)).toBe("f");
    expect(convertListcases(-26 - 7)).toBe("g");
    expect(convertListcases(-26 - 8)).toBe("h");
    expect(convertListcases(-26 - 9)).toBe("i");
    expect(convertListcases(-26 - 10)).toBe("j");
    expect(convertListcases(-26 - 11)).toBe("k");
    expect(convertListcases(-26 - 12)).toBe("l");
    expect(convertListcases(-26 - 13)).toBe("m");
    expect(convertListcases(-26 - 14)).toBe("n");
    expect(convertListcases(-26 - 15)).toBe("o");
    expect(convertListcases(-26 - 16)).toBe("p");
    expect(convertListcases(-26 - 17)).toBe("q");
    expect(convertListcases(-26 - 18)).toBe("r");
    expect(convertListcases(-26 - 19)).toBe("s");
    expect(convertListcases(-26 - 20)).toBe("t");
    expect(convertListcases(-26 - 21)).toBe("u");
    expect(convertListcases(-26 - 22)).toBe("v");
    expect(convertListcases(-26 - 23)).toBe("w");
    expect(convertListcases(-26 - 24)).toBe("x");
    expect(convertListcases(-26 - 25)).toBe("y");
    expect(convertListcases(-26 - 26)).toBe("z");
  });
});

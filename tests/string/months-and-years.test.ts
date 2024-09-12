import { monthsAndYears } from "../../src/string/months-and-years";

describe("Months and years", () => {
  it("converts a 0 month", () => {
    expect(monthsAndYears(0)).toBe("");
  });

  it("converts 1 month", () => {
    expect(monthsAndYears(1)).toBe("1 month");
  });

  it("converts 2 months", () => {
    expect(monthsAndYears(2)).toBe("2 months");
  });

  it("converts 1 year", () => {
    expect(monthsAndYears(12)).toBe("1 year");
  });

  it("converts 1 year and 2 months", () => {
    expect(monthsAndYears(14)).toBe("1 year and 2 months");
  });

  it("converts 2 years", () => {
    expect(monthsAndYears(24)).toBe("2 years");
  });

  it("converts 37 year and 7 months", () => {
    expect(monthsAndYears(37 * 12 + 7)).toBe("37 years and 7 months");
  });
});

import { getCsv } from "../../src";

describe("Get Csv", () => {
  it("converts an small json array to a csv string", () => {
    const csv = getCsv([
      { name: "John", age: 32 },
      { name: "Jane", age: 29 },
    ]);
    expect(csv).toBe(`name,age
John,32
Jane,29`);
  });

  it("converts an empty array to a csv string", () => {
    const csv = getCsv([]);
    expect(csv).toBe("");
  });

  it("converts a json object containing an array to a csv string", () => {
    const csv = getCsv([
      { name: "John", fruits: ["apple", "orange"] },
      { name: "Jane", fruits: ["mango"] },
    ]);
    expect(csv).toBe(`name,fruits
John,apple,orange
Jane,mango`);
  });
});

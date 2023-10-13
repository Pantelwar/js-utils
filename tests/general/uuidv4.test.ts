import { uuidv4 } from "../../src";

describe("UUIDv4", () => {
  it("should generate 1000 unique UUIDs in under 100 ms", () => {
    const uuids = new Set<string>();

    const start = Date.now();
    for (let i = 0; i < 1000; i++) {
      uuids.add(uuidv4());
    }
    const end = Date.now();

    expect(end - start).toBeLessThan(100);

    expect(uuids.size).toEqual(1000);
  });
});

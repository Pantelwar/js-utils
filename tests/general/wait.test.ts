import { wait } from "../../src";

describe("Wait", () => {
  it("should not wait for less than the provided time", async () => {
    const start = Date.now();
    return wait(1000).then(() => {
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(1000);
    });
  });
});

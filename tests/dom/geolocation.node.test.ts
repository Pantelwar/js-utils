import { getGeolocation } from "../../src";

describe("Get geolocation", () => {
  it("does not get geolocation", async () => {
    let [err, coords]: Awaited<ReturnType<typeof getGeolocation>> = [
      null,
      null,
    ];
    try {
      [err, coords] = await getGeolocation();
    } catch (error) {
      err = error as Awaited<ReturnType<typeof getGeolocation>>[0];
    }
    expect(err).toBeNull();
    expect(coords).toBeNull();
  });
});

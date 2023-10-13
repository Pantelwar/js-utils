/**
 * @jest-environment jsdom
 */
import { getGeolocation } from "../../src";
import { dummyCoords } from "../data";
import { mockGeolocation } from "../setupTests";

describe("Get geolocation", () => {
  it("gets geolocation", async () => {
    mockGeolocation();
    const [err, coords] = await getGeolocation();
    expect(err).toBeNull();
    expect(coords).toBe(dummyCoords);
  });
});

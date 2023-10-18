/**
 * @jest-environment jsdom
 */

import { getBase64, getFile } from "../../src";
import base64 from "./base64.json";

describe("Get Base 64", () => {
  it("converts an empty file to base 64 string", async () => {
    const file = new File([], "test.txt", { type: "plain/text" });
    expect(await getBase64(file)).toBe("data:plain/text;base64,");
  });

  it("converts a valid file to base 64 string", async () => {
    const file = await getFile(base64.str, "image.jpg", "image/jpeg");
    if (file === null) return;
    expect(await getBase64(file)).toBe(base64.str);
  });
});

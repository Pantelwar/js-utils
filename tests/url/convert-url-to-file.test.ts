/**
 * @jest-environment jsdom
 */
import { convertUrlToFile } from "../../src";

describe("Convert URL to File", () => {
  it("convert an image to a file", async () => {
    const url =
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    const file = await convertUrlToFile(url);
    expect(file).toHaveProperty("type", "image/png");
  });

  it("converts an invalid url to null", async () => {
    const url =
      "google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp";

    const file = await convertUrlToFile(url);
    expect(file).toBeNull();
  });
});

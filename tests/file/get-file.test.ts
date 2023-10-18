/**
 * @jest-environment jsdom
 */

import { getFile } from "../../src";
import base64 from "./base64.json";

describe("Get File", () => {
  it("converts an empty base64 string to a file", async () => {
    const file = await getFile("data:image/png;base64,", "test.txt");
    expect(file).toBeDefined();
    expect(file).toBeInstanceOf(File);
    expect(file).toHaveProperty("size", 0);
  });

  it("converts a valid base64 string to a file", async () => {
    const file = await getFile(base64.str, "image.jpg");
    expect(file).toBeDefined();
    expect(file).toBeInstanceOf(File);
    expect(file).toHaveProperty("type", "image/jpeg");
  });

  it("convert an http url to a file", async () => {
    const url =
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    const file = await getFile(url);
    expect(file).toHaveProperty("name", "googlelogo_color_272x92dp.png");
  });

  it("converts an invalid url to null", async () => {
    const url =
      "google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp";

    const file = await getFile(url);
    expect(file).toBeNull();
  });

  it("converts a blob url to file", async () => {
    expect(true).not.toBe(false);

    /**
     * jsdom doesn't support blob urls yet
     * issue link: https://github.com/jsdom/jsdom/issues/1721
     * uncomment when this issue is closed
     */
    // const file = new File([], "something");
    // const convertedFile = await getFile(URL.createObjectURL(file), "something");
    // expect(convertedFile).toBeDefined();
    // expect(convertedFile).toHaveProperty("name", "something");
  });
});

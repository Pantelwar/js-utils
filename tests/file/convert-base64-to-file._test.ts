import { convertBase64ToFile } from "../../src";

describe("Convert Base64 to File", () => {
  it("converts an empty string to a file", async () => {
    const file = await convertBase64ToFile(
      "data:image/png;base64,",
      "test.txt"
    );
    expect(file).toBeDefined();
    expect(file).toBeInstanceOf(File);
  });
});

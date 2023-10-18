/**
 * Converts a file to a base64 string representation.
 *
 * @param {File} file - The file to be converted.
 * @return {string} The base64 string representation of the file.
 */
export function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () =>
      typeof reader.result === "string" ? resolve(reader.result) : reject();
  });
}

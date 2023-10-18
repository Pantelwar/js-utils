import { identifyFilename } from "../url/identify-filename";

/**
 * Converts a base64 string to a File object and saves it with the specified file name.
 *
 * @param {string} url - The base64 string, blob url or http url of the file.
 * @param {string} [fileName] - The name to save the file as.
 * @param {string} [mimeType] - The mime type of the file
 * @return {Promise<File>} The converted File object.
 */
export async function getFile(
  url: string,
  fileName?: string,
  mimeType?: string
): Promise<File | null> {
  if (url.startsWith("data:")) {
    const arr = url.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[arr.length - 1]);

    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    const file = new File([u8arr], fileName || "file", {
      type: mime || mimeType,
    });
    return Promise.resolve(file);
  }

  if (!fileName) {
    fileName = identifyFilename(url);
  }

  return fetch(url)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], fileName || "file", { type: mimeType }))
    .catch(() => null);
}

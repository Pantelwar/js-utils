/**
 * Converts a base64 string to a File object and saves it with the specified file name.
 *
 * @param {string} base64 - The base64 string to convert.
 * @param {string} fileName - The name to save the file as.
 * @return {Promise<File>} The converted File object.
 */
export declare function convertBase64ToFile(base64: string, fileName: string): Promise<File>;

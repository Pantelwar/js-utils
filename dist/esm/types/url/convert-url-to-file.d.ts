export type PreviewFile = File & {
    preview: string;
};
/**
 * Converts a given URL to a File object asynchronously.
 *
 * @param {string} url - The URL to convert to a File object.
 * @return {Promise<PreviewFile | null>} A Promise that resolves to a File object if the conversion is successful, or null if there is an error.
 */
export declare const convertUrlToFile: (url: string) => Promise<PreviewFile | null>;

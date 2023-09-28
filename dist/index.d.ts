/**
 * Flattens an array of elements by recursively traversing the array and concatenating
 * any nested arrays found.
 *
 * @param {T[]} list - The array to be flattened.
 * @param {string} [key='children'] - The key used to identify nested arrays in each item.
 * @return {T[]} - The flattened array.
 */
declare function flattenArray<T>(list: T[], key?: string): T[];

type InputValue = Date | string | number | null | undefined;
declare function fDate(date: InputValue, newFormat?: string): string;
declare function pDate(date: string, newFormat?: string): Date | null;
declare function fDateTime(date: InputValue, newFormat?: string): string;
declare function fTimestamp(date: InputValue): number | "";
declare function fToNow(date: InputValue): string;

declare const getGeolocation: () => Promise<[
    GeolocationPositionError | null,
    GeolocationCoordinates | null
]>;

/**
 * Converts a base64 string to a File object and saves it with the specified file name.
 *
 * @param {string} base64 - The base64 string to convert.
 * @param {string} fileName - The name to save the file as.
 * @return {Promise<File>} The converted File object.
 */
declare function convertBase64ToFile(base64: string, fileName: string): Promise<File>;

/**
 * Converts a file to a base64 string representation.
 *
 * @param {File} file - The file to be converted.
 * @return {string} The base64 string representation of the file.
 */
declare function convertFileToBase64(file: File): string;

declare function addValueToFD(formData: FormData, key: string, value: any): void;

declare function convertToFD(data: any): FormData;

type FormikLike = {
    getFieldMeta(name: string): {
        touched: boolean;
        error: string;
    };
};
type ReturnType = {
    error: boolean;
    helperText: string;
};
/**
 * Retrieves the error properties for a given form field in a Formik-like object.
 *
 * @param {FormikLike} formik - The Formik-like object containing the form state.
 * @param {string} name - The name of the form field.
 * @return {ReturnType} An object containing the error and helperText properties.
 */
declare function getErrorProps(formik: FormikLike, name: string): ReturnType;

/**
 * Generates a version 4 UUID.
 *
 * @return {string} A randomly generated UUID string.
 */
declare function uuidv4(): string;

declare const wait: (time?: number) => Promise<unknown>;

/**
 * Finds the key from a given value in an object.
 *
 * @param {object} object - The object to search for the key.
 * @param {T} value - The value to find the corresponding key for.
 * @return {string | undefined} - The key that corresponds to the given value, or undefined if the value is not found.
 */
declare const findKeyFromValue: <T = unknown>(object: {
    [key: string]: unknown;
}, value: T) => string | undefined;

declare function capitalize(str: string): string;

/**
 * Converts a number to an alphabetically ordered string.
 *
 * @param {number} value - The number to convert.
 * @return {string} - The converted list case string.
 */
declare function convertListcases(value: number): string;

/**
 * Checks if the given text contains any emoji.
 *
 * @param {string} text - The text to check for emoji.
 * @return {boolean} - True if the text contains emoji, false otherwise.
 */
declare function hasEmoji(text: string): boolean;

declare function paramCase(str: string): string;

declare function snakeCase(str: string): string;

declare function titleCase(str: string): string;

type PreviewFile = File & {
    preview: string;
};
/**
 * Converts a given URL to a File object asynchronously.
 *
 * @param {string} url - The URL to convert to a File object.
 * @return {Promise<PreviewFile | null>} A Promise that resolves to a File object if the conversion is successful, or null if there is an error.
 */
declare const convertUrlToFile: (url: string) => Promise<PreviewFile | null>;

/**
 * Returns the file extension from a given URL string.
 *
 * @param {string} urlString - The URL string.
 * @return {string} The file extension.
 */
declare function identifyExtension(urlString: string): string;

/**
 * Extracts the filename from a given URL string.
 *
 * @param {string} urlString The URL string.
 * @return {string} The extracted filename.
 */
declare function identifyFilename(urlString: string): string;

export { type InputValue, type PreviewFile, addValueToFD, capitalize, convertBase64ToFile, convertFileToBase64, convertListcases, convertToFD, convertUrlToFile, fDate, fDateTime, fTimestamp, fToNow, findKeyFromValue, flattenArray, getErrorProps, getGeolocation, hasEmoji, identifyExtension, identifyFilename, pDate, paramCase, snakeCase, titleCase, uuidv4, wait };

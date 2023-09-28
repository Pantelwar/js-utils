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
export declare function getErrorProps(formik: FormikLike, name: string): ReturnType;
export {};

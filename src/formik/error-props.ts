/**
 * Represents a formik-like object
 */
type FormikLike = {
  /**
   * Get field meta data by name
   * @param name - The name of the field
   * @returns Touched state and error message
   */
  getFieldMeta(name: string): { touched: boolean; error: string };
};

/**
 * Represents the return type
 */
type ReturnType = {
  error: boolean; // Represents if there is an error
  helperText: string; // Represents the helper text
};

/**
 * Retrieves the error properties for a given form field in a Formik-like object.
 *
 * @param {FormikLike} formik - The Formik-like object containing the form state.
 * @param {string} name - The name of the form field.
 * @return {ReturnType} An object containing the error and helperText properties.
 *
 * @example
 * ```
 * <TextField {...formik.getFieldProps("test")} {...getErrorProps(formik, "test")} />
 * ```
 */
export function getErrorProps(formik: FormikLike, name: string): ReturnType {
  const { touched, error } = formik.getFieldMeta(name);
  return {
    error: Boolean(touched && error),
    helperText: touched ? error || " " : " ",
  };
}

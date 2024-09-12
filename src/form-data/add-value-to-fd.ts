type Value =
  | string
  | number
  | boolean
  | Blob
  | Array<Value>
  | null
  | undefined
  | { [key: string]: Value };

/**
 * Adds a value to a FormData object, handling different value types appropriately.
 *
 * @param {FormData} formData - the FormData object to which the value will be added
 * @param {string} key - the key under which the value will be stored in the FormData object
 * @param {Value} value - the value to be added to the FormData object
 *
 * @example
 * ```
 * addValueToFD(formData, 'string', 'value');
 * addValueToFD(formData, 'array', ['value1', 'value2']);
 * addValueToFD(formData, 'obj', { key: 'test' });
 * addValueToFD(formData, 'file', file);
 * ```
 */
export function addValueToFD(formData: FormData, key: string, value: Value) {
  if (value === undefined || value === null) {
    return;
  } else if (Array.isArray(value) && value[0] instanceof Blob) {
    value.forEach((val) => addValueToFD(formData, key, val));
  } else if (value instanceof Blob) {
    formData.append(key, value);
  } else if (typeof value === "object") {
    formData.append(key, JSON.stringify(value));
  } else {
    formData.append(key, value.toString());
  }
}

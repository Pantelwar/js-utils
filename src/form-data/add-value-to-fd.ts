export type Value =
  | string
  | number
  | boolean
  | Blob
  | Array<Value>
  | null
  | undefined
  | { [key: string]: Value };

export function addValueToFD(formData: FormData, key: string, value: Value) {
  if (value === undefined || value === null) {
    return;
  } else if (Array.isArray(value)) {
    value.forEach((val) => addValueToFD(formData, key, val));
  } else if (value instanceof Blob) {
    formData.append(key, value);
  } else if (typeof value === "object") {
    formData.append(key, JSON.stringify(value));
  } else {
    formData.append(key, value.toString());
  }
}

export type Value = string | Blob | Array<Value> | { [key: string]: Value };

export function addValueToFD(formData: FormData, key: string, value: Value) {
  if (Array.isArray(value)) {
    value.forEach((val) => addValueToFD(formData, key, val));
  } else if (value instanceof Blob) {
    formData.append(key, value);
  } else if (typeof value === "object") {
    formData.append(key, JSON.stringify(value));
  } else {
    formData.append(key, value);
  }
}

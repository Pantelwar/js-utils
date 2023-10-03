import type { Value } from "./add-value-to-fd";
import { addValueToFD } from "./add-value-to-fd";

export function convertToFD(data: { [key: string]: Value }) {
  const formData = new FormData();

  if (typeof data !== "object") {
    return formData;
  }

  Object.keys(data).forEach((key) => addValueToFD(formData, key, data[key]));

  return formData;
}

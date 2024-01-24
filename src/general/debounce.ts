/**
 * Debounces a function to prevent it from being called too frequently.
 * @param cb - The function to be debounced.
 * @param delay - The delay in milliseconds.
 * @returns A debounced function.
 */
export function debounce<T extends Array<unknown>>(
  cb: (...args: T) => void,
  delay = 1000
) {
  let timeout: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

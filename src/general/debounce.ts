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

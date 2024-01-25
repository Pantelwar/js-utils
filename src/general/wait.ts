/**
 * Asynchronously waits for the specified time.
 * @param {number} time - The time to wait in milliseconds. Defaults to 1000.
 * @returns {Promise<void>} - A Promise that resolves after the specified time.
 */
export function wait(time: number = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

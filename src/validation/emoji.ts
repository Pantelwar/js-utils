/**
 * Checks if the given text contains any emoji.
 *
 * @param {string} text - The text to check for emoji.
 * @return {boolean} - True if the text contains emoji, false otherwise.
 */
export function hasEmoji(text: string): boolean {
  return /\p{Extended_Pictographic}/u.test(text);
}

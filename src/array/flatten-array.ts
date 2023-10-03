/**
 * Flattens an array of elements by recursively traversing the array and concatenating
 * any nested arrays found.
 *
 * @param {T[]} list - The array to be flattened.
 * @param {string} [key='children'] - The key used to identify nested arrays in each item.
 * @return {T[]} - The flattened array.
 */
export function flattenArray<T extends { [key: string]: T[] }>(
  list: T[],
  key: string = "children"
): T[] {
  let children: T[] = [];

  const flatten = list?.map((item) => {
    if (item[key] && item[key].length) {
      children = [...children, ...item[key]];
    }
    return item;
  });

  return flatten?.concat(
    children.length ? flattenArray(children, key) : children
  );
}

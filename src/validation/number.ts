export const checkNumber = (value: string) => {
  if (Number.isNaN(+value)) {
    return false;
  }
  return true;
};

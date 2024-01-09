import type { TestFunction } from "yup";

export const panValidate: TestFunction<string | undefined> = (value) => {
  if (!value) return false;
  if (value.length < 10 || value.length > 10) {
    return false;
  }
  if (value.charAt(3) !== "P") {
    return false;
  }
  if (
    Number.isNaN(+value.charAt(5)) ||
    Number.isNaN(+value.charAt(6)) ||
    Number.isNaN(+value.charAt(7)) ||
    Number.isNaN(+value.charAt(8))
  ) {
    return false;
  }
  if (
    !Number.isNaN(+value.charAt(0)) ||
    !Number.isNaN(+value.charAt(1)) ||
    !Number.isNaN(+value.charAt(2)) ||
    !Number.isNaN(+value.charAt(9))
  ) {
    return false;
  }
  return true;
};

export const mobileValidate: TestFunction<string | undefined> = (value) => {
  if (!value) return false;
  if (value.length < 10 || value.length > 10) {
    return false;
  }
  if (Number.isNaN(+value)) {
    return false;
  }
  return true;
};

export const otpValidate: TestFunction<string | undefined> = (value) => {
  if (!value) return false;
  if (value.length < 6 || value.length > 6) {
    return false;
  }
  if (Number.isNaN(+value)) {
    return false;
  }
  return true;
};

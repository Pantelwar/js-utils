/**
 * Validates a PAN (Permanent Account Number) by checking its format and content.
 *
 * @param {string | undefined} value - the PAN to be validated
 * @return {boolean} true if the PAN is valid, false otherwise
 */

export const panValidate = (value: string | undefined): boolean => {
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

/**
 * Validates a mobile number by checking its format and content.
 *
 * @param {string | undefined} value - the mobile number to be validated
 * @return {boolean} true if the mobile number is valid, false otherwise
 */

export const mobileValidate = (value: string | undefined): boolean => {
  if (!value) return false;
  if (value.length < 10 || value.length > 10) {
    return false;
  }
  if (Number.isNaN(+value)) {
    return false;
  }
  return true;
};

/**
 * Validates the given value as a 6-digit one-time passcode.
 *
 * @param {string | undefined} value - the value to be validated
 * @return {boolean} true if the value is a valid 6-digit passcode, false otherwise
 */
export const otpValidate = (value: string | undefined) => {
  if (!value) return false;
  if (value.length < 6 || value.length > 6) {
    return false;
  }
  if (Number.isNaN(+value)) {
    return false;
  }
  return true;
};

/**
 * @jest-environment jsdom
 */

import type { Reference, TestContext } from "yup";
import { ValidationError } from "yup";

import { mobileValidate, otpValidate, panValidate } from "../../src";

const context: TestContext = {
  createError() {
    return new ValidationError("");
  },
  options: {},
  originalValue: "",
  parent: {},
  path: "",
  resolve<T>(value: T | Reference<T>) {
    return value as T;
  },
  schema: {},
};

const panTest = (value: string) => {
  return panValidate.bind(context)(value, context);
};

const mobileTest = (value: string) => {
  return mobileValidate.bind(context)(value, context);
};

const otpTest = (value: string) => {
  return otpValidate.bind(context)(value, context);
};

describe("Yup Tests", () => {
  it("can validate PAN", () => {
    const valid = ["SFIPS7992Q", "AWSPD6389A", "OIYPN2398Q"];
    valid.forEach((pan) => expect(panTest(pan)).toBe(true));
    const invalid = [
      "SFIPS7992",
      "AWSPDD389A",
      "AWSPD63898",
      "OIYPN2398SS",
      "",
      "TESTING123",
      "I  P2323 ",
    ];
    invalid.forEach((pan) => expect(panTest(pan)).toBe(false));
  });

  it("can validate mobile", () => {
    const valid = ["9876547234", "1234567890", "9876543210"];
    valid.forEach((num) => expect(mobileTest(num)).toBe(true));
    const invalid = [
      "",
      "123456789",
      "987654321",
      "ASSKJFKSDS",
      "1234567890 ",
      "9876543210 ",
      "eeeeeeeeeee",
      "NaN",
      "1e10",
    ];
    invalid.forEach((num) => expect(mobileTest(num)).toBe(false));
  });

  it("can validate OTP", () => {
    const valid = ["123456", "987654"];
    valid.forEach((otp) => expect(otpTest(otp)).toBe(true));
    const invalid = [
      "",
      "1234567",
      "9876543",
      "12345O",
      "ASSKJFKSDS",
      "1234567 ",
      "9876543 ",
      "eeeeeeeeeee",
      "NaN",
      "1e10",
    ];
    invalid.forEach((otp) => expect(otpTest(otp)).toBe(false));
  });
});

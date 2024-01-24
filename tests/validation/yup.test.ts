/**
 * @jest-environment jsdom
 */

import { mobileValidate, otpValidate, panValidate } from "../../src";

describe("Yup Tests", () => {
  it("can validate PAN", () => {
    const valid = ["SFIPS7992Q", "AWSPD6389A", "OIYPN2398Q"];
    valid.forEach((pan) => expect(panValidate(pan)).toBe(true));
    const invalid = [
      "SFIPS7992",
      "AWSPDD389A",
      "AWSPD63898",
      "OIYPN2398SS",
      "",
      "TESTING123",
      "I  P2323 ",
    ];
    invalid.forEach((pan) => expect(panValidate(pan)).toBe(false));
  });

  it("can validate mobile", () => {
    const valid = ["9876547234", "1234567890", "9876543210"];
    valid.forEach((num) => expect(mobileValidate(num)).toBe(true));
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
    invalid.forEach((num) => expect(mobileValidate(num)).toBe(false));
  });

  it("can validate OTP", () => {
    const valid = ["123456", "987654"];
    valid.forEach((otp) => expect(otpValidate(otp)).toBe(true));
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
    invalid.forEach((otp) => expect(otpValidate(otp)).toBe(false));
  });
});

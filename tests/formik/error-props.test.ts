import { getErrorProps } from "../../src";

describe("Get error props", () => {
  function generateProps(error: string, touched: boolean) {
    return getErrorProps(
      {
        getFieldMeta() {
          return {
            error,
            touched,
          };
        },
      },
      "test"
    );
  }

  it("should not show error from a non touched invalid field", () => {
    const props = generateProps("field is required", false);

    expect(props.error).toBe(false);
    expect(props.helperText).toBe(" ");
  });

  it("should show error from a touched invalid field", () => {
    const props = generateProps("field is required", true);

    expect(props.error).toBe(true);
    expect(props.helperText).toBe("field is required");
  });

  it("should not show error from a touched valid field", () => {
    const props = generateProps("", true);

    expect(props.error).toBe(false);
    expect(props.helperText).toBe(" ");
  });

  it("should not show error from a non touched valid field", () => {
    const props = generateProps("", false);

    expect(props.error).toBe(false);
    expect(props.helperText).toBe(" ");
  });
});

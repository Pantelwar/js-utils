import { debounce, wait } from "../../src";

describe("Debounce", () => {
  it("debounces a function correctly", async () => {
    let called = 0;
    const fn = () => {
      called++;
    };
    const debouncedFn = debounce(fn, 1000);
    debouncedFn();
    return wait(100)
      .then(() => {
        debouncedFn();
        return wait(200);
      })
      .then(() => {
        debouncedFn();
        return wait(1000);
      })
      .then(() => {
        expect(called).toBe(1);
      });
  });

  it("debounces a function once correctly", async () => {
    let called = 0;
    const fn = () => {
      called++;
    };
    const debouncedFn = debounce(fn, 1000);
    debouncedFn();
    return wait(100)
      .then(() => {
        debouncedFn();
        return wait(200);
      })
      .then(() => {
        debouncedFn();
        return wait(1000);
      })
      .then(() => {
        expect(called).toBe(1);
      });
  });
});

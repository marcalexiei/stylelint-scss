import isCustomProperty from "../isCustomProperty.js";

describe("isCustomProperty", () => {
  it("accepts custom properties", () => {
    expect(isCustomProperty("--foo")).toBe(true);
    expect(isCustomProperty("--foo-bar")).toBe(true);
  });

  it("rejects non-custom properties", () => {
    expect(isCustomProperty("color")).toBe(false);
    expect(isCustomProperty("-webkit-appearance")).toBe(false);
    expect(isCustomProperty("$foo")).toBe(false);
  });
});

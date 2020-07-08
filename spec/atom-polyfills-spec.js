"use babel";

describe("AtomPolyfills", () => {
  beforeEach(() => {
    waitsForPromise(() => atom.packages.activatePackage("atom-polyfills"));
  });

  describe("String", () => {
    it("should has trimEnd function", () => {
      expect(typeof String.prototype.trimEnd).toBe("function");
    });
  });
});

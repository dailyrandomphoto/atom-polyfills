"use babel";

export default {
  initialize(state) {
    setupPolyfills();
  },

  activate(state) {
    // For Atom before v1.14
    setupPolyfills();
  },
};

function setupPolyfills() {
  if (typeof String.prototype.trimEnd !== "function") {
    String.prototype.trimEnd = String.prototype.trimRight;
  }
}

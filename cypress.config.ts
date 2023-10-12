import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    }
  },
});

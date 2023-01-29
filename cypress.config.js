import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    // uncomment below will print the cypress config
    // setupNodeEvents(on, config) {
    //   console.log(config)
    // },
  },
});
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'src/cypress-test/',
    // uncomment below will print the cypress config
    // setupNodeEvents(on, config) {
    //   console.log(config)
    // },
  },
});
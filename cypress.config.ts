import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    supportFile: "cypress/support/e2e.ts",
    chromeWebSecurity: false,
    experimentalFetchPolyfill: true, // Habilita interceptação para fetch()

  },
});

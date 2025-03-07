import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

// Carrega variáveis do arquivo .env
dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Injeta as variáveis do .env no Cypress
      config.env = {
        baseUrl: process.env.CYPRESS_BASE_URL,
        username: process.env.CYPRESS_USERNAME,
        password: process.env.CYPRESS_PASSWORD,
        invalidUsername: process.env.CYPRESS_INVALID_USERNAME,
        invalidPassword: process.env.CYPRESS_INVALID_PASSWORD,
        lockedUser: process.env.CYPRESS_LOCKED_USER,
        problemUser: process.env.CYPRESS_PROBLEM_USER,
        performanceUser: process.env.CYPRESS_PERFORMANCE_USER,
      };
      return config;
    },
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    supportFile: "cypress/support/e2e.ts",
    chromeWebSecurity: false,
    experimentalFetchPolyfill: true, // Habilita interceptação para fetch()
  },
});

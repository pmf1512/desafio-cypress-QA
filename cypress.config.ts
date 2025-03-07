import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        baseUrl: process.env.CYPRESS_BASE_URL,
        username: process.env.CYPRESS_USERNAME,
        password: process.env.CYPRESS_PASSWORD,
        invalidUsername: process.env.CYPRESS_INVALID_USERNAME,
        invalidPassword: process.env.CYPRESS_INVALID_PASSWORD,
        lockedUser: process.env.CYPRESS_LOCKED_USER,
        problemUser: process.env.CYPRESS_PROBLEM_USER,
        performanceUser: process.env.CYPRESS_PERFORMANCE_USER,
        firstName: process.env.CYPRESS_FIRST_NAME,
        lastName : process.env.CYPRESS_LAST_NAME,
        zipCode : process.env.CYPRESS_ZIP_CODE
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

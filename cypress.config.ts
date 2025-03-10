import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
import path from 'path';

// Carrega as variáveis do arquivo .env
dotenv.config();

// Lê o arquivo checkout.json para pegar os dados do checkout
const checkoutData = JSON.parse(readFileSync(path.resolve(__dirname, 'cypress/fixtures/checkout.json'), 'utf-8'));

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adiciona os dados do checkout no config.env
      config.env = {
        baseUrl: process.env.CYPRESS_BASE_URL ,
        username: process.env.CYPRESS_USERNAME,
        password: process.env.CYPRESS_PASSWORD,
        invalidUsername: process.env.CYPRESS_INVALID_USERNAME,
        invalidPassword: process.env.CYPRESS_INVALID_PASSWORD,
        lockedUser: process.env.CYPRESS_LOCKED_USER,
        problemUser: process.env.CYPRESS_PROBLEM_USER,
        performanceUser: process.env.CYPRESS_PERFORMANCE_USER,
        firstName: checkoutData.firstName,
        lastName: checkoutData.lastName,
        zipCode: checkoutData.zipCode,
        cart: checkoutData.cart,
      };

      return config;
    },
    baseUrl: process.env.CYPRESS_BASE_URL || "https://www.saucedemo.com",
    specPattern: 'cypress/tests/**/*.spec.ts',
    supportFile: 'cypress/support/e2e.ts',
    chromeWebSecurity: false,
    experimentalFetchPolyfill: true,
  },
});

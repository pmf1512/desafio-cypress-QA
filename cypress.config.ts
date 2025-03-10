import { defineConfig } from 'cypress'; // Importa a função para definir a configuração do Cypress
import * as dotenv from 'dotenv'; // Importa a biblioteca dotenv para carregar variáveis de ambiente
import { readFileSync } from 'fs'; // Importa o método para ler arquivos do sistema de arquivos
import path from 'path'; // Importa a biblioteca para manipulação de caminhos de arquivos

// Carrega as variáveis do arquivo .env
dotenv.config();

// Lê o arquivo checkout.json para pegar os dados do checkout
const checkoutData = JSON.parse(readFileSync(path.resolve(__dirname, 'cypress/fixtures/checkout.json'), 'utf-8'));

// Exporta a configuração do Cypress
export default defineConfig({
  e2e: {
    // Função para configurar eventos no processo de execução dos testes
    setupNodeEvents(on, config) {
      // Adiciona os dados do checkout no objeto config.env, que estará disponível nos testes
      config.env = {
        // Variáveis de ambiente configuradas no arquivo .env
        baseUrl: process.env.CYPRESS_BASE_URL, // Base URL da aplicação (definida no .env)
        username: process.env.CYPRESS_USERNAME, // Nome de usuário para login (definido no .env)
        password: process.env.CYPRESS_PASSWORD, // Senha de usuário para login (definida no .env)
        invalidUsername: process.env.CYPRESS_INVALID_USERNAME, // Nome de usuário inválido (definido no .env)
        invalidPassword: process.env.CYPRESS_INVALID_PASSWORD, // Senha inválida (definida no .env)
        lockedUser: process.env.CYPRESS_LOCKED_USER, // Usuário bloqueado para testes (definido no .env)
        problemUser: process.env.CYPRESS_PROBLEM_USER, // Usuário com problemas para login (definido no .env)
        performanceUser: process.env.CYPRESS_PERFORMANCE_USER, // Usuário com desempenho lento (definido no .env)
        // Dados de checkout lidos do arquivo checkout.json
        firstName: checkoutData.firstName, // Primeiro nome para o checkout
        lastName: checkoutData.lastName, // Sobrenome para o checkout
        zipCode: checkoutData.zipCode, // Código postal para o checkout
        cart: checkoutData.cart, // Itens do carrinho para o checkout
      };

      // Retorna a configuração modificada para o Cypress
      return config;
    },

    // URL base onde os testes serão realizados
    baseUrl: process.env.CYPRESS_BASE_URL || "https://www.saucedemo.com", // Valor padrão se não estiver no .env

    // Padrão de especificação para os arquivos de teste do Cypress
    specPattern: 'cypress/tests/**/*.spec.ts', // Caminho para os testes de especificação

    // Arquivo de suporte para os testes
    supportFile: 'cypress/support/e2e.ts', // Arquivo de suporte que pode ser usado para comandos personalizados

    // Desativa a segurança do navegador Chrome durante os testes (útil para evitar erros com políticas de CORS)
    chromeWebSecurity: false,

    // Habilita o polyfill experimental de fetch para lidar com requisições AJAX
    experimentalFetchPolyfill: true,

    // Configuração do relatório de testes usando o Mochawesome
    reporter: "mochawesome", // Define o uso do reporter Mochawesome para gerar relatórios

    // Configurações adicionais do reporter
    reporterOptions: {
      reportDir: "cypress/reports", // Diretório onde os relatórios serão salvos
      overwrite: false, // Não sobrescreve relatórios existentes
      html: true, // Gera relatório em formato HTML
      json: true, // Gera relatório em formato JSON
    },

    // Número de testes que devem ser mantidos na memória
    "numTestsKeptInMemory": 0, // Configura o Cypress para não manter nenhum teste na memória após a execução

    // Desativa a gravação de vídeos durante os testes
    "video": false, // Não grava vídeos dos testes
  },
});

# Testes Automatizados - SwagLabs

## 📌 Tecnologias Utilizadas
- Cypress
- TypeScript
- GitHub Actions
- Page Object Model (POM)

## 📌 Estrutura do Projeto
- **`pageObjects`**: Encapsula interações com a UI.
- **`commands.ts`**: Contém comandos customizados.
- **`e2e/...`**: Contém os casos de teste separados em pastas.

## 📌 Como Rodar os Testes
1. Clone o repositório.
2. Instale as dependências: `npm install`
3. Execute os testes: `npx cypress open`

## 📌 CI/CD
O projeto roda testes automaticamente via GitHub Actions.

## Testes Realizados

1. Testes de Login

1.1 Login com Sucesso
Objetivo: Verificar se o usuário consegue fazer login com credenciais válidas.
Passos:
Acessar a página de login.
Preencher o campo de usuário com "standard_user".
Preencher o campo de senha com "secret_sauce".
Clicar no botão de login.
Resultado Esperado: O usuário deve ser redirecionado para a página inicial do dashboard com sucesso.

1.2 Erro de Credenciais Inválidas
Objetivo: Verificar se o sistema exibe uma mensagem de erro quando as credenciais são inválidas.
Passos:
Acessar a página de login.
Preencher o campo de usuário com "wrong_user".
Preencher o campo de senha com "wrong_password".
Clicar no botão de login.
Resultado Esperado: A mensagem de erro "Epic sadface: Username and password do not match any user in this service" deve ser exibida.

1.3 Erro de Usuário Bloqueado
Objetivo: Verificar se o sistema exibe uma mensagem de erro quando o usuário está bloqueado.
Passos:
Acessar a página de login.
Preencher o campo de usuário com "locked_out_user".
Preencher o campo de senha com "secret_sauce".
Clicar no botão de login.
Resultado Esperado: A mensagem de erro "Epic sadface: Sorry, this user has been locked out." deve ser exibida.

1.4 Erro de Usuário com Problemas de Performance
Objetivo: Testar o comportamento do login quando o usuário tem características especiais (exemplo: problemas com carregamento de imagens).
Passos:
Acessar a página de login.
Preencher o campo de usuário com "problem_user".
Preencher o campo de senha com "secret_sauce".
Clicar no botão de login.
Verificar se as imagens dos produtos carregam corretamente.
Resultado Esperado: As imagens dos produtos devem ser visíveis.

1.5 Erro de Usuário com Performance Lenta
Objetivo: Verificar se o sistema funciona com usuários que causam lentidão na resposta.
Passos:
Acessar a página de login.
Preencher o campo de usuário com "performance_glitch_user".
Preencher o campo de senha com "secret_sauce".
Clicar no botão de login.
Resultado Esperado: O login deve ser completado, mesmo com a lentidão da resposta.

2. Testes de Carrinho

2.1 Adicionar um item ao carrinho
Objetivo: Verificar se o item é adicionado corretamente ao carrinho.
Passos:
Acessar a página de login e logar com credenciais válidas.
Adicionar o item "Sauce Labs Backpack" ao carrinho.
Acessar o carrinho de compras.
Resultado Esperado: O carrinho deve conter exatamente 1 item, que é o "Sauce Labs Backpack".

2.2 Adicionar dois itens ao carrinho
Objetivo: Verificar se dois itens são adicionados corretamente ao carrinho.
Passos:
Acessar a página de login e logar com credenciais válidas.
Adicionar os itens "Sauce Labs Backpack" e "Sauce Labs Bike Light" ao carrinho.
Acessar o carrinho de compras.
Resultado Esperado: O carrinho deve conter exatamente 2 itens, "Sauce Labs Backpack" e "Sauce Labs Bike Light".

2.3 Adicionar todos os itens ao carrinho
Objetivo: Verificar se todos os itens disponíveis são adicionados corretamente ao carrinho.
Passos:
Acessar a página de login e logar com credenciais válidas.
Adicionar todos os itens da lista de produtos ao carrinho.
Acessar o carrinho de compras.
Resultado Esperado: O carrinho deve conter exatamente 6 itens, todos os produtos da página de inventário.

3. Testes de Checkout

3.1 Finalizar a compra com sucesso
Objetivo: Verificar se o checkout é realizado com sucesso.
Passos:
Adicionar um item ao carrinho.
Preencher o formulário de checkout com os dados válidos.
Confirmar o checkout.
Resultado Esperado: A mensagem de sucesso "Thank you for your order!" deve ser exibida.

3.2 Erro ao tentar continu
Objetivo: Verificar se o erro é exibido quando o primeiro nome não é preenchido.
Passos:
Adicionar um item ao carrinho.
Tentar continuar o checkout sem preencher o primeiro nome.
Resultado Esperado: O erro "Error: First Name is required" deve ser exibido.

3.3 Erro ao tentar continuar sem preencher o último nome
Objetivo: Verificar se o erro é exibido quando o último nome não é preenchido.
Passos:
Adicionar um item ao carrinho.
Tentar continuar o checkout sem preencher o último nome.
Resultado Esperado: O erro "Error: Last Name is required" deve ser exibido.

3.4 Erro ao tentar continuar sem preencher o CEP
Objetivo: Verificar se o erro é exibido quando o CEP não é preenchido.
Passos:
Adicionar um item ao carrinho.
Tentar continuar o checkout sem preencher o CEP.
Resultado Esperado: O erro "Error: Postal Code is required" deve ser exibido.

3.5 Cancelar o checkout e voltar para o carrinho
Objetivo: Verificar se o usuário consegue cancelar o checkout e voltar ao carrinho.
Passos:
Adicionar um item ao carrinho.
Iniciar o checkout e cancelar o processo.
Resultado Esperado: O usuário deve ser redirecionado de volta para a página do carrinho.
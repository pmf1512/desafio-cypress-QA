# Testes Automatizados - Ebac Shop

## 📌 Tecnologias Utilizadas

- Cypress
- TypeScript

## 📌 Estrutura do Projeto

- **`commands.ts`**: Contém comandos customizados.
- **`tests/...`**: Contém os casos de teste separados em pastas.

## 📌 Como Rodar os Testes

1. Clone o repositório.
2. Instale as dependências: `npm install`
3. Execute os testes: `npx cypress open`

## Testes Realizados

1. Testes de Login

1.1 Login com Sucesso

Objetivo: Verificar se o usuário consegue fazer login com credenciais válidas.

Passos:
Acessar a página de login.
Preencher o campo de usuário com "pamelamaia_freitas@hotmail.com".
Preencher o campo de senha com "Pl@netaSol@r".
Clicar no botão de login.
Resultado Esperado: O usuário deve ser redirecionado para a página da minha conta com sucesso.

1.2 Erro de Login com E-mail Inválido

Objetivo: Verificar se o sistema exibe uma mensagem de erro quando o login é feito com um e-mail inválido.

Passos:
Acessar a página de login.
Preencher o campo de usuário com "testeemailerro@ebac.com".
Preencher o campo de senha com "123456".
Clicar no botão de login.
Resultado Esperado: A mensagem de erro "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário." deve ser exibida.

1.3 Erro de Login com Senha Inválida

Objetivo: Verificar se o sistema exibe uma mensagem de erro quando o login é feito com uma senha inválida.

Passos:
Acessar a página de login.
Preencher o campo de usuário com "pamelamaia_freitas@hotmail.com".
Preencher o campo de senha com "123456".
Clicar no botão de login.
Resultado Esperado: A mensagem de erro "Erro: A senha fornecida para o e-mail pamelamaia_freitas@hotmail.com está incorreta. Perdeu a senha?" deve ser exibida.

2. Testes de Carrinho

2.1 Adicionar um item ao carrinho e realizar a compra

Objetivo: Verificar se o item é adicionado corretamente ao carrinho e a compra é efetuada com sucesso.

Passos:
Acessar a página de login e logar com credenciais válidas.
Adicionar o item "Aero Daily Fitness Tee" ao carrinho.
Acessar o carrinho de compras.
Realizar compra do item adicionado ao carrinho.
Resultado Esperado: A compra deve ser efetuada com sucesso.

2.2 Adicionar um item ao carrinho e excluir

Objetivo: Verificar se a exclusão de um item adicionado ao carrinho é efetuada com sucesso.

Passos:
Acessar a página de login e logar com credenciais válidas.
Adicionar o item "Aero Daily Fitness Tee" ao carrinho.
Acessar o carrinho de compras.
Realizar exclusão do item adicionado ao carrinho.
Resultado Esperado: O carrinho deve ficar vazio e o item ser excluído com sucesso.

2.3 Adicionar um item ao carrinho, excluir e desfazer a exclusão

Objetivo: Verificar se após um item ter sido excluído do carrinho, ao desfazer, a ação de exclusão é desfeita com sucesso.

Passos:
Acessar a página de login e logar com credenciais válidas.
Adicionar o item "Aero Daily Fitness Tee" ao carrinho.
Acessar o carrinho de compras.
Realizar exclusão do item adicionado ao carrinho.
Clicar no link de "Desfazer" para que o item excluído retorne ao carrinho.
Resultado Esperado: O carrinho deve estar com o item que foi adicionado inicialmente com sucesso.

3. Testes de Checkout

3.1 Validar campos obrigatórios do checkout

Objetivo: Verificar se os campos obrigatórios do checkout estão funcionando corretamente.

Passos:
Adicionar um item ao carrinho.
Clicar no botão para Concluir a compra e entrar na página de checkout.
Clicar no botão para Finalizar a compra sem preencher os campos obrigatórios.
Resultado Esperado: A compra não é efetuada e cada campo obrigatório dispara uma mensagem confirmando que os mesmos são obrigatórios.

3.2 Adicionar um cupom válido.

Objetivo: Verificar se um cupom válido é adicionado com sucesso.

Passos:
Adicionar um item ao carrinho.
Clicar no botão para Concluir a compra e entrar na página de checkout.
Adicionar um cupom válido.
Resultado Esperado: O cupom é adicionado com sucesso e exibida a mensagem "Código de cupom aplicado com sucesso.".

3.3 Adicionar cupom inválido.

Objetivo: Verificar se ao adicionar um cupom inválido, ocorre o devido erro esperado.

Passos:
Adicionar um item ao carrinho.
Clicar no botão para Concluir a compra e entrar na página de checkout.
Adicionar um cupom inválido.
Resultado Esperado: O cupom não é adicionado e é exibida mensagem "O cupom "inválido_cupom" não existe!".

3.4 Validar mensagens dos formatos de pagamentos.

Objetivo: Verificar se ao selecionar qualquer uma das formas de pagamentos disponíveis, exibe a mensagem correta referente ao tipo de pagamento escolhido.

Passos:
Adicionar um item ao carrinho.
Clicar no botão para Concluir a compra e entrar na página de checkout.
Selecionar uma das formas de pagamento.
Resultado Esperado 1: Ao selecionar a forma de pagamento "Transferência bancária", a mensagem "Faça seu pagamento diretamente em nossa conta bancária. Se possível informe o ID do seu pedido como identificação do seu depósito ou transferência. Para pagamentos via DOC, seu pedido não será enviado enquanto o pagamento não for compensado." é exibida com sucesso.
Resultado Esperado 2: Ao selecionar a forma de pagamento "Cheque", a mensagem "Envie seu cheque para Nome da loja, Rua da loja, Cidade da loja, Estado/País da loja, CEP da loja." é exibida com sucesso.
Resultado Esperado 3: Ao selecionar a forma de pagamento " Pagamento na entrega", a mensagem "Pagar em dinheiro na entrega." é exibida com sucesso.

>> Comando para gerar relatório pós teste: npx cypress run --reporter mochawesome

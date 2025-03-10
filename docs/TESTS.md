📝 Documentação dos Testes Cypress

📌 1. Testes de Login

📌 Descrição:
Verifica se o login na aplicação funciona corretamente para diferentes cenários.

✅ Cenários de Teste:
[✔] Login com credenciais válidas
[✔] Tentativa de login com senha incorreta
[✔] Tentativa de login com usuário inexistente
[✔] Tentativa de login sem preencher os campos

🔄 Passos de Execução:
Acessar a página de login
Inserir credenciais (usuário e senha)
Clicar no botão de login
Verificar se o login foi bem-sucedido ou se mensagens de erro foram exibidas

🎯 Resultado Esperado:
Se o login for válido, o usuário deve ser redirecionado para a tela principal
Se o login for inválido, uma mensagem de erro apropriada deve ser exibida

🛒 2. Testes do Carrinho

📌 Descrição:
Valida se os produtos podem ser adicionados, removidos e se a listagem do carrinho está correta.

✅ Cenários de Teste:
[✔] Adicionar um produto ao carrinho
[✔] Adicionar vários produtos ao carrinho
[✔] Remover um produto do carrinho
[✔] Visualizar o resumo do carrinho antes da finalização da compra

🔄 Passos de Execução:
Acessar a página de produtos
Adicionar produtos ao carrinho
Acessar a página do carrinho
Remover produtos (se aplicável)
Verificar se a listagem e os valores estão corretos

🎯 Resultado Esperado:
O carrinho deve exibir corretamente os produtos adicionados e seus valores
O botão de checkout deve estar habilitado se houver produtos no carrinho
Se um produto for removido, ele não deve mais aparecer na lista

🏁 3. Testes de Checkout

📌 Descrição:
Verifica se a finalização da compra ocorre corretamente e se os campos obrigatórios são validados.

✅ Cenários de Teste:
[✔] Finalização da compra com dados válidos
[✔] Tentativa de checkout sem preencher os campos obrigatórios
[✔] Exibição de mensagens de erro quando os campos não são preenchidos

🔄 Passos de Execução:
Acessar a página de checkout
Preencher os campos obrigatórios (First Name, Last Name, Zip Code)
Clicar no botão de continuar
Verificar se a compra foi finalizada corretamente

🎯 Resultado Esperado:
Se os campos forem preenchidos corretamente, deve aparecer a mensagem "Thank you for your order!"
Se houver campos vazios, deve aparecer uma mensagem de erro específica

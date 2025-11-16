📝 Documentação dos Testes Cypress

📌 1. Testes de Login

📌 Descrição:
Verifica se o login na aplicação funciona corretamente para diferentes cenários.

✅ Cenários de Teste:
[✔] Login com credenciais válidas
[✔] Tentativa de login com e-mail incorreto
[✔] Tentativa de login com senha incorreta

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
[✔] Adicionar um produto ao carrinho e realizar a compra
[✔] Adicionar um produto ao carrinho e excluir
[✔] Adicionar um item ao carrinho, excluir e desfazer a exclusão

🔄 Passos de Execução:
Acessar a página de produtos
Adicionar produtos ao carrinho
Acessar a página do carrinho
Remover produtos (se aplicável)
Desfazer a exclusão do item do carrinho (se aplicável)
Verificar se a listagem e os valores estão corretos

🎯 Resultado Esperado:
O carrinho deve exibir corretamente os produtos adicionados e seus valores
Se um produto for removido, ele não deve mais aparecer na lista
Se um produto for removido, e a sua exclusão for desfeita, o item e seu valor deve ser exibido novamente no carrinho.

🏁 3. Testes de Checkout

📌 Descrição:
Verifica se os campos obrigatórios são validados, se um cupom é adicionado ou recusado corretamente e as mensagens dos formatos de pagamentos.

✅ Cenários de Teste:
[✔] Validar campos obrigatórios do checkout
[✔] Adicionar um cupom válido
[✔] Adicionar cupom inválido
[✔] Validar mensagens dos formatos de pagamentos


🔄 Passos de Execução:
Acessar a página de checkout
Validar que ao salvar sem preencher os campos obrigatórios são disparadas as mensagens críticas de erros dos campos.
Adicionar um cupom válido
Adicionar um cupom inválido
Verificar as mensagens de cada forma de pagamento disponível

🎯 Resultado Esperado:
Se houver campos obrigatórios vazios, deve aparecer uma mensagem de erro específica de cada campo
Ao inserir um cupom válido, ele é adicionado corretamente.
Ao inserir um cupom inválido, ocorre erro e informa que o mesmo é inválido.
Ao selecionar cada uma das formas de pagamentos disponíveis no sistema, exibe uma mensagem explicativa para cada uma delas.
class CartPage {
  /**
  * Adiciona um produto ao carrinho com base no nome do produto.
  */
  static addToCart(productName: string) {
    // Verifica se o item está visível na página
    cy.contains(".inventory_item", productName).should("be.visible");
    // Encontra o botão de adicionar ao carrinho dentro do item e clica nele
    cy.contains(".inventory_item", productName)
      .find("button.btn_primary.btn_inventory")
      .click();
  }
  /**
    * Navega até a página do carrinho.
    */
  static goToCart() {
    // Clica no ícone do carrinho de compras
    cy.get(".shopping_cart_link").click();
    // Verifica se a URL foi atualizada para a página do carrinho
    cy.url().should("include", "/cart.html");
  }
  /**
    * Verifica se um item específico está presente no carrinho.   */
  static verifyItemInCart(productName: string) {
    // Confirma que o item está visível no carrinho
    cy.get(".cart_item").contains(productName).should("be.visible");
  }
}

export default CartPage;

class InventoryPage {
  static addToCart(productName: string) {
    cy.contains(".inventory_item", productName).should("be.visible");

    cy.contains(".inventory_item", productName)
      .find("button.btn_primary.btn_inventory")
      .click();
  }


  static goToCart() {
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
  }

  static verifyItemInCart(productName: string) {
    cy.get(".cart_item").contains(productName).should("be.visible");
  }
}

export default InventoryPage;

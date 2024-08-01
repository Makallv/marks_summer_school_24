import BasePage from "./Base.page";

class ProductPage extends BasePage {
  variant(variant) {
    return cy.get(`[data-testid="product-options"]`).contains(variant);
  }

  addToCartButton() {
    return cy.get('[data-testid="add-product-button"]');
  }
}

export default ProductPage;

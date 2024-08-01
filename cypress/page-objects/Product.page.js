import BasePage from "./Base.page";

class ProductPage extends BasePage {
  variant(variant) {
    return cy.get(`[data-testid="product-options"]`).contains(variant); // TODO: use cy.getByTestId
  }

  addToCartButton() {
    return cy.get('[data-testid="add-product-button"]'); // TODO: use cy.getByTestId
  }
}

export default ProductPage;

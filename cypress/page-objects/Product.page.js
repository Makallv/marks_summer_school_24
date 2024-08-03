import BasePage from "./Base.page";

class ProductPage extends BasePage {
  variant(variant) {
    return cy.getByTestId("product-options").contains(variant);
  }

  addToCartButton() {
    return cy.getByTestId("add-product-button");
  }
}

export default ProductPage;

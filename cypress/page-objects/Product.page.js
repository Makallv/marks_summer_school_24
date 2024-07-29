import BasePage from "./Base.page";

class ProductPage extends BasePage {
  variant(variant) {
    return cy
        .get(`div[data-testid="product-options"] > button`)
        .contains(variant)
  }

  addToCartButton() {
    return cy
        .get('button[data-testid="add-product-button"]')
  }
}

export default ProductPage;

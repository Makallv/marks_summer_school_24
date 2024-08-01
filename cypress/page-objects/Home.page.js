import BasePage from "./Base.page";

class HomePage extends BasePage {
  constructor() {
    super();
  }

  get url() {
    return "/store";
  }

  visit() {
    return cy.visit(this.url);
  }

  visibleProducts(product) {
    return cy.get(`[href="/us/products/${product}"]`); //// TODO: use cy.getByHref
  }

  get productArray() {
    return cy.get('[data-testid="product-wrapper"]'); // TODO: use cy.getByTestId
  }

  dashboardPageLink() {
    return cy.get('[data-testid="nav-dashboard-link"]'); // TODO: use cy.getByTestId
  }
}

export default HomePage;

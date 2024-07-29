import BasePage from "./Base.page";

class HomePage extends BasePage {
  constructor() {
    super();
  }

  visibleProducts(product) {
    return cy.get(`a[href="/us/products/${product}"]`);
  }

  dashboardPageLink() {
    return cy.get('a[data-testid="nav-dashboard-link"]')
  }
}

export default HomePage;

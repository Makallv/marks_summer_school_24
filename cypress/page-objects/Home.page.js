import BasePage from "./Base.page";

class HomePage extends BasePage {
  constructor() {
    super();
  }

  static get url() {
    return "/store";
  }

  visit() {
    return cy.visit(this.url);
  }

  visibleProducts(product) {
    return cy.get(`a[href="/us/products/${product}"]`);
  }

  dashboardPageLink() {
    return cy.get('a[data-testid="nav-dashboard-link"]');
  }
}

export default HomePage;

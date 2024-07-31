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
    return cy.get(`[href="/us/products/${product}"]`); 
  }

  dashboardPageLink() {
    return cy.get('[data-testid="nav-dashboard-link"]'); 
  }
}

export default HomePage;

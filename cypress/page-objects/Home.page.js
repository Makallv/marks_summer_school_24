import BasePage from "./Base.page";

class HomePage extends BasePage {
  constructor() {
    super();
  }

  get url() {
    return "/store";
  }

  visibleProducts(product) {
    return cy.getByHref(`products/${product}`);
  }

  get productArray() {
    return cy.getByTestId("product-wrapper");
  }

  dashboardPageLink() {
    return cy.getByTestId("nav-dashboard-link");
  }
}

export default HomePage;

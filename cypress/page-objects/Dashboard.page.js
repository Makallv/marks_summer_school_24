import BasePage from "./Base.page";

class DashboardPage extends BasePage {
  constructor() {
    super();
  }

  get url() {
    return "/dashboard";
  }

  get animeSpin() {
    return cy.get(".animate-spin");
  }

  pageLinks(pageOption) {
    return cy.getByTestId('account-nav').contains(pageOption);
  }

  get orderList() {
    return cy.getByTestId('orders-wrapper');
  }
}

export default DashboardPage;

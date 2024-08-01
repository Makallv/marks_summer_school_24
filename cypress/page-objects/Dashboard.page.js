import BasePage from "./Base.page";

class DashboardPage extends BasePage {
  constructor() {
    super();
  }

  get url() {
    return "/dashboard";
  }

  visit() {
    return cy.visit(this.url);
  }

  get animeSpin() {
    return cy.get(".animate-spin");
  }

  pageLinks(pageOption) {
    return cy.get('[data-testid="account-nav"]').contains(pageOption); // TODO: use cy.getByTestId
  }

  get orderList() {
    return cy.get('[data-testid="orders-wrapper"]'); // TODO: use cy.getByTestId
  }
}

export default DashboardPage;

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

  get addressLink() {
    return cy.getByHref("dashboard/addresses").filter(":visible");
  }

  get profileLink() {
    return cy.get('a[data-testid="profile-link"]');
  }

  get ordersLink() {
    return cy.get('a[data-testid="orders-link"]');
  }

  get logout() {
    return cy.get('.text-grey-700 > [data-testid="logout-button"]');
  }
}

export default DashboardPage;

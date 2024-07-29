class BasePage {
  get url() {
    return "/";
  }

  visit() {
    cy.visit(this.url);
  }
}

export default BasePage;

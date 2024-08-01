import BasePage from "../Base.page";

class LoginPage extends BasePage {
  constructor() {
    super();
  }

  static get url() {
    return "/sign-in";
  }

  get emailInput() {
    return cy.get("#email"); // TODO: use [data-testid="email-input"]
  }

  get passwordInput() {
    return cy.get("#password"); // TODO: use data-testid selector according to best practices
  }

  get signInButton() {
    return cy.get("[type='submit']"); // TODO: use data-testid selector according to best practices
  }

  get registerLink() {
    return cy.get(".underline"); // TODO: use data-testid selector according to best practices
  }
}

export default LoginPage;

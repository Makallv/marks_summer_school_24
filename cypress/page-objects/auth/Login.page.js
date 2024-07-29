import BasePage from "../Base.page";

class LoginPage extends BasePage {
  constructor() {
    super();
  }

  static get url() {
    return "/sign-in";
  }

  get emailInput() {
    return cy.get("#email");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get signInButton() {
    return cy.get("button[type='submit']");
  }

  get registerLink() {
    return cy.get(".underline");
  }
}

export default LoginPage;

import BasePage from "../Base.page";

class LoginPage extends BasePage {
  constructor() {
    super();
  }

  static get url() {
    return "/sign-in";
  }

  get emailInput() {
    return cy.getByTestId("email-input");
  }

  get passwordInput() {
    return cy.getByTestId("password-input");
  }

  get signInButton() {
    return cy.getByTestId("sign-in-button");
  }

  get registerLink() {
    return cy.getByTestId("register-button");
  }
}

export default LoginPage;

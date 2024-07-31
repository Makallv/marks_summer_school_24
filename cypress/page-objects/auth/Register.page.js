import BasePage from "../Base.page";

class RegisterPage extends BasePage {
  constructor() {
    super();
  }

  static get url() {
    return "/sign-up";
  }

  get firstNameInput() {
    return cy.get("#first_name");
  }

  get lastNameInput() {
    return cy.get("#last_name");
  }

  get emailInput() {
    return cy.get("#email");
  }

  get phoneInput() {
    return cy.get("#phone");
  }

  get passwordInput() {
    return cy.get("#password");
  }
}

export default RegisterPage;

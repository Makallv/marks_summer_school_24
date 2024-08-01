import BasePage from "../Base.page";

class RegisterPage extends BasePage {
  constructor() {
    super();
  }

  static get url() {
    return "/sign-up";
  }

  get firstNameInput() {
    return cy.get('[data-testid="first-name-input"]'); // TODO: use cy.getByTestId
  }

  get lastNameInput() {
    return cy.get('[data-testid="last-name-input"]'); // TODO: use cy.getByTestId
  }

  get emailInput() {
    return cy.get('[data-testid="email-input"]'); // TODO: use cy.getByTestId
  }

  get phoneInput() {
    return cy.get("#phone"); // TODO: use data-testid selector
  }

  get passwordInput() {
    return cy.get('[data-testid="password-input"]'); // TODO: use cy.getByTestId
  }

  get registerButton() {
    return cy.get('[data-testid="register-button"]'); // TODO: use cy.getByTestId
  }

  get registerError() {
    return cy.get('[data-testid="register-error"]'); // TODO: use cy.getByTestId
  }

  registerFunc(name, last, email, pass) {
    if (name === "") {
      this.lastNameInput.type(last);
      this.emailInput.type(email);
      this.passwordInput.type(pass);
    } else if (pass === "") {
      this.firstNameInput.type(name);
      this.lastNameInput.type(last);
      this.emailInput.type(email);
    } else if (last === "") {
      this.firstNameInput.type(name);
      this.emailInput.type(email);
      this.passwordInput.type(pass);
    } else {
      this.firstNameInput.type(name);
      this.lastNameInput.type(last);
      this.emailInput.type(email);
      this.passwordInput.type(pass);
    }
  }

  checkInputs(name, last, email, pass) {
    this.firstNameInput.should("have.value", name);
    this.lastNameInput.should("have.value", last);
    this.emailInput.should("have.value", email);
    this.passwordInput.should("have.value", pass);
  }
}

export default RegisterPage;

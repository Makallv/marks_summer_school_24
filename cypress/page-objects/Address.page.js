import BasePage from "./Base.page";

class AddressPage extends BasePage {
  constructor() {
    super();
  }

  get addressTitle() {
    return cy.get("h1");
  }

  addNewAddress(id) {
    return cy.getByTestId(id);
  }

  requiredImputs(element) {
    return cy.get(`[data-testid="${element}"]~label`);
  }

  inputFill(input, value) {
    return cy.fillInputs(input, value);
  }

  select(element) {
    return cy.getByTestId(element);
  }

  saveButton(button) {
    return cy.getByTestId(button);
  }

  addressContainer(container) {
    return cy.getByTestId(container);
  }
}

export default AddressPage;

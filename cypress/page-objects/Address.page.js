import BasePage from "./Base.page";

class AddressPage extends BasePage {
  constructor() {
    super();
  }

  get addressTitle() {
    return cy.get("h1");
  }

  addNewAddress(id) {
    return cy.getByTestId(id); // TODO: is 'button' part really necessary in selector? looks like element would be found without it
  }

  requiredImputs(element) {
    return cy.get(`[data-testid="${element}"]~label`);
  }

  inputFill(input, value) {
    return cy.fillInputs(input, value)
  }

  select(element) {
    return cy.getByTestId(element); // TODO: duplicate of cy.getByTestId command
  }

  saveButton(button) {
    return cy.getByTestId(button); // TODO: is 'button' part really necessary in selector? looks like element would be found without it
  }

  addressContainer(container) {
    return cy.getByTestId(container); // TODO: use cy.getByTestId
  }
}

export default AddressPage;

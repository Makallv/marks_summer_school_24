import BasePage from "./Base.page";

class AddressPage extends BasePage {
  constructor() {
    super();
  }

  get addressTitle() {
    return cy.get("h1");
  }

  get addNewAddress() {
    return cy.get('button[data-testid="add-address-button"]'); // TODO: is 'button' part really necessary in selector? looks like element would be found without it
  }

  requiredImputs(element) {
    return cy.get(`[data-testid="${element}"]~label`);
  }

  select(element) {
    return cy.get(`[data-testid="${element}"]`); // TODO: duplicate of cy.getByTestId command
  }

  get saveButton() {
    return cy.get('button[data-testid="save-button"]'); // TODO: is 'button' part really necessary in selector? looks like element would be found without it
  }

  get addressContainer() {
    return cy.get('[data-testid="address-container"]'); // TODO: use cy.getByTestId
  }
}

export default AddressPage;

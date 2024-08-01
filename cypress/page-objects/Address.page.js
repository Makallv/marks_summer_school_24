import BasePage from "./Base.page";

class AddressPage extends BasePage {
  constructor() {
    super();
  }

  get addressTitle() {
    return cy.get("h1");
  }

  get addNewAddress() {
    return cy.get('button[data-testid="add-address-button"]'); // is button really necessary?
  }

  requiredImputs(element) {
    return cy.get(`[data-testid="${element}"]~label`);
  }

  select(element) {
    return cy.get(`[data-testid="${element}"]`);
  }

  get saveButton() {
    return cy.get('button[data-testid="save-button"]'); // is button really necessary?
  }

  get addressContainer() {
    return cy.get('[data-testid="address-container"]');
  }
}

export default AddressPage;

import BasePage from "./Base.page";

class AddressPage extends BasePage{

    constructor() {
        super()
    }

    get addressTitle() {
        return cy.get('h1')
    }

    get addNewAddress() {
        return cy.get('button[data-testid="add-address-button"]')
    }

    requiredImputs(element) {
        return cy.get(`[data-testid${element}] [required]`)
    }

    get saveButton() {
        return cy.get('button[data-testid="save-button"]')
    }
}

export default AddressPage
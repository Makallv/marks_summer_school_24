import BasePage from "./Base.page"

class CheckoutProccessPage extends BasePage{

    constructor() {
        super()
    }

    get url() {
        return '/cart'
    }

    get successfullOrderText() {
        return cy.get('.h1-core > :nth-child(2)')
    }

    get placeOrder() {
        return cy.get('[data-testid="submit-order-button"]')
    }

    get continueToReview() {
        return cy.get('[data-testid="submit-payment-button"]')
    }

    get continueToPayment() {
        return cy.get('[data-testid="submit-delivery-option-button"]')
    }

    get continueToDelivery() {
        return cy.get('[data-testid="submit-address-button"]')
    }

    fakeExExpressRadio(option) {
        return cy.get('[data-testid="delivery-option-radio"]').contains(option)
    }

    get savedAddress() {
        return cy.get('[data-testid="shipping-address-radio"]')
    }

    get continueToCheckout() {
        return cy.get('[data-testid="checkout-button"]')
    }

    get addressButton() {
        return cy.get('[data-testid="shipping-address-select"] > span')
    }

}

export default CheckoutProccessPage
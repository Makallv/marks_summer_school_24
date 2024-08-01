import BasePage from "./Base.page";

class CheckoutProccessPage extends BasePage {
  constructor() {
    super();
  }

  get url() {
    return "/cart";
  }

  get firstNameInput() {
    return cy.get('[data-testid="shipping-first-name-input"]');
  }

  get successfullOrderText() {
    return cy.get(".h1-core > :nth-child(2)"); // maybe its possible to replace selector without pseudo CSS selector nth-child
  }

  get placeOrder() {
    return cy.get('[data-testid="submit-order-button"]'); // TODO: use cy.getByTestId
  }

  get continueToReview() {
    return cy.get('[data-testid="submit-payment-button"]'); // TODO: use cy.getByTestId
  }

  get continueToPayment() {
    return cy.get('[data-testid="submit-delivery-option-button"]'); // TODO: use cy.getByTestId
  }

  get continueToDelivery() {
    return cy.get('[data-testid="submit-address-button"]'); // TODO: use cy.getByTestId
  }

  deliveryOptionRadio(option) {
    return cy.get('[data-testid="delivery-option-radio"]').contains(option); // TODO: use cy.getByTestId
  }

  get savedAddress() {
    return cy.get('[data-testid="shipping-address-radio"]'); // TODO: use cy.getByTestId
  }

  get continueToCheckout() {
    return cy.get('[data-testid="checkout-button"]'); // TODO: use cy.getByTestId
  }

  get addressButton() {
    return cy.get('[data-testid="shipping-address-select"] > span'); // TODO: use cy.getByTestId
  }
}

export default CheckoutProccessPage;

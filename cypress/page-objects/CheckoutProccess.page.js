import BasePage from "./Base.page";

class CheckoutProccessPage extends BasePage {
  constructor() {
    super();
  }

  get url() {
    return "/cart";
  }

  firstNameInput(input) {
    return cy.getByTestId(input)
  }

  get successfullOrderText() {
    return cy.get(".h1-core > :nth-child(2)"); // maybe its possible to replace selector without pseudo CSS selector nth-child
  }

  get placeOrder() {
    return cy.get('[data-testid="submit-order-button"]');
  }

  get continueToReview() {
    return cy.get('[data-testid="submit-payment-button"]');
  }

  get continueToPayment() {
    return cy.get('[data-testid="submit-delivery-option-button"]');
  }

  get continueToDelivery() {
    return cy.get('[data-testid="submit-address-button"]');
  }

  deliveryOptionRadio(option) {
    return cy.get('[data-testid="delivery-option-radio"]').contains(option);
  }

  savedAddress(radio) {
    return cy.getByTestId(radio);
  }

  "shipping-address-radio"
  continueToCheckout(button) {
    return cy.getByTestId(button);
  }

  get addressButton() {
    return cy.get('[data-testid="shipping-address-select"] > span');
  }
}

export default CheckoutProccessPage;

import BasePage from "./Base.page";

class CheckoutProccessPage extends BasePage {
  constructor() {
    super();
  }

  get url() {
    return "/cart";
  }

  firstNameInput(input) {
    return cy.getByTestId(input);
  }

  get successfullOrderText() {
    return cy.get(".h1-core > :nth-child(2)"); // maybe its possible to replace selector without pseudo CSS selector nth-child
  }

  get placeOrder() {
    return cy.getByTestId("submit-order-button");
  }

  get continueToReview() {
    return cy.getByTestId("submit-payment-button");
  }

  get continueToPayment() {
    return cy.getByTestId("submit-delivery-option-button");
  }

  get continueToDelivery() {
    return cy.getByTestId("submit-address-button");
  }

  deliveryOptionRadio(option) {
    return cy.getByTestId("delivery-option-radio").contains(option);
  }

  savedAddress(radio) {
    return cy.getByTestId(radio);
  }

  continueToCheckout(button) {
    return cy.getByTestId(button);
  }

  get addressButton() {
    return cy.getByTestId("shipping-address-select");
  }
}

export default CheckoutProccessPage;

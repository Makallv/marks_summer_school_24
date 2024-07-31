import Pages from "../support/pages";

describe("Fullflow test for web store", () => {
  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("User can add to cart", () => {
    cy.visit("/store");
    Pages.homePage.visibleProducts("t-shirt").should("be.visible").click();
    Pages.productPage.addToCartButton().should("be.disabled");
    cy.selectVariant("L", "Black");
    Pages.productPage.addToCartButton().should("be.enabled").click();
  });

  it("User can add an address", () => {
    cy.visit(Pages.dashboardPage.url);
    cy.contains("div", "Hey there");
    cy.get(".animate-spin").should("not.exist");
    Pages.dashboardPage.addressLink.click();
    Pages.addressPage.addressTitle.should("exist");
    Pages.addressPage.addNewAddress.click();
    cy.fixture("addressInputs").then((inputs) => {
      cy.fixture("addressValues").then((values) => {
        for (const [i_key, i_value] of Object.entries(inputs)) {
          for (const [v_key, v_value] of Object.entries(values)) {
            if (i_key === v_key) {
              cy.fillInputs(i_value, v_value);
            }
          }
        }
      });
    });
    Pages.addressPage.saveButton.click();
    Pages.addressPage.addressContainer.should("have.length", 1);
  });

  it('User can checkout', () => {
    cy.visit(Pages.checkoutProccessPage.url);
    Pages.checkoutProccessPage.continueToCheckout.should('have.text', 'Go to checkout').click()
    Pages.checkoutProccessPage.addressButton.should('have.text', 'Choose an address').click()
    Pages.checkoutProccessPage.savedAddress.click()
    Pages.checkoutProccessPage.continueToDelivery.click()
    Pages.checkoutProccessPage.fakeExExpressRadio('FakeEx Express').click()
    Pages.checkoutProccessPage.continueToPayment.click()
    Pages.checkoutProccessPage.continueToReview.click()
    Pages.checkoutProccessPage.placeOrder.click()
    Pages.checkoutProccessPage.successfullOrderText.should('have.text', "Your order was placed successfully.")
  });

  it("User can log out", () => {
    cy.visit(Pages.dashboardPage.url);
    cy.contains("div", "Hey there");
    cy.get(".animate-spin").should("not.exist");
    Pages.dashboardPage.logout.click();
    cy.url().should("include", "/sign-in");
  });
});

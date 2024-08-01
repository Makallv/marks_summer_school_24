import Pages from "../../../support/pages";

describe("Fullflow test for web store", () => {
  beforeEach(() => {
    cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
  });

  // https://tdlschool.atlassian.net/browse/TSS22N-31
  it("User can add to cart", () => {
    cy.visit(Pages.homePage.url);
    Pages.homePage.visibleProducts("t-shirt").should("be.visible").click();
    Pages.productPage.addToCartButton().should("be.disabled");
    cy.selectVariant("XL", "Black");
    Pages.productPage.addToCartButton().should("be.enabled").click();
  });

  // https://tdlschool.atlassian.net/browse/TSS22N-194
  it("User can add an address", () => {
    cy.visit(Pages.dashboardPage.url);
    cy.contains("div", "Hey there");
    Pages.dashboardPage.animeSpin.should("not.exist");
    Pages.dashboardPage.pageLinks("Addresses").click();
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

  // https://tdlschool.atlassian.net/browse/TSS22N-190
  it("User can checkout", () => {
    cy.visit(Pages.checkoutProccessPage.url);
    Pages.checkoutProccessPage.continueToCheckout
      .should("have.text", "Go to checkout")
      .click();
    Pages.checkoutProccessPage.addressButton
      .should("have.text", "Choose an address")
      .click();
    Pages.checkoutProccessPage.savedAddress.click();
    Pages.checkoutProccessPage.firstNameInput.should("have.value", "FirstName");
    Pages.checkoutProccessPage.continueToDelivery.click();
    Pages.checkoutProccessPage.deliveryOptionRadio("FakeEx Express").click();
    Pages.checkoutProccessPage.continueToPayment.click();
    Pages.checkoutProccessPage.continueToReview.click();
    Pages.checkoutProccessPage.placeOrder.click();
    Pages.checkoutProccessPage.successfullOrderText.should(
      "have.text",
      "Your order was placed successfully.",
    );
  });

  // https://tdlschool.atlassian.net/browse/TSS22N-212
  it("User can see order details", () => {
    cy.visit(Pages.dashboardPage.url);
    Pages.dashboardPage.animeSpin.should("not.exist");
    Pages.dashboardPage.orderList.should("have.length.least", 1);
    cy.url().should("include", Pages.dashboardPage.url);
  });

  // https://tdlschool.atlassian.net/browse/TSS22N-46
  it("User can log out", () => {
    cy.visit(Pages.dashboardPage.url);
    cy.contains("div", "Hey there");
    Pages.dashboardPage.animeSpin.should("not.exist");
    Pages.dashboardPage.pageLinks("Log out").click();
    cy.url().should("include", "/sign-in");
  });
});

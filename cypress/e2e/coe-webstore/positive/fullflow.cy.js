import Pages from "../../../support/pages";

describe("Fullflow test for web store", () => {
  beforeEach(() => {
    Pages.basePage.visit();
    Pages.loginPage.emailInput.should("be.visible");
    cy.login(Cypress.env("username"), Cypress.env("password"));
    Pages.loginPage.signInButton.click();
  });

  it("User can add to cart", () => {
    Pages.homePage.visibleProducts("t-shirt").should("be.visible").click();
    Pages.productPage.addToCartButton().should('be.disabled')
    cy.selectVariant("L", "Black");
    Pages.productPage.addToCartButton().should('be.enabled').click()
  });

  it('User can add an address', () => {
    Pages.homePage.dashboardPageLink().click()
    cy.contains('div', 'Hey there')
    cy.get('.animate-spin').should('not.exist');
    Pages.dashboardPage.addressLink.click();
    Pages.addressPage.addressTitle.should('exist')
    Pages.addressPage.addNewAddress.click()
    Pages.addressPage.requiredImputs('').should('have.attr', 'required')
    Pages.addressPage.requiredImputs()
  })
});

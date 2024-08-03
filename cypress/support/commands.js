import Pages from "./pages";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Code below will create a session for the whole test if function is called upon
 * and assert that session was successfully created
 * @param email : string value of email for the account
 * @param password : string value of password for the account
 */
Cypress.Commands.add("login", (email, password) => {
  cy.session([email, password], () => {
    Pages.basePage.visit();
    Pages.loginPage.emailInput.type(email);
    Pages.loginPage.passwordInput.type(password);
    Pages.loginPage.signInButton.click();
    Pages.homePage.visibleProducts("t-shirt").should("be.visible");
  });
});

/**
 * Code below will help to select desired variant of a product
 * @param size : string value of size
 * @param colour : string value of colour
 */
Cypress.Commands.add("selectVariant", (size, colour) => {
  Pages.productPage.variant(size).click();
  Pages.productPage.variant(colour).click();
});

/**
 * Code below will find an element that has href attribute attached to it
 * @param address : string value to find an address or an element
 */
Cypress.Commands.add("getByHref", (address) => {
  cy.get(`[href="/us/${address}"]`);
});

/**
 * Code below will find elements that have attribute "data-testid" attached to them
 * @param id : string value of the desired element wished to be found
 */
Cypress.Commands.add("getByTestId", (id) => {
  cy.get(`[data-testid=${id}]`);
});

/**
 * Code below will find according inputs and fill them with the desired values
 * @param input : string value of an input to be filled
 * @param value : string value of value to be filled in an input
 */
Cypress.Commands.add("fillInputs", (input, value) => {
  if (input === "country-select") {
    Pages.addressPage.select(input).should("have.attr", "required");
    Pages.addressPage.select(input).select(value);
  } else {
    Pages.addressPage.requiredImputs(input).should("be.visible");
    Pages.addressPage.requiredImputs(input).type(value);
  }
});

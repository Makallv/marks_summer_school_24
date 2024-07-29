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

Cypress.Commands.add("login", (email, password) => {
  Pages.loginPage.emailInput.type(email);
  Pages.loginPage.passwordInput.type(password);
});

Cypress.Commands.add("selectVariant", (size, colour) => {
  Pages.productPage.variant(size).click();
  Pages.productPage.variant(colour).click();
});

Cypress.Commands.add('getByHref', (address) => {
  cy.get(`a[href="/us/${address}"]`)
})

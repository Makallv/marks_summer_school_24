import Pages from "../../../support/pages";
import UserData from "../../../support/UserData";

describe("Register a new account", () => {
  const RANDOM_FIRST_NAME = UserData.firstName();
  const RANDOM_LAST_NAME = UserData.lastName();
  const RANDOM_EMAIL = UserData.email();
  const RANDOM_PASSWORD = UserData.password();

  beforeEach(() => {
    Pages.basePage.visit();
  });

  // https://tdlschool.atlassian.net/browse/TSS22N-73
  it("User can't register with out password", () => {
    Pages.loginPage.registerLink.click();
    Pages.registerPage.registerFunc(
      RANDOM_FIRST_NAME,
      RANDOM_LAST_NAME,
      RANDOM_EMAIL,
      "",
    );
    Pages.registerPage.checkInputs(
      RANDOM_FIRST_NAME,
      RANDOM_LAST_NAME,
      RANDOM_EMAIL,
      "",
    );
    Pages.registerPage.registerButton.click();
    Pages.homePage.productArray.should("not.exist");
  });

  // https://tdlschool.atlassian.net/browse/TSS22N-56
  it("User can't register with out first name", () => {
    Pages.loginPage.registerLink.click();
    Pages.registerPage.registerFunc(
      "",
      RANDOM_LAST_NAME,
      RANDOM_EMAIL,
      RANDOM_PASSWORD,
    );
    Pages.registerPage.checkInputs(
      "",
      RANDOM_LAST_NAME,
      RANDOM_EMAIL,
      RANDOM_PASSWORD,
    );
    Pages.registerPage.registerButton.click();
    Pages.homePage.productArray.should("not.exist");
  });

  // https://tdlschool.atlassian.net/browse/TSS22N-75
  it("User can't register with incorrect email format", () => {
    Pages.loginPage.registerLink.click();
    Pages.registerPage.registerFunc(
      RANDOM_FIRST_NAME,
      RANDOM_LAST_NAME,
      RANDOM_FIRST_NAME,
      RANDOM_PASSWORD,
    );
    Pages.registerPage.checkInputs(
      RANDOM_FIRST_NAME,
      RANDOM_LAST_NAME,
      RANDOM_FIRST_NAME,
      RANDOM_PASSWORD,
    );
    Pages.registerPage.registerButton.click();
    Pages.homePage.productArray.should("not.exist");
  });

  it("User can't register by leaving fields empty", () => {
    Pages.loginPage.registerLink.click();
    Pages.registerPage.registerButton.click();
    Pages.homePage.productArray.should("not.exist");
  });

  // https://tdlschool.atlassian.net/browse/TSS22N-78
  it("User can't register by using the same email", () => {
    Pages.loginPage.registerLink.click();
    Pages.registerPage.registerFunc(
      RANDOM_FIRST_NAME,
      RANDOM_LAST_NAME,
      Cypress.env("USERNAME"),
      RANDOM_PASSWORD,
    );
    Pages.registerPage.checkInputs(
      RANDOM_FIRST_NAME,
      RANDOM_LAST_NAME,
      Cypress.env("USERNAME"),
      RANDOM_PASSWORD,
    );
    Pages.registerPage.registerButton.click();
    Pages.registerPage.registerError.should(
      "have.text",
      "Error: A customer with the given email already has an account. Log in instead.",
    );
  });
});

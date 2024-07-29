import BasePage from "./Base.page"

class DashboardPage extends BasePage {

    constructor(){
        super()
    }

    get addressLink() {
        return cy.getByHref("dashboard/addresses").filter(":visible")
    }

    get profileLink() {
        return cy.get('a[data-testid="profile-link"]')
    }

    get ordersLink() {
        return cy.get('a[data-testid="orders-link"]')
    }

    get logout() {
        return cy.get('button[data-testid="logout-button"]')
    }
}

export default DashboardPage
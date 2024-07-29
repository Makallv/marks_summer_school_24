import BasePage from "../page-objects/Home.page";
import LoginPage from "../page-objects/auth/Login.page";
import RegisterPage from "../page-objects/auth/Register.page";
import HomePage from "../page-objects/Home.page";
import ProductPage from "../page-objects/Product.page";
import DashboardPage from "../page-objects/Dashboard.page";
import AddressPage from "../page-objects/Address.page"

export class Pages {
  constructor() {
    this.basePage = new BasePage();
    this.loginPage = new LoginPage();
    this.registerPage = new RegisterPage();
    this.homePage = new HomePage();
    this.productPage = new ProductPage();
    this.dashboardPage = new DashboardPage();
    this.addressPage = new AddressPage()
  }
}

export default new Pages();

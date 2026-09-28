import { BasePage } from "./BasePage";

class PricingPage extends BasePage {
  get prices() {
    return cy.get("main").contains(/\$\d/);
  }
}

export const pricingPage = new PricingPage();

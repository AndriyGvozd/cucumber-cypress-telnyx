import { BasePage } from "./BasePage";

class PricingPage extends BasePage {
  // Pay-as-you-go section holds the price tables; only the active tab's tables are visible
  get priceTables() {
    return cy.get("#pay-as-you-go table:visible");
  }

  get prices() {
    return this.priceTables.first().contains("td", /\$\d/);
  }
}

export const pricingPage = new PricingPage();

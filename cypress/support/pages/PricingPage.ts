class PricingPage {
  get heading() {
    return cy.get("main h1").first();
  }

  get prices() {
    return cy.get("main").contains(/\$\d/);
  }
}

export const pricingPage = new PricingPage();

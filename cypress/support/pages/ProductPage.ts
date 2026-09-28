import { BasePage } from "./BasePage";

class ProductPage extends BasePage {
  get description() {
    return this.heading.parent().find("p").first();
  }

  cta(text: string) {
    return cy.get("main").contains("a", text);
  }
}

export const productPage = new ProductPage();

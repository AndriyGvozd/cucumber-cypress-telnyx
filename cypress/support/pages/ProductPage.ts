import { BasePage } from "./BasePage";

class ProductPage extends BasePage {
  // The first section of a product page is the hero; its id is a generated CMS id, so it is not used
  get hero() {
    return cy.get("main section:first-of-type");
  }

  get heading() {
    return this.hero.find<HTMLElement>("h1");
  }

  get description() {
    return this.hero.find("p").first();
  }

  heroLink(path: string) {
    return this.hero.find(`a[href="${path}"]`);
  }
}

export const productPage = new ProductPage();

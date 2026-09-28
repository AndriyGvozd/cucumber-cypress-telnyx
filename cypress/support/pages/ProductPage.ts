class ProductPage {
  get heading() {
    return cy.get("main h1").first();
  }

  get description() {
    return this.heading.parent().find("p").first();
  }

  cta(text: string) {
    return cy.get("main").contains("a", text);
  }
}

export const productPage = new ProductPage();

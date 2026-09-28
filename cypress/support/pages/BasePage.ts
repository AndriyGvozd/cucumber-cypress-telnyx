// Common parts of content pages; specific pages extend this class
export class BasePage {
  get heading() {
    return cy.get("main h1").first();
  }
}

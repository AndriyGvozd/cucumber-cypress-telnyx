import content from "../../fixtures/content.json";
import { BasePage } from "./BasePage";

class NotFoundPage extends BasePage {
  get errorCode() {
    return cy.contains("h2", content.notFound.errorCode);
  }

  get backToHomeLink() {
    return cy.get('main a[href="/"]:visible');
  }

  open(path: string) {
    // failOnStatusCode: false - the page responds with 404, which Cypress treats as an error by default
    cy.visit(path, { failOnStatusCode: false });
  }
}

export const notFoundPage = new NotFoundPage();

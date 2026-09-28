class NotFoundPage {
  get errorCode() {
    return cy.contains("h2", "404");
  }

  get heading() {
    return cy.get("main h1").first();
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

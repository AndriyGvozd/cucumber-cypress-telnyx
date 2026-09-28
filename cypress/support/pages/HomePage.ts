class HomePage {
  get heroHeadline() {
    return cy.get("#hero-headline");
  }

  open() {
    cy.visit("/");
  }
}

export const homePage = new HomePage();

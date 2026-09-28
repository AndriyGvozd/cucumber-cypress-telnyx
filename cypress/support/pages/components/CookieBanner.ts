class CookieBanner {
  get banner() {
    return cy.get("#onetrust-banner-sdk");
  }

  get acceptButton() {
    return cy.get("#onetrust-accept-btn-handler");
  }

  accept() {
    this.acceptButton.should("be.visible").click();
  }
}

export const cookieBanner = new CookieBanner();

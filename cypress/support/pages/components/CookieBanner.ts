import content from "../../../fixtures/content.json";

class CookieBanner {
  get banner() {
    return cy.get("#onetrust-banner-sdk");
  }

  // OneTrust either hides the banner or removes it from the DOM, so look only for a visible one
  get visibleBanner() {
    return cy.get("body").find("#onetrust-banner-sdk:visible");
  }

  get acceptButton() {
    return cy.get("#onetrust-accept-btn-handler");
  }

  // Accepts cookies once and caches the resulting OneTrust cookies with cy.session,
  // so the banner is already closed in every following test without an extra page load
  acceptOnce() {
    cy.session(
      "cookie-consent",
      () => {
        cy.visit("/");
        this.accept();
        cy.getCookie(content.cookies.consentCookie).should("exist");
      },
      { cacheAcrossSpecs: true },
    );
  }

  accept() {
    this.acceptButton.should("be.visible").click();
  }
}

export const cookieBanner = new CookieBanner();

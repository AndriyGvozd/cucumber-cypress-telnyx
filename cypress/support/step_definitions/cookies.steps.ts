import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { cookieBanner } from "../pages/components/CookieBanner";
import content from "../../fixtures/content.json";

When("I accept cookies", () => {
  cookieBanner.accept();
});

When("I reload the page", () => {
  cy.reload();
});

Then("the cookie banner should be visible", () => {
  cookieBanner.banner.should("be.visible");
});

Then("the cookie banner should not be visible", () => {
  cookieBanner.visibleBanner.should("not.exist");
});

Then("the cookie consent should be saved", () => {
  cy.getCookie(content.cookies.consentCookie).should("exist");
});

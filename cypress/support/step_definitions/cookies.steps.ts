import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { cookieBanner } from "../pages/components/CookieBanner";

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
  // OneTrust removes the banner from the DOM or hides it, both are valid
  cy.get("body").find("#onetrust-banner-sdk:visible").should("not.exist");
});

Then("the cookie consent should be saved", () => {
  cy.getCookie("OptanonAlertBoxClosed").should("exist");
});

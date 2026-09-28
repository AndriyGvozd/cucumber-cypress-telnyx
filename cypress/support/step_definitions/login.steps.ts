import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { header } from "../pages/components/Header";
import content from "../../fixtures/content.json";
import { LONG_TIMEOUT } from "../constants";

When("I click the Log in link in the header", () => {
  // The link opens in a new tab (target="_blank"); Cypress works in a single tab,
  // so we check the attribute and then open the link in the current tab
  header.logInLink.should("have.attr", "target", "_blank").invoke("removeAttr", "target").click();
});

Then("I should be redirected to the portal login page", () => {
  // Code inside cy.origin runs on another domain and cannot use outer variables,
  // so the data is passed in explicitly via args
  const { origin, ...portal } = content.portal;
  cy.origin(
    origin,
    { args: { ...portal, timeout: LONG_TIMEOUT } },
    ({ loginPath, title, heading, timeout }) => {
      cy.url({ timeout }).should("include", loginPath);
      cy.title().should("contain", title);
      cy.contains("h1, h2", heading).should("be.visible");
      cy.get('input[name="email"]').should("be.visible");
    },
  );
});

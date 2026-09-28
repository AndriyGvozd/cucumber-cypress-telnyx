import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { header } from "../pages/components/Header";

When("I click the Log in link in the header", () => {
  // The link opens in a new tab (target="_blank"); Cypress works in a single tab,
  // so we check the attribute and then open the link in the current tab
  header.logInLink
    .should("have.attr", "target", "_blank")
    .invoke("removeAttr", "target")
    .click();
});

Then("I should be redirected to the portal login page", () => {
  cy.origin("https://portal.telnyx.com", () => {
    cy.url({ timeout: 15000 }).should("include", "/login/sign-in");
    cy.title().should("contain", "Login");
    cy.contains("h1, h2", "Welcome Back").should("be.visible");
    cy.get('input[name="email"]').should("be.visible");
  });
});

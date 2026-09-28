import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("the URL should contain {string}", (path: string) => {
  cy.url().should("include", path);
});

Then("the page title should contain {string}", (text: string) => {
  cy.title().should("contain", text);
});

Then("the page heading should contain {string}", (text: string) => {
  cy.contains("h1, h2", text).should("be.visible");
});

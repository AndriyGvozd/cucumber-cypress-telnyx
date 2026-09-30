import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("the URL should contain {string}", (path: string) => {
  cy.url().should("include", path);
});

Then("the page title should contain {string}", (text: string) => {
  cy.title().should("contain", text);
});

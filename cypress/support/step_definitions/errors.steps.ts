import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { notFoundPage } from "../pages/NotFoundPage";

Then("the page {string} should respond with status {int}", (path: string, status: number) => {
  cy.request({ url: path, failOnStatusCode: false }).its("status").should("eq", status);
});

Given("I open the non-existent page {string}", (path: string) => {
  notFoundPage.open(path);
});

Then("the 404 page should be displayed", () => {
  notFoundPage.errorCode.should("be.visible");
  notFoundPage.heading.should("be.visible").and("contain.text", "this page doesn");
});

When("I click the Back to home link", () => {
  notFoundPage.backToHomeLink.should("be.visible").click();
});

Then("I should be on the home page", () => {
  cy.location("pathname").should("eq", "/");
});

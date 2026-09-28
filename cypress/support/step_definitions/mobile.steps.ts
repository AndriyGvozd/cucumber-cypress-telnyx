import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { mobileMenu } from "../pages/components/MobileMenu";

Given("I use the {string} viewport", (device: Cypress.ViewportPreset) => {
  cy.viewport(device);
});

When("I open the burger menu", () => {
  mobileMenu.open();
});

Then("the burger menu should be opened", () => {
  mobileMenu.burgerButton.should("have.attr", "aria-expanded", "true");
  mobileMenu.content.should("be.visible");
});

Then("the burger menu should contain items:", (table: DataTable) => {
  table.raw().forEach(([name]) => {
    mobileMenu.item(name).should("be.visible");
  });
});

When("I click the {string} link in the burger menu", (name: string) => {
  mobileMenu.link(name).should("be.visible").click();
});

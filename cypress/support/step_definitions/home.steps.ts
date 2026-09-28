import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../pages/HomePage";
import { header } from "../pages/components/Header";

Given("I open the home page", () => {
  homePage.open();
});

Then("the header should be visible", () => {
  header.root.should("be.visible");
});

Then("the logo should be visible", () => {
  header.logo.should("be.visible");
});

Then("the hero headline should be visible", () => {
  homePage.heroHeadline.should("be.visible").and("not.be.empty");
});

import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { productPage } from "../pages/ProductPage";

Then("the product heading should be {string}", (text: string) => {
  productPage.heading.should("be.visible").and("have.text", text);
});

Then("the product description should be visible", () => {
  productPage.description.should("be.visible").and("not.be.empty");
});

Then("the {string} button should be visible", (text: string) => {
  productPage.cta(text).should("be.visible");
});

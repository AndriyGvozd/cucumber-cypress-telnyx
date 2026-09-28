import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { pricingPage } from "../pages/PricingPage";

Then("the pricing heading should contain {string}", (text: string) => {
  pricingPage.heading.should("be.visible").and("contain.text", text);
});

Then("prices should be displayed", () => {
  pricingPage.prices.should("be.visible");
});

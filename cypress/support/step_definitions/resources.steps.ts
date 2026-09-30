import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { resourcesPage } from "../pages/ResourcesPage";

Then("the resources heading should be visible", () => {
  resourcesPage.heading.should("be.visible").and("not.be.empty");
});

Then("resource articles should be displayed", () => {
  resourcesPage.scrollToArticles();
  resourcesPage.visibleArticleLinks.should("have.length.greaterThan", 0);
});

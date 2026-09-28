import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { header } from "../pages/components/Header";

Then("the main menu should contain items:", (table: DataTable) => {
  table.raw().forEach(([item]) => {
    header.menuItem(item).should("be.visible");
  });
});

When("I open the {string} menu", (name: string) => {
  header.openMenu(name);
});

When("I click {string} in the menu", (name: string) => {
  header.dropdownLink(name).click();
});

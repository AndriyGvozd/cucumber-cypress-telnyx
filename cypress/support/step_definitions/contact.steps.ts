import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { contactPage } from "../pages/ContactPage";

Given("I open the contact us page", () => {
  contactPage.open();
  contactPage.form.should("be.visible");
});

When("I submit the contact form", () => {
  contactPage.submit();
});

Then("I should see the contact form error {string}", (text: string) => {
  contactPage.errorMessage.should("be.visible").and("contain.text", text);
});

Then("the following contact fields should be marked as invalid:", (table: DataTable) => {
  table.hashes().forEach(({ field }) => {
    contactPage.field(field).should("have.class", "mktoInvalid");
  });
});

Then("the contact us form should be visible", () => {
  contactPage.form.should("be.visible");
});

import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { footer } from "../pages/components/Footer";

When("I scroll to the footer", () => {
  footer.scrollIntoView();
});

Then("the footer should be visible", () => {
  footer.root.should("be.visible");
});

Then("the footer should contain social links:", (table: DataTable) => {
  table.hashes().forEach(({ network, url }) => {
    footer
      .socialLink(url)
      .should("have.length", 1)
      .and("be.visible")
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel")
      .and("include", "noopener");
    cy.log(`${network} link is valid`);
  });
});

Then("the footer legal links should be valid:", (table: DataTable) => {
  table.hashes().forEach(({ link, path }) => {
    footer.link(path).should("be.visible").and("contain.text", link);
  });
});

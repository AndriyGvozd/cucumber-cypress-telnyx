import { LONG_TIMEOUT } from "../constants";

class ContactPage {
  // Marketo form is loaded by a third-party script, so it can take longer to appear
  get form() {
    return cy.get("#mktoForm_1987", { timeout: LONG_TIMEOUT });
  }

  get submitButton() {
    return this.form.find('button[type="submit"]');
  }

  get errorMessage() {
    return cy.get(".mktoError:visible");
  }

  // Finds a field by its visible label, e.g. "First name"
  field(label: string) {
    return this.form
      .contains("label", label)
      .invoke("attr", "for")
      .then((id) => this.form.find(`#${id}`));
  }

  open() {
    cy.visit("/contact-us");
  }

  submit() {
    this.submitButton.should("be.visible").click();
  }
}

export const contactPage = new ContactPage();

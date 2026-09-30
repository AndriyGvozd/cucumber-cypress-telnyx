import { LONG_TIMEOUT } from "../constants";

class ContactPage {
  // Marketo form is loaded by a third-party script, so it can take longer to appear.
  // The id (mktoForm_<number>) changes if the form is replaced in Marketo, so we use the
  // generic Marketo class; the page also has an empty form with this class, hence :has(submit)
  get form() {
    return cy.get('form.mktoForm:has(button[type="submit"])', { timeout: LONG_TIMEOUT });
  }

  get submitButton() {
    return this.form.find('button[type="submit"]');
  }

  get errorMessage() {
    return this.form.find('.mktoErrorMsg[role="alert"]:visible');
  }

  // Field names are CRM (Marketo/Salesforce) field keys, more stable than visible labels
  field(name: string) {
    return this.form.find(`[name="${name}"]`);
  }

  open() {
    cy.visit("/contact-us");
  }

  submit() {
    this.submitButton.should("be.visible").click();
  }
}

export const contactPage = new ContactPage();

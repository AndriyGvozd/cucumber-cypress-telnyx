class SignUpPage {
  get form() {
    return cy.get('form[aria-label="signup-form"]');
  }

  get heading() {
    return cy.get("h1").first();
  }

  get emailInput() {
    return cy.get("#unified-sign-up-email");
  }

  get termsCheckbox() {
    return cy.get("#unified-sign-up-terms");
  }

  get emailError() {
    return cy.get("#unified-sign-up-email_message");
  }

  get termsError() {
    return cy.get("#unified-sign-up-terms_message");
  }

  open() {
    cy.visit("/sign-up");
  }

  submit() {
    this.submitButton.click();
  }

  get submitButton() {
    return this.form.find('button[type="submit"]');
  }
}

export const signUpPage = new SignUpPage();

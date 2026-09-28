import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { header } from "../pages/components/Header";
import { signUpPage } from "../pages/SignUpPage";

When("I click the Sign up button in the header", () => {
  header.signUpButton.click();
});

Then("the sign up form should be displayed", () => {
  signUpPage.heading.should("be.visible").and("contain.text", "Create your account");
  signUpPage.form.should("be.visible");
  signUpPage.emailInput.should("be.visible");
  signUpPage.termsCheckbox.should("exist");
  signUpPage.submitButton.should("be.visible").invoke("text").should("match", /create account/i);
});

Given("I open the sign up page", () => {
  signUpPage.open();
});

When("I leave all sign up fields empty", () => {
  signUpPage.emailInput.should("have.value", "");
  signUpPage.termsCheckbox.should("not.be.checked");
});

When("I submit the sign up form", () => {
  signUpPage.submit();
});

Then("I should see the email error {string}", (text: string) => {
  signUpPage.emailError.should("be.visible").and("contain.text", text);
  signUpPage.emailInput.should("have.attr", "aria-invalid", "true");
});

Then("I should see the terms error {string}", (text: string) => {
  signUpPage.termsError.should("be.visible").and("contain.text", text);
  signUpPage.termsCheckbox.should("have.attr", "aria-invalid", "true");
});

When("I enter {string} into the email field", (email: string) => {
  signUpPage.emailInput.clear().type(email);
});

When("I accept the Terms and Privacy Policy", () => {
  signUpPage.termsCheckbox.check({ force: true }).should("be.checked");
});

Then("the email field should be invalid", () => {
  signUpPage.emailInput.then(($input) => {
    const input = $input[0] as HTMLInputElement;
    expect(input.validity.valid, "email validity").to.be.false;
    expect(input.validationMessage, "browser validation message").not.to.be.empty;
  });
});

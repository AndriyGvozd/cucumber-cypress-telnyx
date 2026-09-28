Feature: Sign up

  @TC-7 @critical
  Scenario: Sign up page opens
    Given I open the home page
    When I click the Sign up button in the header
    Then the URL should contain "/sign-up"
    And the sign up form should be displayed

  @TC-8 @high
  Scenario: Sign up form validation with empty fields
    Given I open the sign up page
    When I leave all sign up fields empty
    And I submit the sign up form
    Then I should see the email error "Please enter an email address."
    And I should see the terms error "You must accept the Terms and Conditions."
    And the URL should contain "/sign-up"

  @TC-9 @high
  Scenario: Sign up form validation with invalid email
    Given I open the sign up page
    When I enter "test@" into the email field
    And I accept the Terms and Privacy Policy
    And I submit the sign up form
    Then the email field should be invalid
    And the URL should contain "/sign-up"

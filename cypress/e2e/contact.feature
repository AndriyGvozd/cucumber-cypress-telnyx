Feature: Contact us

  @TC-10 @medium
  Scenario: Contact form validation with empty fields
    Given I open the contact us page
    When I submit the contact form
    Then I should see the contact form error "This field is required."
    And the following contact fields should be marked as invalid:
      | How can we help?               |
      | First name                     |
      | Last name                      |
      | Business email                 |
      | Phone number                   |
      | Company website                |
      | How did you hear about Telnyx? |
    And the URL should contain "/contact-us"

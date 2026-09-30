Feature: Contact us

  @TC-10 @medium
  Scenario: Contact form validation with empty fields
    Given I open the contact us page
    When I submit the contact form
    Then I should see the contact form error "This field is required."
    And the following contact fields should be marked as invalid:
      | label                          | field                                 |
      | How can we help?               | Reason_for_Contact__c                 |
      | First name                     | FirstName                             |
      | Last name                      | LastName                              |
      | Business email                 | Email                                 |
      | Phone number                   | Phone_Number_Base__c                  |
      | Company website                | Website                               |
      | How did you hear about Telnyx? | How_did_you_hear_about_Telnyx_Open__c |
    And the URL should contain "/contact-us"

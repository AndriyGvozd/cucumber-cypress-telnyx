Feature: Home page

  @TC-01 @critical
  Scenario: Home page loads successfully
    Given I open the home page
    Then the page title should contain "Telnyx"
    And the header should be visible
    And the logo should be visible
    And the hero headline should be visible

Feature: Log in

  @TC-11 @critical
  Scenario: Log in link redirects to portal
    Given I open the home page
    When I click the Log in link in the header
    Then I should be redirected to the portal login page

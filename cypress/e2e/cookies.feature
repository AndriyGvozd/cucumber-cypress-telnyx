Feature: Cookie banner

  @TC-2 @high
  Scenario: Accept cookie banner
    Given I open the home page
    Then the cookie banner should be visible
    When I accept cookies
    Then the cookie banner should not be visible
    And the cookie consent should be saved
    When I reload the page
    Then the cookie banner should not be visible

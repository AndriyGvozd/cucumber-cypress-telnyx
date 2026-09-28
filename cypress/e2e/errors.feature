Feature: Error pages

  @TC-15 @low
  Scenario: Non-existent page shows 404
    Given I open the non-existent page "/products/non-existent-page-123"
    Then the page "/products/non-existent-page-123" should respond with status 404
    And the 404 page should be displayed
    When I click the Back to home link
    Then I should be on the home page

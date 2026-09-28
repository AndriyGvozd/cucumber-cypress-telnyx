Feature: Mobile navigation

  @TC-14 @medium
  Scenario: Burger menu on mobile viewport
    Given I use the "iphone-x" viewport
    And I open the home page
    When I open the burger menu
    Then the burger menu should be opened
    And the burger menu should contain items:
      | Products   |
      | Solutions  |
      | Pricing    |
      | Why Telnyx |
      | Resources  |
      | Developers |
    When I click the "Contact us" link in the burger menu
    Then the URL should contain "/contact-us"
    And the contact us form should be visible

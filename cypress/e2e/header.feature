Feature: Header navigation

  @TC-3 @high
  Scenario: Main navigation menu items are displayed
    Given I open the home page
    Then the main menu should contain items:
      | Products    |
      | Solutions   |
      | Pricing     |
      | Why Telnyx  |
      | Resources   |
      | Developers  |

  @TC-4 @medium
  Scenario: Voice API product page content
    Given I open the home page
    When I open the "Products" menu
    And I click "Voice API" in the menu
    Then the URL should contain "/products/voice-api"
    And the product heading should be "Voice API"
    And the product description should be visible
    And the "Talk to an expert" button should be visible

  @TC-5 @high
  Scenario: Pricing page opens from header
    Given I open the home page
    When I open the "Pricing" menu
    And I click "SMS API" in the menu
    Then the URL should contain "/pricing/messaging"
    And the pricing heading should contain "SMS API Pricing"
    And prices should be displayed

  @TC-6 @medium
  Scenario: Redirect to Resources page
    Given I open the home page
    When I open the "Resources" menu
    And I click "Resource center" in the menu
    Then the URL should contain "/resources"
    And the resources heading should be visible
    And resource articles should be displayed

Feature: Footer

  @TC-12 @low
  Scenario: Footer links are displayed and valid
    Given I open the home page
    When I scroll to the footer
    Then the footer should be visible
    And the footer legal links should open the correct pages:
      | link                         | path                  | heading              |
      | Privacy Policy               | /privacy-policy       | Privacy Policy       |
      | Website Terms and Conditions | /terms-and-conditions | Terms and Conditions |

  @TC-13 @low
  Scenario: Social media links in footer
    Given I open the home page
    When I scroll to the footer
    Then the footer should contain social links:
      | network  | url                                    |
      | LinkedIn | https://www.linkedin.com/company/telnyx |
      | X        | https://x.com/telnyx                   |
      | Facebook | https://www.facebook.com/Telnyx/       |

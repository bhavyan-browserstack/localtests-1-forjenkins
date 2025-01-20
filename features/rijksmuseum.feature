Feature: Validate the page title of the Automation Practice page
  @title
  Scenario: The user opens the Automation Practice homepage and checks the title
    Given I open the Automation Practice page
    Then the page title should be "Automation Practice - Ultimate QA"

#   @search @cucumber
#   Scenario: Searching for cucumber
#     Given I search "cucumber"
#     Then Body contains "Muskusroos (Rosa moschata) en komkommer (Cucumis sativus)"




  
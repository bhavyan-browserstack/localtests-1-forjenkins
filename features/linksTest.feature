Feature: Validate navigation for specific links based on href attribute

  @link @link1
  Scenario: Validate navigation for the "complicated-page" link
    Given I open the Automation Practice page for links
    When I find and click the link with href "../complicated-page"
    Then I should be redirected to the page with URL containing "https://ultimateqa.com/complicated-page"

    # Given I open the Automation Practice page for links
    When I find and click the link with href "../fake-pricing-page"
    Then I should be redirected to the page with URL containing "https://ultimateqa.com/automation/fake-pricing-page/"

    # Given I open the Automation Practice page for links
    When I find and click the link with href "https://ultimateqa.com/filling-out-forms/"
    Then I should be redirected to the page with URL containing "https://ultimateqa.com/filling-out-forms/"

    # Given I open the Automation Practice page for links
    When I find and click the link with href "../fake-landing-page"
    Then I should be redirected to the page with URL containing "https://ultimateqa.com/fake-landing-page"

    # Given I open the Automation Practice page for links
    When I find and click the link with href "https://ultimateqa.com/sample-application-lifecycle-sprint-1/"
    Then I should be redirected to the page with URL containing "https://ultimateqa.com/sample-application-lifecycle-sprint-1/"

    # Given I open the Automation Practice page for links
    When I find and click the link with href "http://courses.ultimateqa.com/users/sign_in"
    Then I should be redirected to the page with URL containing "https://courses.ultimateqa.com/users/sign_in"

    # Given I open the Automation Practice page for links
    When I find and click the link with href "../simple-html-elements-for-automation/"
    Then I should be redirected to the page with URL containing "https://ultimateqa.com/simple-html-elements-for-automation/"
    Then I fetch the browser console logs

    # Given I open the Automation Practice page for links
    # When I find and click the link with href "fake-pricing-page"
    # Then I should be redirected to the page with URL containing "https://ultimateqa.com/automation/fake-pricing-page/"


  # Examples:
  #   | hrefValue                    | expectedURL                       |
  #   | ../complicated-page                | https://ultimateqa.com/complicated-page             |
  #   # Uncomment the following lines to test additional scenarios
  #   | ../fake-pricing-page           | https://ultimateqa.com/automation/fake-pricing-page/                |
  #   # | fake-pricing-page           | /login-automation                 |
  #   # | filling-out-forms           | /fill-out-forms                   |
  #   # | sample-application-lifecycle-sprint-1 | sample-application-lifecycle-sprint-1 |
  #   # | users/sign_in               | users/sign_in                     |
  #   # | simple-html-elements-for-automation | simple-html-elements-for-automation |

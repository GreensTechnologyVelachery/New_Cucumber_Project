@Feature1
Feature: To validate the login functionality of facebook application

	@Regression
  Scenario: To validate login with invalid username and invalid password
    When User has to launch the url of the fb application
    When User has to pass the invalid username in email field
    And User has to pass the invalid password in password field
    And User has to click the login button
    And Whether user able to see the error page

	
	@Sanity @Regression
  Scenario Outline: To validate login with bulk of datas
    When To launch the facebook url
    And To pass the positive and negative "<emaildata>" usernames in email field
    And To pass the "<passworddata>" positive and negative password in password field
    And To click the login button

    Examples: 
      | emaildata        | passworddata |
      | java@gmail.com   | java@123     |
      | sel@gmail.com    | sel@123      |
      | python@gmail.com | python@123   |
      | sql@gmail.com    | sql@123      |

      
      
      
      
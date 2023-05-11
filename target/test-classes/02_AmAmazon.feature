@Feature2 @Endtoend
Feature: To validate the signin functionality of amazon application

	@Smoke @Sanity @Sample 
  Scenario: To validate signin with invalid email and invalid password
    When To launch the amazon application
    
    # One dimentional Map data
    And To pass invalid email in email field
      | emailone   | sql@gmail.com    |
      | emailtwo   | java@gmail.com   |
      | emailthree | python@gmail.com |
      
    And To click the continue button
    
    # Two dimentional Map data
    And To pass the invalid password in password field
      | passwordone | passwordtwo |
      | aws@123     | java@123    |
      |     4565432 | sel@123     |
      | python@113  | y32345754   |
      |      576543 | sql@123     |
      
    And To click the signin button

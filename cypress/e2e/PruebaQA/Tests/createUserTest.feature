Feature: I want to create a new user
    
  Scenario: Create new successful user
    Given entry to the url
    When Enter name and job
      | name      | job      |
      | morpheus  | leader   |   
    Then Validate successful user creation
   
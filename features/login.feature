@smoketest

Feature:WDIO Brown Bag Session

Scenario Outline: Automate application using WDIO+BDD
    Given the user is on the sauce lab page
    Then enter the <user name>
    Then the password value <password>
    Then click on Login 
    Then add items in the cart
    Then click on the cart container
    Then click on checkout  
    And the first name in the form is entered
    And the last name in the form is entered
    And the zipcode in the form is entered
    Then click on continue
    And then click on Finish

    Examples:
    |user name|password|
    | standard_user|secret_sauce1|
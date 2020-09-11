DS - 11 September 2020 - COMMITS MADE [SHA 918bb22]
Changes to HTML: 
    - changed Team member dropdown to text field input, but retained drop down menu code with <!----> just in case we need to reference it in future 
    - adjusted validation feedback text
    - adjusted validation feedback test parameters for other fields to be inline with task requirements
Changes to Javascript:
    - added validation feature to team member (ie. id="form-validate-assignee")
    ***added validation code for DUE DATE (DATEPICKER) but code is not complete, does not work. 
Verification activities completed: 
    - validation features for Task Name, Assigned to, Description of Task - OK
    - validation feature for due date: defaulted to 'invalid' - NEED TO FIX CODE TO MAKE IT FUNCTIONAL IN RESPONSE TO THE CORRECT SELECTION BEING MADE (IE. DATE IN THE FUTURE IS SELECTED).
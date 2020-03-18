# ELECTRIC LONGBOARD CALCULATOR TESTING
## Team Members:
Caleb Clough<br>
Austin Gray<br>
Max Smith<br>

# Automated Test Case Instructions
## Testing successful project build
Any time changes to the framework are made, in particular changes to the dependencies or file structure, the project should be tested to ensure it still builds when cloned into an empty directory. This ensures a new development environment can be setup in minutes. 

To test that the project builds on linux or Mac:
 - clone the project into an empty directory
 - run the shell script in the Setup folder in the top-level of project directory
 - verify that the app is running at http://localhost:4200/
 - use CTRL-C to stop serving app and exit script.

 Note: no automated build test for Windows currently.

## Testing that all Angular objects are working
Any time an Angular Component or Module or Service or otherwise is added, removed, or changed within the context of how it interacts with the rest of the app, the native Angular test suite should be ran to ensure that all components and routing is still viable. 
 - navigate to the project directory on command line
 - run `ng test` in order to run all unittests with Karma. 
 - review output in command line or in the automatically opened Chrome browser window to verify that tests all pass or to debug issues

## Testing calculations
### description
A python script has been provided for testing calculations on build page.<br> 

The script takes as input whatever specs user is testing, then also 
takes as input the output that our longboard calculator provides.<br>

The script does it's own calculations, then compares the output that 
the app provides against it's own calculations. It tests each calculation
individually and fails any calculations that are not within one of each other. 
Testing within a small range allows for easier testing by not requiring the full
float to be entered and also allows for slight differences in how floats may
be handled in the different implementations. 

### instructions
- run the app in dev evironment using `ng serve`.
- navigate to build page and provide input specs, then click submit.
- navigate to the test folder inside project folder "Team Alpha Wolf Squadron" with command line
- run the python script inside test folder using command `python3 test-calcs.py`
- provide the same identical inputs you did in the app
- provide the outputs your app gave within a decimal point or two
- verify that the python tests have passed. 


# User Acceptance Testing
## Testing navigation
Use case name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verify nav bar works<br>
Description<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User tests the nav bar menu to make sure that each button takes them to the expected page no matter where they are on site.<br>
Pre-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;None.<br>
Test steps:
   1. Navigate to Home page. Click the Home page. Nothing should happen. 
   2. Click the Build button on Nav bar. Build page should load. 
   3. Click the Compare  button on Nav bar. Compare page should load. 
   4. Verify home page loads from both Build and Compare pages.

Expected result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User should be able to navigate site<br>
Actual result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pages load successfully from anywhere.<br>
Status (Pass/Fail)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pass<br>

## Testing Auth0 login
Use case name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verify login and logout works<br>
Description<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Test the auth0 login functionality with Google login<br>
Pre-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User has valid Google account or app account<br>

Test steps:
   1. Navigate to login page in top right corner
   2. Choose to login in
   3. Choose Google account or enter valid username and password.
   4. Click login button and confirm additional prompts
   5. Verify home page loads and logout option appears.
   6. Choose to log out. 
   7. Verify log in option reappears.

Expected result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User should be able to login and logout.<br>
Actual result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User is navigated back to home page with successful login and visa versa.<br>
Status (Pass/Fail)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pass<br>
Notes<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N/A<br>
Post-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User is validated and logout prompt is replaces login prompt as well as reverse.<br>

## Testing build calculations feature
Use case name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Test creating builds<br>
Description<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User should be able to create builds using form on Build page and submit button.<br>
Pre-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;None.<br>
Test steps:
   1. Navigate to Build page
   2. Provide inputs into form fields under the inputs section
   3. Click "Submit" button. 
   4. Verify that results appear on right side of screen

Expected result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User should be able to provide inputs and run calculations in build page<br>
Actual result
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Calculations are run succesfully and results appear as expected<br>
Status (Pass/Fail)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pass<br>
Notes<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N/A<br>
Post-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Calculations results are provided. Inputs can be adjusted and re-run at any time.<br>

## Testing save build feature
Use case name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Test saving builds<br>
Description<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use should be able to save builds they like when logged in<br>
Pre-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User must be logged in.<br>
Test steps:
   1. Navigate to Build page while logged out and create build. 
   2. Verify there is no save feature or that save feature is disabled. 
   3. Log in. 
   4. Create a new build and verify that save feature is available. 
   5. Save feature and verify success using Compare feature

Expected result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User should be able to save builds when logged in.<br>
Actual result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No Save feature or compare freature currently implemented.<br>
Status (Pass/Fail)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAIL<br>
Notes<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N/A<br>
Post-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save feature required.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Compare feature required to determine whether save was ultimately successful.<br>

## Testing build comparisons feature
Use case name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Testing build comparisons<br>
Description<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User should be able to view saved builds on comparisons page.<br>
Pre-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User must be logged in. User must be able to save builds.<br>
Test steps:
   1. Navigate to build page and create a build if you have not already. Save it. 
   2. Repeat step 1 at least one more time. 
   3. Navigate to Compare page. 
   4. Verify that the new builds appear alongside any previously saved builds. 
   5. Log out. 
   6. Verify that saved builds no longer appear on compare page. 
Expected result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User should be able to review saved builds.<br>
Actual result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Compare feature not implemented yet.<br>
Status (Pass/Fail)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAIL<br>
Notes<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N/A<br>
Post-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Compare page contains any saved builds that are displayed side-by-side for comparison when user is logged in.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saved builds persist from session to session.<br>

## Testing delete build feature
Use case name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Testing delete build<br>
Description<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User should be able to delete saved builds from comparisons page.<br>
Pre-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User must be logged in. User must have previously save builds viewable from compare page.<br>
   
Test steps:
   1. Navigate to compare page. If no saved builds exist create some first. 
   2. Choose delete option from a previously saved build. 
   3. Verify that deleted build no longer exists.
   
Expected result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User should be able to delete saved builds.<br>
Actual result<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Compare feature not implemented yet.<br>
Status (Pass/Fail)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAIL<br>
Notes<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N/A<br>
Post-conditions<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deleted builds no longer exist and do not ever reappear.<br>
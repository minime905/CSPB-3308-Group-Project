# Electric Longboard Calculator
## Team Members:
Caleb Clough
Austin Gray
Max Smith

# AUTOMATED TEST CASE INSTRUCTIONS

## Testing successful project build
Any time changes to the framework are made, in particular changes to the dependencies or file structure, the project should be tested to ensure it still builds when freshly cloned into an empty directory. This ensures a new development environment can be setup in minutes without any headaches. 

To test that the project builds on linux or Mac:
 - clone the project into an empty directory
 - run the shell script in the Setup folder in the top-level of project directory
 - verify that the app is running at http://localhost:4200/
 - use CTRL-C to stop serving app and exit script. 


## Testing that all Angular objects are working
Any time an Angular Component or Module or Service or otherwise is added, removed, or changed within the context of how it interacts with the rest of the app, the native Angular test suite should be ran to ensure that all components and routing is still viable. 
 - navigate to the project directory on command line
 - run ```ng test``` in order to run all unittests with Karma. 
 - review output in command line or in the automatically opened Chrome browser window to verify that tests all pass or to debug issues

## Testing calculations
### Test Max Voltage Calculations
TODO

### Test Max Amp Hrs Calculations
TODO

### Test Motor RPM Calculations
TODO

### Test Gear Ratio Calculations
TODO

### Test Max Speed (MPH) Calculations
TODO

### Test Range Calculations
TODO

# USER ACCEPTANCE TESTING

## Testing navigation
Use case name
    Verify nav bar works
Description
    User tests the nav bar menu to make sure that each button takes them to the expected page no matter where they are on site.
Pre-conditions
    None.
Test steps
    1. Navigate to Home page. Click the Home page. Nothing should happen. 
    2. Click the Build button on Nav bar. Build page should load. 
    3. Click the Compare  button on Nav bar. Compare page should load. 
    4. Verify home page loads from both Build and Compare pages.
Expected result
    User should be able to navigate site
Actual result
    Pages load successfully from anywhere.
Status (Pass/Fail)
    Pass

## Testing auth0 login
Use case name
    Verify login and logout works
Description
    Test the auth0 login functionality with Google login
Pre-conditions
    User has valid Google account
Test steps
    1. Navigate to login page in top right corner
    2. Choose to login in
    3. Choose to login with Google account or valid username and password.
    4. Click login button
    5. Verify logout option appears. Verify this persists throughout site. 
    6. Choose to log out. 
    7. Verify log in option reappears.
Expected result
    User should be able to login. Option
Actual result
    User is navigated back to home page with successful login. The to
Status (Pass/Fail)
    Pass
Notes
    N/A
Post-conditions
    User is validated and login prompt is replaced with user account details. 

## Testing build calculations feature
Use case name
    Test creating builds
Description
    User should be able to create builds using form on Build page and submit button. 
Pre-conditions
    None. 
Test steps
    1. Navigate to Build page
    2. Provide valid inputs into form fields under the inputs section
    3. Click "Submit" button. 
    4. Click login button
Expected result
    User should be able to login
Actual result
    User is navigated to dashboard with successful login. Log out option appears. Logged out succcessfuly. 
Status (Pass/Fail)
    Pass
Notes
    N/A
Post-conditions
    User is validated with database and successfully signed into their account.
    The account session details are logged in database.

## Testing save build feature
Use case name
    Test saving builds
Description
    Use should be able to save builds they like when logged in
Pre-conditions
    User must be logged in. 
Test steps
    1. Navigate to Build page while logged out and create build. 
    2. Verify there is no save feature or that save feature is disabled. 
    3. Log in. 
    4. Create a new build and verify that save feature is available. 
    5. Save feature and verify success using Compare feature
Expected result
    User should be able to save builds when logged in. 
Actual result
    No Save feature currently implemented. 
Status (Pass/Fail)
    FAIL
Notes
    N/A
Post-conditions
    Compare feature required to determine whether save was ultimately successful. 

## Testing build comparisons feature

Use case name
    Testing build comparisons
Description
    User should be able to view saved builds on comparisons page. 
Pre-conditions
    User must be logged in. User must be able to save builds. 
Test steps
    1. Navigate to build page and create a build if you have not already. Save it. 
    2. Repeat step 1 at least one more time. 
    3. Navigate to Compare page. 
    4. Verify that the new builds appear alongside any previously saved builds. 
    5. Log out. 
    6. Verify that saved builds no longer appear on compare page. 
Expected result
    User should be able to review saved builds. 
Actual result
    Compare feature not implemented yet. 
Status (Pass/Fail)
    FAIL
Notes
    N/A
Post-conditions
    Compare page contains any saved builds that are displayed side-by-side for comparison when user is logged in. 
    Saved builds persist from session to session.

## Testing delete build feature

Use case name
    Testing delete build
Description
    User should be able to delete saved builds from comparisons page. 
Pre-conditions
    User must be logged in. User must have previously save builds viewable from compare page. 
Test steps
    1. Navigate to compare page. If no saved builds exist create some first. 
    2. Choose delete option from a previously saved build. 
    3. Verify that deleted build no longer exists. 
Expected result
    User should be able to delete saved builds. 
Actual result
    Compare feature not implemented yet. 
Status (Pass/Fail)
    FAIL
Notes
    N/A
Post-conditions
    Deleted builds no longer exist and do not reappear ever. 
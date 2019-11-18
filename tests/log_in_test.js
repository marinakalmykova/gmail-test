const loginSteps = require('../steps/login_steps');
const testData = require('../test_data/test_data');

const correctPassword = testData.password;

Feature('LogIn');

Scenario('Verify @login from home page', () => {

  loginSteps.loginWithCorrectPassword();
  loginSteps.verifyUserIsLoggedIn();

});

Scenario('Verify error with incorrect password', () => {
  loginSteps.loginWithIncorrectPassword();
  loginSteps.verifyErrorMessageIsDisplayed();
  loginSteps.enterPassword(correctPassword);
  loginSteps.verifyUserIsLoggedIn();

});

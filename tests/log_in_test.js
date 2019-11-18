const loginPage = require('../pages/login');
const testData = require('../test_data/test_data');

const correctPassword = testData.password;

Feature('LogIn');

Scenario('Verify @login from home page', () => {

  loginPage.loginWithCorrectPassword();
  loginPage.verifyUserIsLoggedIn();

});

Scenario('Verify error with incorrect password', () => {
  loginPage.loginWithIncorrectPassword();
  loginPage.verifyErrorMessageIsDisplayed();
  loginPage.enterPassword(correctPassword);
  loginPage.verifyUserIsLoggedIn();

});

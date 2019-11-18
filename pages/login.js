const I = actor();

const testData = require('../test_data/test_data');
const loginSteps = require('../steps/login_steps');

const email = testData.email;
const password = testData.password;
const incorrectPassword = testData.incorrectPassword;
const errorMessage = testData.errorMessage;

module.exports = {

  loginWithCorrectPassword() {
    loginSteps.openLoginForm();
    loginSteps.enterEmail(email);
    loginSteps.enterPassword(password);
  },

  verifyUserIsLoggedIn() {
    I.waitInUrl('/#inbox');
  },

  loginWithIncorrectPassword() {
    loginSteps.openLoginForm();
    loginSteps.enterEmail(email);
    loginSteps.enterPassword(incorrectPassword);
  },

  verifyErrorMessageIsDisplayed() {
    I.waitForElement(errorMessage);
  },
};

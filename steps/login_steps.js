const I = actor();

const testData = require('../test_data/test_data');
const loginPage = require('../pages/login');

const email = testData.email;
const password = testData.password;
const incorrectPassword = testData.incorrectPassword;
const errorMessage = testData.errorMessage;

module.exports = {

  loginWithCorrectPassword() {
    loginPage.openLoginForm();
    loginPage.enterEmail(email);
    loginPage.enterPassword(password);
  },

  verifyUserIsLoggedIn() {
    I.waitInUrl('/#inbox');
  },

  loginWithIncorrectPassword() {
    loginPage.openLoginForm();
    loginPage.enterEmail(email);
    loginPage.enterPassword(incorrectPassword);
  },

  verifyErrorMessageIsDisplayed() {
    I.waitForElement(errorMessage);
  },
};


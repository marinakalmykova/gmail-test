const I = actor();
const testData = require('../test_data/test_data');

const emailElement = testData.fields.email;
const passwordElement = testData.fields.password;
const nextButton = testData.nextButton;

module.exports = {

  openLoginForm() {
    I.amOnPage('/');
    I.see('Sign in');
    I.see('Continue to Gmail');
  },

  enterEmail(email) {
    I.waitForElement(emailElement, 5);
    I.fillField(emailElement, email);
    I.click(nextButton);
  },

  enterPassword(password) {
    I.waitForElement(passwordElement, 5);
    I.see('Welcome');
    I.fillField(passwordElement, password);
    I.waitForElement(nextButton);
    I.click(nextButton);
  },
};

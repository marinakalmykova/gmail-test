module.exports = {
  email: 'test.task.marina@gmail.com',
  password: 'TestPassword',
  incorrectPassword: '1TestPassword',
  fields: {
    email: { xpath: '//*[@name="identifier"]' },
    password: { xpath: '//*[@name="password"]' },
  },
  nextButton: { xpath: '//span[text()="Next"]' },
  errorMessage: { xpath: '//span[text()="Wrong password. Try again or click Forgot password to reset it."]'}
};

const { Given, When, Then } = require('@wdio/cucumber-framework')
const DemoPage = require('../pages/demo-page')
const demoPage = new DemoPage()
const CommonActions = require('../pages/common-actions')
const commonPage = new CommonActions()

Given(/^the user is on the sauce lab page$/, async function () {
  await demoPage.getHomePage()
})

Then (/^enter the (.*)$/, async function (username) {
  await demoPage.enterUserName(username)
}) 
Then (/^the password value (.*)$/, async function (password) {
  await demoPage.enterPassWord(password)                        
})
Then (/^click on Login$/, async function () {
  await demoPage.clickLogin()
})
Then (/^add items in the cart$/, async function () {
  await demoPage.clickAddToCart()
})
Then (/^click on the cart container$/, async function () {
  await demoPage.clickOnCart()
})
Then (/^click on checkout$/, async function () {
  await demoPage.clickOnCheckout()
}) 
Then (/^the first name in the form is entered$/, async function () {
  await demoPage.enterFirstName()
})
Then (/^the last name in the form is entered$/, async function () {
  await demoPage.enterLastName()
})
Then (/^the zipcode in the form is entered$/, async function () {
  await demoPage.enterZipCode()
})
Then (/^click on continue$/, async function () {
  await demoPage.clickOnContinue()
})
Then (/^then click on Finish$/, async function () {
  await demoPage.clickOnFinish()
})
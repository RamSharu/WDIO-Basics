const CommonActions = require('./common-actions')
const { expect } = require('chai')
const pgp = require('pg-promise')();



const USERNAME='#user-name';
const PASSWORD='//*[@id="password"]';
const LOGIN ='#login-button';
const ADD_TO_CART='#add-to-cart-sauce-labs-bolt-t-shirt';
const SHOPPING_CART='#shopping_cart_container';
const CHECKOUT='#checkout';
const FIRST_NAME='#first-name';
const LAST_NAME='#last-name';
const ZIP_CODE='#postal-code';
const CONTINUE='#continue';
const FINISH='#finish';


class DemoPage extends CommonActions {
  async getHomePage() {
       await this.open()
  }
  
  async enterUserName(username) {
    await this.sendKey(USERNAME,username)
  }
 
  async enterPassWord(password) {
    await this.sendKey(PASSWORD,password)
  }

  async clickLogin() {
    await this.clickOn(LOGIN)
  }

  async clickAddToCart() {
    await this.clickOn(ADD_TO_CART)
  }

  async clickOnCart() {
    await this.clickOn(SHOPPING_CART)
  }

  async clickOnCheckout() {
    await this.clickOn(CHECKOUT)
  }
  async enterFirstName() {
    await this.sendKey(FIRST_NAME,'Test')
  }
  async enterLastName() {
    await this.sendKey(LAST_NAME,'Demo')
  }
  async enterZipCode() {
    await this.sendKey(ZIP_CODE,'B153XH')
  }
  async clickOnContinue() {
    await this.clickOn(CONTINUE)
  }
  async clickOnFinish() {
    await this.clickOn(FINISH)
  }
}

module.exports = DemoPage
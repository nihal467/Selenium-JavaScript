// RegistrationPage.js

const { By, Key, until } = require('selenium-webdriver');

class RegistrationPage {
  constructor(driver) {
    this.driver = driver;
    this.fields = {
      firstname: {
        clickField: By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-personal-registration/entry-layout/div/div/div/entry-create-personal-form/form/div[2]/peb-form-background/div/two-column-form/div/peb-form-field-input[1]/div/div'), 
        inputField: By.xpath('//input[@formcontrolname="firstName"]'),
        value: ''
      },
      lastname: {
        clickField: By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-personal-registration/entry-layout/div/div/div/entry-create-personal-form/form/div[2]/peb-form-background/div/two-column-form/div/peb-form-field-input[2]/div/div'),
        inputField: By.xpath('//input[@formcontrolname="lastName"]'),
        value: ''
      },
      email: {
        clickField: By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-personal-registration/entry-layout/div/div/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[1]/div/div'),
        inputField: By.xpath('//input[@formcontrolname="email"]'),
        value: ''
      },
      password: {
        clickField: By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-personal-registration/entry-layout/div/div/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[2]/div/div'),
        inputField: By.xpath('//input[@formcontrolname="password"]'),
        value: ''
      },
      confirmpassword: {
        clickField: By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-personal-registration/entry-layout/div/div/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[3]/div/div'),
        inputField: By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-personal-registration/entry-layout/div/div/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[3]/div/div/div/input'),
        value: ''
      },
      companyname: {
        clickField: By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-business-registration/entry-layout/div/div/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/peb-form-field-input/div/div'),
        inputField: By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-business-registration/entry-layout/div/div/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/peb-form-field-input/div/div/div/input'),
        value: ''
      },
      phonenumber: {
        clickField: By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-business-registration/entry-layout/div/div/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/two-column-form/div/peb-form-field-input/div/div'),
        inputField: By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-business-registration/entry-layout/div/div/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div/two-column-form/div/peb-form-field-input/div/div/div/input'),
        value: ''
      }
    };
  }

  async enterFieldData(fieldKey, value) {
    let field = this.fields[fieldKey];
    let clickField = await this.driver.wait(until.elementLocated(field.clickField));
    await this.driver.wait(until.elementIsVisible(clickField));
    await this.driver.wait(until.elementIsEnabled(clickField));
    await clickField.click();

    let inputField = await this.driver.wait(until.elementLocated(field.inputField));
    await this.driver.wait(until.elementIsVisible(inputField));
    await this.driver.wait(until.elementIsEnabled(inputField));
    await inputField.clear();
    await inputField.sendKeys(value);
    field.value = value;
  }

  async navigateTo(url) {
    await this.driver.get(url);
  }
}

module.exports = RegistrationPage;

const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const RegistrationPage = require('./RegistrationPage');
const generateRandomEmail = require('./randomEmailGenerator');

(async function example() {
  const urls = [
    'https://commerceos.staging.devpayever.com/registration/fashion',
    'https://commerceos.staging.devpayever.com/registration/electronics',
    // Add more URLs here...
  ];

  let driver = await new Builder().forBrowser('chrome').build();
  try {
    for (let url of urls) {
      const registrationPage = new RegistrationPage(driver);
      await registrationPage.navigateTo(url);
      await registrationPage.enterFieldData('firstname', 'Mohammed');
      await registrationPage.enterFieldData('lastname', 'Nihal');
      await registrationPage.enterFieldData('email', generateRandomEmail());
      await registrationPage.enterFieldData('password', 'Test@123');
      await registrationPage.enterFieldData('confirmpassword', 'Test@123');

      // Click the submit button
      let submitButton = await driver.findElement(By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-personal-registration/entry-layout/div/div/div/entry-create-personal-form/form/div[2]/button'));
      await submitButton.click();

      // Wait for the next form to load
      await driver.sleep(2000);

      // Fill the next form fields
      await registrationPage.enterFieldData('companyname', 'My Company');
      await registrationPage.enterFieldData('phonenumber', '9400306814');

      // Click the submit button for the next form
      let nextSubmitButton = await driver.findElement(By.xpath('/html/body/app-root/app-lazy/entry-registration/entry-business-registration/entry-layout/div/div/div/entry-default-business-registration/button'));
      await nextSubmitButton.click();

      await driver.manage().setTimeouts({ pageLoad: 60000 });

      let popupButton = await driver.wait(until.elementLocated(By.xpath('/html/body/div[16]/div[2]/div/welcome-screen/div/div/button/pe-progress-button-content/div')));
      await driver.wait(until.elementIsVisible(popupButton));
      await popupButton.click();

      await driver.sleep(2000);

      // Perform your actions specific to each URL
    let transaction = await driver.findElement(By.xpath('/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[4]/div[2]'));
    let checkout = await driver.findElement(By.xpath('/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[1]/div[2]'));
    let connect = await driver.findElement(By.xpath('/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[2]/div[2]'));
    let products = await driver.findElement(By.xpath('/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[3]/div[2]'));
    let shop = await driver.findElement(By.xpath('/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[6]/div[2]'));
    let message = await driver.findElement(By.xpath('/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[9]/div[2]'));
    let settings = await driver.findElement(By.xpath('/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[17]/div[2]'));
    let pointofsale = await driver.findElement(By.xpath('/html/body/app-root/app-lazy/user-dashboard/base-dashboard/div/div/div/widgets-layout/div/div/apps-widget/pe-widget/div/div/div[1]/div[2]/pe-widget-icons/div/div/div/div[5]/div[2]'));

    console.log('transaction present :', await transaction.isDisplayed());
    console.log('checkout present :', await checkout.isDisplayed());
    console.log('connect present :', await connect.isDisplayed());
    console.log('products present :', await products.isDisplayed());
    console.log('shop present:', await shop.isDisplayed());
    console.log('message present:', await message.isDisplayed());
    console.log('settings present:', await settings.isDisplayed());
    console.log('pointofsale present:', await pointofsale.isDisplayed());

      await driver.get('https://commerceos.staging.devpayever.com/registration/fashion');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await driver.quit();
  }
})();

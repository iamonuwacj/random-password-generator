const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function loginTest(keyLen) {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    //navigate to facebook login page
    await driver.get("https://random-password-generator-six-eta.vercel.app/");
    // Select input elements and fill them out
    await driver.findElement(By.id("passLen")).sendKeys(keyLen);
    await driver.findElement(By.id("button")).click()
    // Select login button and invoke click action
    //If login details are correct we wiil be redirected to the welcome page
    let genPassword = await driver.findElement(By.id("password")).getAttribute("value")
    console.log(genPassword)
    // await driver.findElement(By.name("login")).click();
    // //On succesful login get page title
    // //Check page title, to confirm login was successful
    const pageTitle = await driver.getTitle();
    // // assert usign node assertion
    assert.strictEqual(pageTitle, "Random Password Generator");

  } finally {
    await driver.quit();
  }
}
loginTest(7);
loginTest(8);
loginTest(6);
loginTest(9);
loginTest(10);

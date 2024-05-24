// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("Add multiple books to cart", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("Add multiple books to cart", async function () {
    await driver.get("https://book-store-5l9x.onrender.com");
    await driver.manage().window().setRect({ width: 784, height: 824 });
    await driver.findElement(By.css(".book:nth-child(10)")).click();
    await driver.findElement(By.id("bookList")).click();
    await driver.findElement(By.css(".book:nth-child(20) > button")).click();
    await driver.findElement(By.css(".book:nth-child(19) > button")).click();
    await driver.findElement(By.css(".book:nth-child(17) > button")).click();
    await driver.findElement(By.css(".book:nth-child(18) > button")).click();
    {
      const element = await driver.findElement(
        By.css(".book:nth-child(18) > button")
      );
      await driver.actions({ bridge: true }).moveToElement(element).perform();
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body");
      await driver
        .actions({ bridge: true })
        .moveToElement(element, 0, 0)
        .perform();
    }
  });
});
// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("Window full size", function () {
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
  it("Window full size", async function () {
    await driver.get("https://book-store-5l9x.onrender.com");
    await driver.manage().window().setRect({ width: 1552, height: 840 });
  });
});
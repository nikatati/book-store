// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Search invalid book', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Search invalid book', async function() {
    await driver.get("http://bookstore11.azurewebsites.net/")
    await driver.manage().window().setRect({ width: 784, height: 824 })
    await driver.findElement(By.id("searchInput")).sendKeys("book 55")
    await driver.findElement(By.css("button:nth-child(3)")).click()
    assert(await driver.switchTo().alert().getText() == "No books found matching your search.")
  })
})

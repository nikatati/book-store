async function runSearchBookWithCapabilities(capabilities) {
  describe("Search book", function () {
    this.timeout(50000); // Increase timeout for grid tests
    let driver;

    beforeEach(async function () {
      driver = await new Builder()
        .forBrowser(capabilities.browserName)
        .usingServer("http://localhost:4444/wd/hub")
        .withCapabilities(capabilities)
        .build();
    });

    afterEach(async function () {
      await driver.quit();
    });

    it("Search book", async function () {
      await driver.get("http://bookstore11.azurewebsites.net/");
      try {
        // To maximize the window directly
        await driver.manage().window().maximize();
        // Or to minimize (thereby not normal but minimized which might help circumvent the issue)
        await driver.manage().window().minimize();
        // Then resize after minimizing if necessary
        await driver.manage().window().setRect({ width: 784, height: 824 });
      } catch (error) {
        console.error("Error adjusting window state: ", error);
      }
      await driver.findElement(By.id("searchInput")).click();
      await driver.findElement(By.id("searchInput")).sendKeys("book 10");
      await driver.findElement(By.css("button:nth-child(3)")).click();
    });
  });
}

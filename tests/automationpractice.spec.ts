import{test,expect, Locator} from '@playwright/test';
test('verify page title', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
  for (let i = 0; i < 4; i++) {
      const button: Locator = page.locator("//button[text()='STOP' or text()='START']");
    await button.click();
     await page.waitForTimeout(2000);

  }

})
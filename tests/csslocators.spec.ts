import{test, expect,Locator} from '@playwright/test';
test('verify css selectors', async ({page}) => {
   await page.goto('https://demowebshop.tricentis.com/'); 
   await expect(page.locator('#small-searchterms')).toBeVisible();
  //await page.locator("#small-searchterms").fill("shirt");
    await page.locator('.search-box-text').fill('pant');
      await page.locator('.search-box-text').clear();
        await page.waitForTimeout(3000);
   // await page.locator("[name=q]").fill("shirt");
   await page.locator('.search-box-text[value="Search store"]').fill('DRESS');


});
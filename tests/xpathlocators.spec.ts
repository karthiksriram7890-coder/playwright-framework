import { test, expect, Locator } from '@playwright/test';

test('xpath demo in playwright', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    
    const logo = page.locator("//img[@alt='Tricentis Demo Web Shop']");

    await expect(logo).toBeVisible()

    const products = page.locator("//h2/a[contains(@href, 'computer')]");
    const productCount = await products.count();
    console.log("Number of products:", productCount);
    expect(productCount).toBeGreaterThan(0);
    console.log("computer products found:", await products.nth(2).textContent());

let producttitle:string[] = await products.allTextContents();
for (let i = 0; i < producttitle.length; i++) {
    console.log(producttitle[i]);
}
    const pt:Locator = page.locator("//h2/a[starts-with(@href, '/build')]");
     const count:number= await pt.count();
    expect(count).toBeGreaterThan(0);

  const reglink=page.locator("//a[contains(text(),'Register')]");
   await expect(reglink).toBeVisible();

   const followUsLink = page.locator("//div[@class='column follow-us']//li[2]");
   await expect(followUsLink).toBeVisible();
   console.log("Follow us link text:", await followUsLink.textContent());

   const flu2= page.locator("//div[@class='column follow-us']//li[position()=3]");
      await expect(flu2).toBeVisible();
   console.log("Follow us text:", await flu2.textContent());
});
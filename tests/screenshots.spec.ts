import { test, expect } from '@playwright/test';
test('screenshot', async({page}) =>{

    await page.goto("https://demowebshop.tricentis.com/");
    const timestamp= Date.now();
    //await page.screenshot({path:'Screenshot/'+'homepage'+timestamp+'.png'})
    //await page.screenshot({path:'Screenshot/'+'fullpage'+timestamp+'.png', fullPage:true})
    const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
    await logo.screenshot({path:'Screenshot/'+'logo'+timestamp+'.png'})

})

test.only(' failure screenshot', async({page}) =>{

await page.goto("https://www.demoblaze.com/");
await page.getByRole('link', { name: 'Log in' }).click();
await page.locator('#loginusername').fill('pavanol');
await page.locator('#loginpassword').fill('test@123');
await page.getByRole('button', { name: 'Log in' }).click();
await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
})
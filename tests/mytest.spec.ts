import{test,expect} from '@playwright/test';

    
test('url',async ({page})=>{
    await page.goto('https://www.flipkart.com/');
    let url:string=await page.url();
    console.log(url);
    await expect(page).toHaveURL(/flipkart/);

})
import {test, expect, Locator} from '@playwright/test';
test('verify playwright locators',async ({page}) =>{
    await page.goto('https://automationexercise.com/');
    

   const logo:Locator = page.getByAltText('Website for automation practice')
   await expect(logo).toBeVisible();
   
  await expect(page.getByText('Features')).toBeVisible();
    await page.getByRole('link', { name: /Signup \/ Login/ }).click();
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
await page.locator('[data-qa="signup-name"]').fill('testuse123');
await page.locator('[data-qa="signup-email"]').fill('test13user@gmail.com');
await page.getByRole('button', { name: 'Signup' }).click();
await expect(page.getByRole('heading', { name: 'Enter Account Information' })).toBeVisible();
await expect(page.getByTitle('Compare Developer Tools')).toHaveText('Compare Developer Tools');

    


  
})
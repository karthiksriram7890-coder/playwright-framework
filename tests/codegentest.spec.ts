

import { test, expect } from '@playwright/test';

test('Login, dashboard and logout', async ({ page }) => {

  // 1. Open login page
  await page.goto('https://www.amazon.com/');
await page.getByText('Hello sign in').click();
await page.waitForTimeout(3000);
await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('+91 9750677357');

await page.locator('input[type="submit"]').click();
const logo = page.getByLabel('Amazon', { exact: true });
await expect(logo).toBeVisible();
await page.locator('#twotabsearchtextbox').fill('laptop');
await page.locator('#nav-search-submit-button').click();





  
  
});

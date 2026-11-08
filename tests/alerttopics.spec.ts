import { test, expect, type Locator } from '@playwright/test';
test('simplealert', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  page.on('dialog',  (dialog) =>{
    console.log("dialog message is:",dialog.message());
    expect(dialog.message()).toContain("I am an alert box!");
    dialog.accept();
  });
   await page.locator('#alertBtn').click();
})

test('confirmalert', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  page.on('dialog',  (dialog) =>{
    console.log("dialog message is:",dialog.message());
    expect(dialog.message()).toContain("Press a button!");
    dialog.dismiss();
  });
   await page.locator('#confirmBtn').click();
  const text:string =await page.locator('#demo').innerText();
  console.log("text is:",text);
  expect(text).toContain("You pressed Cancel!");
   await page.waitForTimeout(5000);
})

test.only('promptalert', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  page.on('dialog',  (dialog) =>{
    console.log("dialog message is:",dialog.message());
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    dialog.accept("John Wick");
  });
   await page.locator('#promptBtn').click();
  const text:string =await page.locator('#demo').innerText();
  console.log("text is:",text);
 await expect(page.locator('#demo')).toHaveText("Hello John Wick! How are you today?");
   await page.waitForTimeout(5000);
})





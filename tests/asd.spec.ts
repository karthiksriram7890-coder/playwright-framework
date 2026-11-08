import { test, expect, Locator } from "@playwright/test";
/*test("autosuggestdropdown", async ({ page }) => { 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 await page.getByPlaceholder('Username').fill('Admin');

await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button',{name:"Login"}).click();
await expect(page).toHaveURL(/dashboard/);
await page.getByText("PIM").click();
await page.locator("form i").nth(2).click();
await page.waitForTimeout(3000);

const options:Locator=page.locator("div[role='listbox'] span");
const count:number=await options.count();

console.log("numberof options :", count);

for(let i=0;i<count;i++){
   console.log(await options.nth(i).innerText());
    console.log(await options.nth(i).textContent());
}
for(let i=0;i<count;i++){
   const text=await options.nth(i).innerText();
   if(text=="Automation Tester"){

    await options.nth(i).click();
   }
}



});*/

test("autodropdown", async ({ page }) => { 
    await page.goto("https://demoqa.com/select-menu");
    await page.locator('#withOptGroup').click(); 
    await page.getByText('A root option', { exact: true }).click();
   await page.waitForTimeout(3000);
    await page.locator('#selectOne').click(); 
     await page.getByText('Mr.', { exact: true }).click();
     await page.locator("#oldSelectMenu").selectOption({label:'Green'});
      await page.waitForTimeout(3000);
});

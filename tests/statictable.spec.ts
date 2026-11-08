import { test, expect, type Locator } from '@playwright/test';

test('staticweb Table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table:Locator = page.locator("table[name='BookTable']");
  await expect(table).toBeVisible();

  const rows:Locator = table.locator("tbody tr");
 await expect(rows).toHaveCount(7);
 
  const secondrowtext:String[]= await rows.nth(3).locator("td").allInnerTexts();
  console.log("second row :", secondrowtext);

//const AmodBooks: string[] = [];
for (let i = 1; i < await rows.count(); i++) {
   // const cells = await rows.nth(i).locator("th,td").allInnerTexts();


   /* const bookName = cells[0];
    const authorName = cells[1];

    if (authorName === "Amod") {
        AmodBooks.push(bookName);
    }
}

 console.log("Amod books:", AmodBooks);

    expect(AmodBooks).toHaveLength(1);*/


    //for(const cell of cells){
     //   console.log(cell.trim());
   // }

    const price = await rows.nth(i).locator("td").nth(3).innerText();

    if (price.trim() === "500") {
    console.log(price);
    }

  }

});

test.only('paginator', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table:Locator = page.locator("table[name='BookTable']");
  await expect(table).toBeVisible();

  const rows:Locator = table.locator("tbody tr");
 await expect(rows).toHaveCount(7);
 
  const secondrowtext:String[]= await rows.nth(3).locator("td").allInnerTexts();
  console.log("second row :", secondrowtext);
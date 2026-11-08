import{test, expect,Locator}from '@playwright/test';

test('comparing method', async({page}) =>{

    await page.goto("https://demowebshop.tricentis.com/");
const products:Locator= page.locator(".product-title");
 // console.log(await products.nth(1).innerText());

 // console.log(await products.nth(1).textContent());

  const count =await products.count();
  
  for(let i=0; i<count;i++){
// console.log(await products.nth(i).innerText());
console.log(await products.nth(i).textContent());

//allinnertext and alltextcontent return all the value 
// alltextcontent - productsname.map(text =>text.trim())
  }

})
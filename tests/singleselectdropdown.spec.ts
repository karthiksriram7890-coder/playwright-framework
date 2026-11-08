import{test, expect, Locator} from "@playwright/test";  
/*test('singledropdown',async({page}) => {
     await page.goto('https://testautomationpractice.blogspot.com/');
   await page.locator("#country").selectOption("India");
  // await page.locator("#country").selectOption({value:'canada'});
 //  await page.locator("#country").selectOption({label:'France'});
//await page.locator("#country").selectOption({index:4});

const dropdownsoptions:Locator=page.locator("#country option");
await expect(dropdownsoptions).toHaveCount(10);
const Optiontext:String[]=(await dropdownsoptions.allInnerTexts()).map(text=> text.trim());
console.log(Optiontext);

for(const option of Optiontext){
  console.log(option);
}
})*/

test('multidropdown',async({page}) => {
     await page.goto('https://testautomationpractice.blogspot.com/');
  // await page.locator("#colors").selectOption(["Red","Blue","Green"]);using visible text
  //await  page.locator("#colors").selectOption(["red","blue","white"]); //using value attribute
 // await  page.locator("#colors").selectOption([{label:"Red"},{label:"Blue"}]) ;//using label
// await  page.locator("#colors").selectOption([{index:0},{index:4}])
//await page.waitForTimeout(3000);

//2 check number of option in dropdown count
const dropdownsoptions:Locator=page.locator("#colors option");
await expect(dropdownsoptions).toHaveCount(7);
const optiontext:String[]=(await dropdownsoptions.allInnerTexts()).map(text=> text.trim());
console.log(optiontext);

for(const option of optiontext)
  {
    console.log(option);
  }




})
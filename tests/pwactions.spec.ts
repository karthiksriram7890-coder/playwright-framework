import{test, expect,Locator} from '@playwright/test';
/*test('verify pwactions', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
   const textbox1 = page.locator('#name')
   await expect(textbox1).toBeVisible();
   await expect(textbox1).toBeEnabled();
   const maxLength = await textbox1.getAttribute("maxlength");
 expect(maxLength).toBe("15");
   await textbox1.fill("Test User");

 const enteredValue = await textbox1.inputValue();
 console.log("Entered value in the textbox is: " + enteredValue);
 expect(enteredValue).toBe("Test User");
 await page.waitForTimeout(3000);

})*/

test('radio button', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  const radio:Locator= page.locator('#male');
  await expect(radio).toBeVisible();
   await expect(radio).toBeEnabled();
  await radio.check();
   await expect(radio).toBeChecked(); 


})

test.only('checkbox', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const sunday:Locator= page.getByLabel("Sunday")
   await sunday.check();
await expect(sunda).toBeChecked();


  const days:string[]= ['Sunday', 'Monday', 'Tuesday',  'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const checkboxes:Locator[]= days.map(index => page.getByLabel(index));
 expect(checkboxes.length).toBe(7);

 for(const checkbox of checkboxes){
  await checkbox.check();
  await expect(checkbox).toBeChecked();
 }
 for(const checkbox of checkboxes.slice(-3)){
  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();
 }

  for(const checkbox of checkboxes){

    if(await checkbox.isChecked()){
   await checkbox.check();
   await expect(checkbox).toBeChecked();
    }else{
   await checkbox.uncheck();

   await expect(checkbox).not.toBeChecked();

    } 

const indexes:number[]=[2,4,5];

     for(const i of indexes){

   await checkboxes[i].check();

   await expect(checkboxes[i]).toBeChecked();
  

    }
  }

  





  

  



  })
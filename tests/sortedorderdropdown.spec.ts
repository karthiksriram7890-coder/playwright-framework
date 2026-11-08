import{test, expect, Locator} from "@playwright/test";  
test('multidropdown',async({page}) => {
     await page.goto('https://testautomationpractice.blogspot.com/');

     const dropdownsoptions:Locator=page.locator("#colors option"); //having duplicates

 const optiontext:string[]=(await dropdownsoptions.allInnerTexts()).map(text=> text.trim());

  /*const orginallist:String[]= optiontext;
  console.log("orginalvalue :", orginallist);

  const sortedlist:String[]= optiontext.sort();
  console.log("sortedvalue :", sortedlist);*/

 const myset= new Set<string>; //duplicates not allowed - set
 const duplicates: string[]=[]; // duplicates - array

 for (const text of optiontext){

    if(myset.has(text)){
        duplicates.push(text);
    }else{
    myset.add(text);
}
 }
 console.log(duplicates);
 
})
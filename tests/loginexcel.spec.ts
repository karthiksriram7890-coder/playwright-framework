import{test, expect}from '@playwright/test';
import { loginpage } from '../pages/loginpage'
import { LoginData, readExcel } from '../utils/excelreader';   


 const testdata:LoginData[] = readExcel('./test-data/logindata.xlsx', 'Users');
 
 test.describe("Login TestS-EXcel",() =>{

  for(const data of testdata ){

  if(data.run!=='yes') continue;

 test(`Login Test -${data.username}`, async ({ page }) => {
   const loginp = new loginpage(page);
   await test.step('go to login page', async()=>{
    await loginp.goToLoginPage();  
   });

  await test.step('perform login', async()=>{
    await loginp.login(data.username, data.password);
   });
  await test.step('validate result', async()=>{
  if(data.expected==='success'){
 await expect(page).toHaveURL(/inventory/);
  }else{
    await expect(loginp.errorMessage).toBeVisible();
  }

  })
  
            })

  }
})
    
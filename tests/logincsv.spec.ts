import{test, expect}from '@playwright/test';
import { loginpage } from '../pages/loginpage';

import { readCSV } from '../utils/CsvReader';

const lp = readCSV('./test-data/logindata.csv');

lp.forEach((data:any) => {
  if(data.run!=='true') return;

  test(`Login Test -${data.username}`, async ({ page }) => {
   const loginp = new loginpage(page);
  await loginp.goToLoginPage();  
  await loginp.login(data.username, data.password);
  if(data.expected==='success'){
 await expect(page).toHaveURL(/inventory/);
  }else{
    await expect(loginp.errorMessage).toContainText(data.error)
  }
  
  })
  

})
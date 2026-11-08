import{test, expect}from '@playwright/test';
import { loginpage } from '../pages/loginpage';
import logindata from '../test-data/logindata.json';

logindata.forEach((data) => {
  if(!data.run) return;

  test(`login test -${data.username}`, async ({ page }) => {
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

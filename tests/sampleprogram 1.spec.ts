import{test,expect} from '@playwright/test';
test('reverse string',async()=> {
     const input:String ="karthik is my life";
     let reversed:String= "";
     for(let i=input.length-1;i>=0;i--){
        reversed = reversed + input[i];
        
     }
     console.log("Reversed String:", reversed);
     expect(reversed).toBe("efil ym si kihtrak");
})




const {test,expect}= require('@playwright/test')

test ("launch app", async({page})=>{
    await page.goto("https://www.w3schools.com/")
    await page.waitForTimeout(2000)
    
    const title=await page.title();
    console.log("this is a title :"+title)


    const url=await page.url();
    console.log("this is a url :"+url)

})
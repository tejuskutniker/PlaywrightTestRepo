const {test,expect} = require('@playwright/test')

test("this is a first test",async function display(){
   await console.log("it is a first async");
})

test("thid is s second test",async function(){
    await console.log("it is a second async");
})

test("thid is s third test",async ()=>{
    await console.log("it is a third async");
})
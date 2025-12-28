const {test,expect} = require('@playwright/test')

test("this is a first test", function display(){
    console.log("it is a first playwright test");
})

test("thid is s second test", function(){
    console.log("it is a second playwright test");
})

test("thid is s third test", ()=>{
    console.log("it is a third playwright test");
})
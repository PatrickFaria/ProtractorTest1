describe('Protractor baby steps',function() {  


it('Open Angular js website',function() {

    browser.get("http://angularjs.org");
    browser.get("https://www.protractortest.org").then(function(){
        console.log("I am the last step to execute");
    })

})

//Each it block will be called as a spec

it('close browswer', function() {

// code to close browser
})



})
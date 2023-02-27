
const myfun = function(){//Anonymous function
    console.log("Pizza is ready");
}
//Callback function
function basicExample(isPizzaReady,myfun){//We can create arrow function here
    if(isPizzaReady){
        myfun();
    }
}
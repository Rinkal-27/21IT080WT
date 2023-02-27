const btnObj = document.getElementById("button");

console.log(typeof btnObj[0])
function myfun() {
    alert("Hello World");
}
btnObj[0].addEventListener("click", myfun());
//The problem here is we require naming of function
btnObj[0].addEventListener("click", function () {
    alert("Hello World");
});
//We used this anonymous function to reduce the complexity in naming of function
//Always have as minimum code in function
// btnObj[0].addEventListener("click", function () {
//    fun();
// });

//One more method
btnObj[0].onclick = function () {
    console.log("CLICKED");
}

//dothis
function dothis() {
    alert("Hello World");
}
//We can also deregister the event using removeListner
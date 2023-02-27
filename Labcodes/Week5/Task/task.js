document.getElementById("btn").addEventListener("click", function(){
    setInterval(displayTime, 1000);
});
//SetInterval function is used to call the displayTime function every 1000 milliseconds
//display time function is called every 1000 milliseconds
function displayTime(){
    var date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
    datefun();
}
function datefun(){
    var date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // const finaldate=`${day}/ ${month}/ ${year}`;
    // document.getElementById("date").innerHTML = finaldate;
    document.getElementById("date").innerHTML = `${day}/ ${month}/ ${year}`;
}




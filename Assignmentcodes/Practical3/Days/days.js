function calculate(){
    var date1 = new Date(document.getElementById("date1").value);
    var date2 = new Date(document.getElementById("date2").value);
    var difference = Math.abs(date2.getTime() - date1.getTime());
    var Days = Math.ceil(difference / (1000 * 3600 * 24));
    document.getElementById("result").innerHTML = Days;
}
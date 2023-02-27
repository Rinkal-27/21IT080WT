function calculate(){
    var dob = document.getElementById("dob").value;
    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var month = today.getMonth() - dobDate.getMonth();
    var day = today.getDate() - dobDate.getDate();

    if(month < 0 || (month == 0)){
        age = age - 1;
        month = 12 + month;
    }
    if(day < 0){
        month = month - 1;
        day = 30 + day;
    }

    document.getElementById("result").innerHTML = "Your age is " + age + " years" + " and " + month + " months" + " and " + day + " days";
}
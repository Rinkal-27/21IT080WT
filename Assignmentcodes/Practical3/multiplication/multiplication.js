function multiply(){
    var number = document.getElementById("number").value;
    var result = document.getElementById("result");
    
    result.innerHTML = "";
    for(var i=1; i<=10; i++){
        result.innerHTML += number + " x " + i + " = " + number*i + "<br>";
    }
}

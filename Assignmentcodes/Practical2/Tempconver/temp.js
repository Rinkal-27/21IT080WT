
function convert(){
        var celsius = document.getElementById("celsius").value;
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result").innerHTML = fahrenheit;
}

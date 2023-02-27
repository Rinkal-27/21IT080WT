function reverseString() {
    var string = document.getElementById("string").value;
    var reverse = "";
    for (var i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    document.getElementById("result").innerHTML =reverse;
}


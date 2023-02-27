function primeNumber(){
    var num = document.getElementById("num").value;
    var i = 2;
    for(i=2;i<=num;i++){
        var flag = 0;
        for(j=2;j<i;j++){
            if(i%j==0){
                flag = 1;
                break;
            }
        }
    if(flag==0){
            document.getElementById("result").innerHTML += i + " ";
        }
    }
}


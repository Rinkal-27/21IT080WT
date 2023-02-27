function display(){
    let isError = false;

    try{
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        //alert(phone)
        var college = document.getElementById("college").value;
        var year = document.getElementById("year").value;
        var branch = document.getElementById("branch").value;
        if(name == "" || email == "" || phone == "" || college == "" || year == "" || branch == ""){
            throw "Please fill all the fields";
        }
        else if(!validateEmail(email)){
            // document.getElementById("email").textContent = "Please enter a valid email address";
            // throw "Please enter a valid email address";
            document.getElementById("email").setCustomValidity("Please enter a valid email address");
            document.getElementById("email").reportValidity();
            isError = true;
        }
        else if(!validatePhone(phone)){
            // document.getElementById("phoneErr").textContent = "Please enter a valid phone number";
            // throw "Please enter a valid phone number";
            // document.getElementById("phone"). = 'Please Enter Valid Number';
            // document.getElementById("phone").style.color = 'red';
            // isError = true;

            document.getElementById("phone").setCustomValidity("Please enter a valid phone number");
            document.getElementById("phone").value='';
            // document.getElementById("phone").placeholder.style.placeholderColor='red';
            document.getElementById("phone").placeholder='Please Enter Valid Number';
            document.getElementById("phone").reportValidity();
            isError = true;
        }
        else{
            alert("Registration Successful");
        }

        if(isError){
            return false;
        }
    }
    catch(err){
        alert(err);
    }
}                        
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePhone(phone) 
{
    if(phone.length != 10){
        return false;
    }else{
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return re.test(phone);
    }
}
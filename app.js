

var validEmail = ["muzammilofficial49@gmail.com","test@example.com","saadali@gamil.com"];
var validPassword =["123456","12345678","123456789"];
document.getElementById("btn1").addEventListener("click", verify);
function verify(){
    var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var emailCheck = false;
var passwordCheck = false;
for(var i=0; i<validEmail.length; i++){
    if(email === validEmail[i]){
        emailCheck = true;
        break;
    }
}
for(var i=0; i<validPassword.length; i++){
    if(password === validPassword[i]){
        passwordCheck = true;
        break;
    }
}
if(emailCheck && passwordCheck){
    alert("login successfull");
}
else{
    alert("Invalid Email or Password");
}
}
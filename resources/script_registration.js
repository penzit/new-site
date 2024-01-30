let inputLogin = document.getElementById("login");
let inputPassword = document.getElementById("password");
let inputRegisterButton = document.getElementById("reg_button");
let inputTel = document.getElementById("tel");
let inputEmail = document.getElementById("email");




reg_button.onclick = function() {
    
    let valueLogin = inputLogin.value;
    let valuePassword = inputPassword.value;
    let valueEmail = inputEmail.value;
    let valueTel = inputTel.value;
    if(valueEmail.length != 0 && valuePassword.length != 0 && valueLogin.length != 0 && valueTel.length != 0){
        var httpReg = new XMLHttpRequest();
        httpReg.open("GET", "/auth/registration" + "/" + valueLogin + "/" + valuePassword + "/" + valueEmail + "/" + valueTel, false);
        httpReg.send();
        let  response = httpReg.responseText;
        alert(response);
        

    }
}

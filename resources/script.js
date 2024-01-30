let enterButton = document.getElementById("enterButton")
let inputLogin = document.getElementById("login")
let inputPassword = document.getElementById("password")




enterButton.onclick = function(){
    let valueLogin = inputLogin.value
    let valuePassword = inputPassword.value
    if (valueLogin.length !=0 && valuePassword.length != 0){
        var http = new XMLHttpRequest();
        http.open( "GET", "auth/login" + "/" + valueLogin + "/" + valuePassword, false); 
        http.send();
        let  response = http.responseText;
        if (response == "Correct!"){
            window.location.href = "/admin_panel"
        } else{
            alert("Incorrect!")
        }
        
    }
        
}







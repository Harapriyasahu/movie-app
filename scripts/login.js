let users = JSON.parse(localStorage.getItem("signupData"))
document.querySelector("form").addEventListener("submit", formSubmit)
    var form = document.querySelector("form");

    function formSubmit(event){
        event.preventDefault();
        var email = form.email.value;
        var password = form.password.value;

        var flag = false;
        for(var i = 0; i < users.length; i++){
            if(users[i].email == email && users[i].password == password){
                flag = true;
            }
        }

        if(flag == true){
            window.location.href="index.html"
        }
        else {
            alert("invalid Credentials");
        }
    }
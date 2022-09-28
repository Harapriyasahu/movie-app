let signupArr = JSON.parse(localStorage.getItem("signupData")) || [];
function signup(name, contact, email, password) {
    this.name = name;
    this.contact = contact;
    this.email = email;
    this.password = password;
}

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let signupObj = new signup(name, contact, email, password)
    if(name && contact && email && password){
        signupArr.push(signupObj);
        localStorage.setItem("signupData", JSON.stringify(signupArr));
        
        document.getElementById("name").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
    
})
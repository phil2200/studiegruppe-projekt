
//submit for log-in and sign-up, also amount of attempts allowed.
var submit = document.getElementById("submit");
var signup = document.getElementById("signup");
var attempt = 3;

// assigning existing user for test purposes
var existingUser = JSON.parse(localStorage.getItem("user"));
var currentLogin = [];

// when clicking submit, retrieve input from username and password box.
submit.onclick = function() {
    var usernameInput = document.getElementById("username").value ;
    var passwordInput = document.getElementById("password").value ;

}


//Get the entered details from HTML sign up page

let username = document.getElementById("username");

let phone = document.getElementById("phone");

let address = document.getElementById("address");

let email = document.getElementById("email");

let password = document.getElementById( "password");



// store these entered values to be called for later

function storeDetails() {
    localStorage.setItem("username", username.value);
    localStorage.setItem("userphone", phone.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

}



// Show stored values
function showDetails() {
    console.log("show stored info");
    console.log(localStorage)

}

// function to compare stored vs. entered values

function checkLogin() {
    //get stored values
    let storedName = localStorage.getItem( "username");
    let storedPassword = localStorage.getItem( "password");

    let enteredName = document.getElementById( "enteredName");
    let enteredPassword = document.getElementById("enteredPassword");

}
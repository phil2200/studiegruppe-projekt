//Get the entered details from HTML sign up page

var username = document.getElementById("username");

var phone = document.getElementById("phone");

var address = document.getElementById("address");

var email = document.getElementById("email");

var password = document.getElementById( "password");



// store these entered values to be called for later

function storeDetails() {
    localStorage.setItem("username", username.value);
    localStorage.setItem("userphone", phone.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

}


//submit for log-in and sign-up, also amount of attempts allowed.
var submit = document.getElementById("submit");
var sign_up = document.getElementById("sign_up");
var attempt = 3;

// assigning existing user for test purposes
var existingUser = JSON.parse(localStorage.getItem("user"));
var currentLogIn = [];

// when clicking submit, retrieve input from username and password box.
submit.onclick = function() {
    let usernameInput = document.getElementById("username").value ;
    let passwordInput = document.getElementById("password").value ;
}

//check if entered details match stored details. redirect to home page
for (let i = 0; i <existingUser.length; i++) {
    if (usernameInput == existingUser[i].username && passwordInput == existingUser[i].password) {
        //push username to current local storage
        currentLogIn.push({username: usernameInput})
        document.location.href = "SignUp.html";
        var IDString = JSON.stringify(currentLogin);
        localStorage.setItem('currentUser', IDString);

      /*  alert("you are logged in");

        else {
            alert("ERROR: Wrong details entered");
        } */ //ved ikke om disse alerts skal placeres her eller hvor ??  SPØRG TIRSDAG OM HVORDAN

        return true ;
    }
}

//if input doesnt match existing user, show to user also show amount of attempts left
    attempt--;
    alert("Username or Password invalid. You have" + attempt + "attempts left");
    if (attempt==0) {
        document.getElementById("username").disabled = true ;
        document.getElementById("password").disabled = true ;
        document.getElementById("submit").disabled = false;

        alert("Access denied. Are you sure you registeres? Go to our sign up page and try again :) ");
        return false;

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
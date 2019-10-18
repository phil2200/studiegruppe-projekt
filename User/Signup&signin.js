//Get the entered details from HTML sign up page
this.username = document.getElementById("username");
this.phone = document.getElementById("phone");
this.city = document.getElementById("city");
this.city = document.getElementById("zip")
this.address = document.getElementById("address");
this.email = document.getElementById("email");
this.password = document.getElementById( "password");

// store these entered values to be called for later
function storeDetails() {
    localStorage.setItem("username", username.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("city",city.value);
    localStorage.setItem("zip", zip.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    alert('new user has been created!');
    window.location = ("SignIn.html");
}



//submit for log-in and sign-up, also amount of attempts allowed.
//var attempt = 3;

// assigning existing user for test purposes
var signIn = document.getElementById('signIn')
var existingUser = JSON.parse(localStorage.getItem("User"));
var currentLogIn = [];

// when clicking submit, retrieve input from username and password box.
signIn.onclick = function() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    //check if entered details match stored details. redirect to home page
    for (let i = 0; i < existingUser.length; i++) {
        if (usernameInput == existingUser[i].username && passwordInput == existingUser[i].password) {
            //push username to current local storage
            currentLogIn.push({username: usernameInput})
            window.location = "loggedin.html";
            var IDString = JSON.stringify(currentLogIn);
            localStorage.setItem('currentUser', IDString);

            alert("you are logged in");
            return true;
        } else {
            alert("ERROR: Wrong details entered");
        }
    }


    //if input doesnt match existing user, show to user also show amount of attempts left
    /*attempt--;
    alert("Username or Password invalid. You have" + attempt + "attempts left");
    if (attempt == 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = false;

        alert("Access denied. Are you sure you registered? Go to our sign up page and try again :) ");
        return false;
    }*/
}



/*// Show stored values
function showDetails() {
    console.log("show stored info");
    console.log(localStorage)

}

// function to compare stored vs. entered values

function checkLogin() {
    //get stored values
    var storedName = localStorage.getItem( "username");
    var storedPassword = localStorage.getItem( "password");

    var enteredName = document.getElementById( "enteredName");
    var enteredPassword = document.getElementById("enteredPassword");

}

 */
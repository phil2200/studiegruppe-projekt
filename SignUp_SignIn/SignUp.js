// lav variables nednfor, remove else null, seperate sign up and sign in javascript.

//laver usernameInput som kan bruges i functionen storeDetails til at gemme i lpocal storage og yderligere validering.
        var usernameInput = String(username);
                console.log(usernameInput);

// gemmer indtastede detaljer i localstorage
function storeDetails() {
        localStorage.setItem("username", username);
        localStorage.setItem("phone", phone);
        localStorage.setItem("city", city);
        localStorage.setItem("zip", zip);
        localStorage.setItem("address", address);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

            alert('new user has been created!');
                window.location = ("SignIn.html");
                                                        }


// angiver test user og laver string fra indtastet om til objekt med json.parse.

    let signedUpButton = document.getElementById("SignedUp")
    let existingUser = JSON.parse(localStorage.getItem("User"));
    let currentLogIn = [];



//Get the entered details from HTML sign up page
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zip").value;
    var address = document.getElementById("address").value ;
    var email = document.getElementById("email").value ;
    var password = document.getElementById( "password").value ;








/*

// Show stored values
function showDetails() {
    console.log("show stored info");
    console.log(localStorage)

}


 */

// function to compare stored vs. entered values

/*
function checkLogin() {
    //get stored values
    var storedName = localStorage.getItem( "username");
    var storedPassword = localStorage.getItem( "password");

    var enteredName = document.getElementById( "enteredName");
    var enteredPassword = document.getElementById("enteredPassword");

}

*/
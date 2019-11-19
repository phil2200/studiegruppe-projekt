// lav variables nednfor, remove else null, seperate sign up and sign in javascript.

//laver usernameInput som kan bruges i functionen storeDetails til validering.
var usernameInput = String(username);
console.log(usernameInput);

// store these entered values to be called for later
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


// assigning existing user for test purposes
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



// validering af samtlige felter - inspiration fra tutorialrepublic.com

// definerer fejl eller error besked
function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
}

// her defineres validationForm funktionen
function validationForm() {
        var username = document.signUpForm.username.value;
        var phone = document.signUpForm.phone.value;
        var city = document.signUpForm.city.value;
        var zip = document.signUpForm.zip.value;
        var address = document.signUpForm.address.value;
        var email = document.signUpForm.email.value;
        var password = document.signUpForm.password.value;
        }

// angiver error variable til de ovenstående
        var usernameErr = phoneErr = cityErr = zipErr = addressErr = emailErr = passwordErr = true;

// validerer username
        if (username= "")  {
                printError("usernameErr", "Type in a username");
        } else {
                var regex = /^[a-zA-Z\s]+$/;

        }











/*
// Valider username

function validateUser() {
    if(username.length<8) {
        return false;

    }

}
 */
/*
// valider tlf
function validatePhone() {
    if(phone.isNaN) {
        return false;
    }
}
/*
    /*
    // Valider Telefonnummer

    if (isNaN(phone)) {

        document.getElementById("phone").innerHTML = "You must put in a phonumber that only contains numbers <br/>";
        form_valid = false;
    } else if (phone == "") {
        document.getElementById("validationPhone").innerHTML = "It is required to enter a phonenumber"
    }

    // valider city

    if(city == null || city == "") {
        // Tilføjer en besked
        document.getElementById("city").innerHTML = "You must fill in your current city <br/>";

        // sætter formen til false

        form_valid = false;
    }



// valider zip
    if (isNaN(zip)) {

        document.getElementById("zip").innerHTML = "You must put in a zip that only contains numbers <br/>";
        form_valid = false;
    } else if (phone == "") {
        document.getElementById("zip").innerHTML = "It is required to enter a zip code"
    }


// Valider E-mail

// vi undnytter her .indexOf() og .lastIndexOf()-metoderne på vores email variabel
    /*
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");

    if(atPos < 1 || dotPos> email.length-2 || dotPos<atPos) {
        document.getElementById("email").innerHTML = "Please put in a valid e-mail<br/>";
        form_valid = false;

    } else {
        document.getElementById("email").innerHTML = null;
    }

// Valider password

    if(password == null || password == "") {
        // Tilføjer en besked
        document.getElementById("password").innerHTML = "You must fill in your name <br/>";

        // sætter formen til false

        form_valid = false;
    }

// Alert, hvis form er true
    if(form_valid == true) {
        storeDetails()

        //Alert hvis alt er indtastet korrekt

        // Vi slutter funktionen af med at lave en alert besked for at se om alle de varible er blevet hentet ordentligt fra html dokumentet
        alert("Hi " + name
            + "\nphone: " + phone
            + "\ncity: " + city
            + "\nZip: " + zip
            + "\nEmail: " + email);

// Hvis form_valid = false, så skal dette retuneres
    } else {
        return false;
    }
// vi returnerer form_valid om den er sand eller falsk.
}


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
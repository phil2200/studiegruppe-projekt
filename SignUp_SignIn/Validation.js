
// validering af samtlige felter ved sign up - inspiration fra tutorialrepublic.com

// definerer fejl/ error besked

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//console.log()
// her defineres validationForm funktionen
function validationForm() {
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zip").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


// angiver error variable til de ovenstående med en standard værdi
    var usernameErr = true;
    var phoneErr = true;
    var cityErr = true;
    var zipErr = true;
    var addressErr = true;
    var emailErr = true;
    var passwordErr = true;


// validerer username
    if (username == "") {
        printError("usernameErr", "Type in a username");
    }
//angiver hvilke tegn username kan indeholde (tegn fundet på nettet)
    else {
        var regex = /^[a-zA-Z\s]+$/;

        //Hvilken error den skal printe og i hvilke situationer, defineres med if/else metode.

        if (regex.test(username) === false) {
            printError("usernameErr", "Enter a username using the standard alphabet");

        } else {
            printError("usernameErr", "");
            usernameErr = false;
        }
    }


// validering af email
    if (email == "") {
        printError("emailErr", "We would like you to enter an email-address");
    }
//definerer hvilke tegn emailen skal indeholde (tegn fundet på nettet)
    else {
        var regexMail = /^\S+@\S+\.\S+$/;

        if (regexMail.test(email) === false)

        //angiver besked der skal fremkomme ved forkert email indtastning
        {
            printError ("emailErr", "Check your email, it seems there is something wrong.");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }


//validering af tlf. nummer
    if (phone == "")

//angiver besked ved forkert/manglende tlf. nummer
    {
        printError("phoneErr", "Enter your phone number, so that we can call you ;)");
    } else {
        var regexPhone = /^[0-9]{8}$/;
        if (regexPhone.test(phone) === false){
            printError("phoneErr", "Something is wrong with your phone number, please check it! (it has to be 8 Digits");
        } else {
            printError("phoneErr", "");
            phoneErr = false;
        }

    }


//Validering af city, bruger tegn fra username
    if (city == "") {
        printError("cityErr", "Please enter a city");
    } else {
        var regexCity = /^[a-zA-Z\s]+$/;
        if (regexCity.test(city) === false) {
            printError("cityErr", "It seems your city is non-existent, it should only contain letters from A-Z.");

        } else {
            printError("cityErr", "");
            cityErr = false;
        }
    }

//Validering af ZIP, da vi er i DK og umiddelbart går ud fra den kun skal være max 4 cifre sætter vi den til max 4 cifre.
    if (zip == "") {
        printError("zipErr", "you have to enter a ZIP code");
    } else {
        printError("zipErr", "");
        zipErr = false;
    }
//indsætter bare "maxlength" property i <input> tag i html fremfor at overkomplicere det


//validering af addresse
    if (address == "") {
        //angiver error besked hvis der ikke indtastes noget
        printError("addressErr", "You must type an address, otherwise you cant receive your clothes");
    } else {
        //igen hvilke characters det kan indeholde
        var regexAddress = /^[a-zA-Z\s]+$/;
        if (regexAddress.test(address) === false) {
            printError("addressErr", "You have to type in a valid address");
        } else {
            printError("addressErr", "");
            addressErr = false;
        }
    }


// validerer password
    if (password == "") {
        printError("passwordErr", "Type in a password");
    }
//angiver hvilke tegn password kan/skal indeholde
    else {
        var regexPassword = /^[a-zA-Z\s]+$/;

        //Hvilken error den skal printe og i hvilke situationer, defineres med if/else metode.

        if (regexPassword.test(password) === false) {
            printError("passwordErr", "Enter a password using standard characters");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }


//forhindrer formen og storeDetails funktion i at blive kørt hvis der er en fejl
    if ((usernameErr || phoneErr || cityErr || zipErr || addressErr || emailErr || passwordErr) == true) {
        console.log("Test")
       console.log( phoneErr, cityErr, zipErr, addressErr, emailErr, passwordErr)

       // function abc() {
            return false;
        //}

        // return false;
        //hvorfor siger den out of

    } else {

        //laver ny string der viser hvad man har indtastet.

        var dataPreview = "you have entered all the following details: \n" +
            "Full name: " + username + "\n" +
            "Email address: " + email + "\n" +
            "Mobile number: " + phone + "\n" +
            "City: " + city + "\n" +
            "ZIP: " + zip + "\n" +
            "Address: " + address + "\n" +
            "Password: We won't show this to anyone :)";

        // alerter hvad bruger har indtastet.
        alert(dataPreview);
        storeDetails()
    }

}

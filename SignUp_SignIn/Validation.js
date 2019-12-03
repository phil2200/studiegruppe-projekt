/// tager klassen fra userDB og bruger her til at sætte
class User {
    constructor(username, password, phone, city, zip, address, email) {
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.email = email;
    }
}

// EMDL: Objekterne hentes fra ClassUser.js så man vil kunne se information hos de forskellige bruger under UserProfilde
var userList = []; // EMDL: den vil automatisk tage informationen i rækkefølgen som i klassen
// EMDL: jeg pusher new User op i det tomme array
userList.push(new User("test1","1234567",  "+45 22 41 90 32", "Frederiksberg C", "1954", "Hostrups Have 30, 4tv", "emma.laursen.97@hotmail.com"));
userList.push(new User("test2","2345678", "+45 20 61 38 44", "Dubai", "1234", "Al Barsha 2", "Alexander123@hgmail.com"));
userList.push(new User("test3","3456789", "+45 30 27 44 93", "Jyllinge", "4040", "Korskildevej 12", "joergensen.philip@gmail.com"));

// EMDL: jeg laver mit array til en string med JSON.stringify og gemmer det i Local Storage
var userListString = JSON.stringify(userList);
localStorage.setItem("User", userListString);


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
//definerer hvilke tegn emailen skal indeholde (Regex tegn fundet på nettet)
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

//angiver besked ved forkert/manglende tlf. nummer (Regex fundet på stackoverflow)
    {
        printError("phoneErr", "Enter your phone number, so that we can call you ;)");
    } else {
        var regexPhone = /^[0-9]{8}$/;
        if (regexPhone.test(phone) === false){
            printError("phoneErr", "Something is wrong with your phone number, please check it! (it has to be 8 Digits)");
        } else {
            printError("phoneErr", "");
            phoneErr = false;
        }

    }


//Validering af city, bruger tegn fra username
    if (city == "") {
        printError("cityErr", "Please enter a city");
    } else {
        // (Regex fundet på stackoverflow)
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
        //igen hvilke characters det kan indeholde (Regex fundet på stackoverflow)
        var regexAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
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
//angiver hvilke tegn password kan/skal indeholde (Regex fundet på stackoverflow)
    else {
        var regexPassword = /^[a-zA-Z0-9\s,.'-]{3,}$/;

        //Hvilken error den skal printe og i hvilke situationer, defineres med if/else metode.

        if (regexPassword.test(password) === false) {
            printError("passwordErr", "Enter a secure password");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }


//forhindrer formen og storeDetails funktion i at blive kørt hvis der er en fejl i en af de førnævnte errors

    if ((usernameErr || phoneErr || cityErr || zipErr || addressErr || emailErr || passwordErr) == true) {

            return false;


    } else {

        //laver ny string der viser hvad man har indtastet.

        var dataPreview = "You have entered the following details: \n" +
            "Username: " + username + "\n" +
            "Email address: " + email + "\n" +
            "Mobile number: " + phone + "\n" +
            "City: " + city + "\n" +
            "ZIP: " + zip + "\n" +
            "Address: " + address + "\n" +
            "Password: We won't show this to anyone :)";

        // laver ny variable og parser det fra localstorage
        var createdUser = JSON.parse(localStorage.getItem("User"));
        console.log(createdUser);

        //createdUser.push(username, password, phone, city, zip, address, email);
        //pusher ny user ind i array
        createdUser.push(new User(username, password, phone, city, zip, address, email));

        //adder en user mere i array
        console.log(createdUser);

        // her laver vi den til en string
        var newUserAdded = JSON.stringify(createdUser);

        //tilføjer den til localstorage
        localStorage.setItem("User", newUserAdded);

        // alerter hvad bruger har indtastet.
        alert(dataPreview);
        alert('new user has been created!');

        console.log(newUserAdded);
        window.location = ("SignIn.html");
    }

}


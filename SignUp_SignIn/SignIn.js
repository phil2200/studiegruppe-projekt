var signIn = document.getElementById('signIn');
    var existingUser = JSON.parse(localStorage.getItem('User'))

// when clicking submit, retrieve input from username and password box.
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //check if entered details match stored details. redirect to home page
    for (let i = 0; i < existingUser.length; i++) {
        if (username === existingUser[i].username && password === existingUser[i].password) {

            // EMDL: laver en currentUser, som skal vise brugeroplysninger på den bruger, der logger ind
            // EMDL: JSON.stringify converts a JavaScript object or value to JSON string (JavaScript Object Notation)
            localStorage.setItem('currentUser', JSON.stringify(existingUser[i]));
            location.href = "loggedIn.html";

            // EMDL: alert "you are logged in", hvis oplysninger er korrekte og allers aleret "Wrong username or password"
            alert("You are logged in");
            return true;
        }
    }
    alert("Wrong username or password")
    }

/*

// funktion der tjekker om detaljer i localstorage passer, herefter logger ind.
// dvs. når vi senere vil gøre det muligt at oprette egne brugere, bliver den godkendt/afvist ved log in.

    function checkUserLogin() {

        // henter gemte info fra localstorage.
        var storedName = localStorage.getItem(username);
        var storedPassword = localStorage.getItem(password);

        //henter indtastet info
        var enteredUsername = document.getElementById("username");
        var enteredPassword = document.getElementById("password");

        //checker om de passer. og hvis de gør redirect.
        if (enteredUsername.value !== storedName || enteredPassword.value !== storedPassword)
        {
            alert ('Wrong details entered')
        }
            else {
                alert('you are logged in');
           location.href = "loggedIn.html";
        }

    }

 */

    //if input doesnt match existing user, show to user also show amount of attempts left
 /*   attempt--;
    alert("Username or Password invalid. You have" + attempt + "attempts left");
    if (attempt == 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = false;

        alert("Access denied. Are you sure you registered? Go to our sign up page and try again :) ");
        return false;
    } */
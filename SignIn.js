
var signIn = document.getElementById('signIn');
var existingUser = JSON.parse(localStorage.getItem('User'))
// when clicking submit, retrieve input from username and password box.
 function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //check if entered details match stored details. redirect to home page
    for (let i = 0; i < existingUser.length; i++) {
        if (username == existingUser[i].username && password == existingUser[i].password) {

            //push username to current local storage
            //currentLogIn.push({username: usernameInput});
            // udkommenteret fordi currentLogin ikke findes.


            //window.open('/loggedln.html');
            // var IDString = JSON.stringify(currentLogIn);
            //udkommenteret fordi currentLogin stadig ikke findes
            //localStorage.setItem('currentUser', IDString);
            //udkommenteret

            // laver en currentUser2 for ikke at ødelægge noget i den oprindelige (kan blive slettet, hvis det hele kører)
            // JSON.stringify converts a JavaScript object or value to JSON string (JavaScript Object Notation)
            localStorage.setItem('currentUser2', JSON.stringify(existingUser[i]));

            location.href = "loggedIn.html";

            alert("you are logged in");
            return true;
        }
    }
    alert("wrong!")
}
/*
// funktion der tjekker om detaljer i localstorage passer, herefter logger ind.
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


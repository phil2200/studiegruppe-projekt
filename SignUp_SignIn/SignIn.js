


// denne fil er lavet af Alexander med biddrag fra Emma ved createduser, localstorage og eventlistener (der hvor hun har kommenteret).



// when clicking submit, retrieve input from username and password box.
// EJJ - Code Review: Her mangler en brugerprofil-knap, således man ikke SKAL logge ind hver gang for at se sin profil.
function login() {
    var createdUser = JSON.parse(localStorage.getItem('User'));
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //check if entered details match stored details. redirect to home page
    for (let i = 0; i < createdUser.length; i++) {
        if (username === createdUser[i].username && password === createdUser[i].password) {

            // EMDL: laver en currentUser, som skal vise brugeroplysninger på den bruger, der logger ind
            // EMDL: JSON.stringify converts a JavaScript object or value to JSON string (JavaScript Object Notation)
            localStorage.setItem('currentUser', JSON.stringify(createdUser[i]));
            location.href = "loggedIn.html";

            // alert "you are logged in", hvis oplysninger er korrekte og allers aleret "Wrong username or password"
            alert("You are logged in");
            return true;
        }
    }
    alert("Wrong username or password. If you don't have an account, please sign up")
}

// EMDL: klik enter for at logge ind, henter signin ID'et og bruger en EventListener til at indikere eventet ved klik
// EMDL: laver en default for at den ikke står og refresher, men den kommer videre og til sidst kaldes funktionen
document.getElementById('signIn').addEventListener('click', function (event) {
    event.preventDefault();
    login();
});

/*

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
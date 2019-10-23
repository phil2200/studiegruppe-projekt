
var signIn = document.getElementById('signIn');
var existingUser = JSON.parse(localStorage.getItem('User'))
// when clicking submit, retrieve input from username and password box.
function login() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    //check if entered details match stored details. redirect to home page
    for (let i = 0; i < existingUser.length; i++) {
        if (usernameInput == existingUser[i].username && passwordInput == existingUser[i].password) {
            location.href = "loggedIn.html"

            //push username to current local storage
            currentLogIn.push({username: usernameInput});


            //window.open('/loggedln.html');
            var IDString = JSON.stringify(currentLogIn);
            localStorage.setItem('currentUser', IDString);

            alert("you are logged in");
            return true;

        } else {
            alert("ERROR: Wrong details entered");
        }
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
    } */


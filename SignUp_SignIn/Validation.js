
// validering af samtlige felter ved sign up - inspiration fra tutorialrepublic.com

// definerer fejl/ error besked

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// her defineres validationForm funktionen
function validationForm() {
     var userName = document.signUpForm.username.value;
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
    if ( username == " " )  {
       printError("usernameErr", "Type in a username");
                          }
        //angiver hvilke tegn username kan indeholde
        else {
            var regex = /^[a-zA-Z\s]+$/;

                    //Hvilken error den skal printe og i hvilke situationer, defineres med if/else metode.

                if(regex.test(username)===false){
                        printError("usernameErr","Enter a username using the permitted letters");
                                                   }
                    else {
                         printError("usernameErr", "");
                          usernameErr = false
                            }
                }


      // validering af email
        

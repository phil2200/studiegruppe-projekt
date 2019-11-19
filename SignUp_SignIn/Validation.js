
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
    if (username == " ")  {
       printError("usernameErr", "Type in a username");
                          }
        //angiver hvilke tegn username kan indeholde (tegn fundet på nettet)
        else {
            var regex = /^[a-zA-Z\s]+$/;

                    //Hvilken error den skal printe og i hvilke situationer, defineres med if/else metode.

                if(regex.test(username) === false){
                        printError("usernameErr","Enter a username using the permitted letters");
                                                   }
                    else {
                         printError("usernameErr", "");
                          usernameErr = false;
                            }
                }


      // validering af email
        if (email == " ") {
            printError("emailErr","We would like you to enter an email-address")
                            }
                //definerer hvilke tegn emailen skal indeholde (tegn fundet på nettet)
                        else {
                            var regexMail = /^\S+@\S+\.\S+$/;
                                if (regexMail.test(email) === false)

                                //angiver besked der skal fremkomme ved forkert email indtastning
                                    {
                                    printError("emailErr","Check your email, it seems there is something wrong");
                                        }
                                        else {
                                            printError("emailErr","");
                                                emailErr = false;
                                              }
                               }


             //validering af tlf. nummer
                if (phone == " ")

                //angiver besked ved forkert/manglende tlf. nummer
                    {
                    printError("phoneErr","Enter your phone number, so that we can call you ;)");
                        }
                            else {
                                 var regexPhone = /^[1-9]\d{9}$/;
                                    if (regexPhone.test(mobile) === false) {
                                        printError("phoneErr","Something is severely wrong with your phone number, please check it! (it should only contain numbers between 1 & 9)");
                                                                            }
                                            else {
                                                printError("phoneErr","");
                                                    phoneErr = false;
                                                    }

                                  }



                //Validering af city, bruger tegn fra username
                 if (city == "")
                       {
                           printError("cityErr","Please enter a city");
                        }
                            else {
                              var regexCity = /^[a-zA-Z\s]+$/;
                                    if (regexCity.test(city) === false)
                                      {    printError("cityErr","It seems your city is non-existent");

                                          }   else {
                                               printError("cityErr","");
                                                    cityErr = false;
                                                   }
                                 }

                            //Validering af ZIP, da vi er i DK og umiddelbart går ud fra den kun skal være max 4 cifre sætter vi den til max 4 cifre.
                                if (zip == "")
                                    {
                                      printError("zipErr","you have to enter a ZIP code");
                                }
                                    //indsætter bare "maxlength" property i <input> tag i html fremfor at overkomplicere det
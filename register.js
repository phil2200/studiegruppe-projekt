
//Get the entered details from HTML sign up page

var username = document.getElementById(elementid: username)

var userphone = document.getElementById(elementid: userphone)

var address = document.getElementById(elementid: address)

var useremail = document.getElementById(elementid: useremail)

var password = document.getElementById(elementid: password)

retrieve value

// store these entered values to be called for later
function storeDetails() {
    localStorage.setItem("username", username.value)
    localStorage.setItem("userphone", userphone.value)
    localStorage.setItem("address", userphone.value)
    localStorage.setItem("useremail", useremail.value)
    localStorage.setItem("password", password.value)

}

//
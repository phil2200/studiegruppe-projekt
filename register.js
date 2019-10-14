
//Get the entered details from HTML sign up page

var username = document.getElementById(elementid: username)

var phone = document.getElementById(elementid: phone)

var address = document.getElementById(elementid: address)

var email = document.getElementById(elementid: email)

var password = document.getElementById(elementid: password)



// store these entered values to be called for later

function storeDetails() {
    localStorage.setItem("username", username.value)
    localStorage.setItem("userphone", phone.value)
    localStorage.setItem("address", address.value)
    localStorage.setItem("useremail", email.value)
    localStorage.setItem("password", password.value)

}

// Show stored values
function showDetails() {
    console.log("show stored info")
    console.log(localStorage)

}
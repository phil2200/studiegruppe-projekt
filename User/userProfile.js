//Get the entered details from HTML sign up page
this.username = document.getElementById("username");
this.phone = document.getElementById("phone");
this.address = document.getElementById("address");
this.email = document.getElementById("email");

// store these entered values to be called for later
function storeDetails() {
    localStorage.setItem("username", username.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("email", email.value);
    alert('new user has been created!');
    window.location = ("SignIn.html");
}
let currentUser = JSON.parse(localStorage.getItem("currentUser2"));
//EMDL: henter info fra USERDB, hvor oplysninger på name, phone osv.. er givet
document.getElementById("name").value = currentUser.name;
document.getElementById("phone").value = currentUser.phone;
document.getElementById("city").value = currentUser.city;
document.getElementById("zip").value = currentUser.zip;
document.getElementById("address").value = currentUser.address;
document.getElementById("email").value = currentUser.email;

// EMDL: Koden skal opnå, at når man logger ind med en af vores tre test-users, vil den vise forskellige brugeroplysninger til de forskellige brugere
 function changeDetails() {

 }
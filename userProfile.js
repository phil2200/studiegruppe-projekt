let currentUser = JSON.parse(localStorage.getItem("currentUser2"));
// henter info fra USERDB, hvor oplysninger på name, phone osv.. er givet
document.getElementById("name").value = currentUser.name;
document.getElementById("phone").value = currentUser.phone;
document.getElementById("city").value = currentUser.city;
document.getElementById("zip").value = currentUser.zip;
document.getElementById("address").value = currentUser.address;
document.getElementById("email").value = currentUser.email;


// Få den til at gemme disse informationer, når man logger ind med user: Hello, password: 1234567
// skal den have en klasse? eller hvordan kan jeg referere til den?

// if User (username: "hello", password: "1234567");


   // if (localStorage.getItem("user") == null) {
       // let userList = [];
       //  userList.push(new User ("hello","1234567"));
      //   userList.push(new User ("gnu","afdanket"));
      //   userList.push(new User ("philipino","lugter"));

 function changeDetails() {

 }
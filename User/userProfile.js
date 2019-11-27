// laver en variabel og gemmer det i den variabel
var currentUser = JSON.parse(localStorage.getItem("currentUser"));

//EMDL: henter info fra USERDB, hvor oplysninger på name, phone osv.. er givet
// EMDL: Koden skal opnå, at når man logger ind med en af vores tre test-users, vil den vise forskellige brugeroplysninger til de forskellige brugere
document.getElementById("name").value = currentUser.name;
document.getElementById("phone").value = currentUser.phone;
document.getElementById("city").value = currentUser.city;
document.getElementById("zip").value = currentUser.zip;
document.getElementById("address").value = currentUser.address;
document.getElementById("email").value = currentUser.email;

//kalder funktionen
demoGenerateData();
showOrders();

// laver en demo order history
function demoGenerateData(){
 var orderList = []; // EMDL: den vil automatisk tage informationen i rækkefølgen som i klassen

 // laver en liste med vores 4 produkter, og bruger produkt 1 og 2
 var productList = [];
 var product1 = new Product(1, "Black Hoodie",
     "This hoodie is made from 100% cotton. Can used for formal or daily wear. Featuring the unique 50NE logo. Limited edition",
     800, "Black", "Hoodie", 1,
     "blackhoodie.jpg", "In Stock", ["Small", "Medium", "Large"]);

 var product2 = new Product(2, "White Hoodie",
     "This hoodie is made from 100% cotton. Can used for formal or daily wear. Featuring the unique 50NE logo. Limited edition",
     800, "White", "Hoodie", 1,
     "whitehoodie.jpg","In Stock", ["Small", "Medium", "Large"]);

 var product3 = new Product(3, "Black T-shirt",
     "This t-shirt is made from 100% cotton. Can used for formal or daily wear. Featuring the unique 50NE logo. Limited edition",
     399, "Black", "T-shirt", 1,
     "blacktshirt.jpg", "In Stock", ["Small", "Medium", "Large"]);

 var product4 = new Product(4, "White T-shirt",
     "This t-shirt is made from 100% cotton. Can used for formal or daily wear. Featuring the unique 50NE logo. Limited edition",
     399, "White", "T-shirt", 1,
     "whitetshirt.jpg","In Stock", ["Small", "Medium", "Large"]);
 // productList.push(product1, product2);

 var order1 = new Order("test1", "9876490", "08/11/19 15.27", "Black Hoodie", "800 DKK")
 orderList.push(order1);
 var order2 = new Order("test2", "1234567", "26/11/19 17.13", "White Hoodie","800 DKK")
 orderList.push(order2);

 // Jeg sætter dataen i Local Storage - orderListString betyder at den laver det om til en string
 var orderListString = JSON.stringify(orderList);
 localStorage.setItem("orderList", orderListString)
}

 // laver en ny funktion, henter dataen fra ordrerne og henter fra Local Storgage - bruger JSON.parse, som er en metode, der tager et parameter
 function showOrders() {
 var orders = JSON.parse(localStorage.getItem("orderList"));

 // Henter mine HTML elementer
 var orderHistory = document.getElementById("orderHistory");

 // laver et loop for at løbe alle ordrer igennem
 for (var i=0; i < orders.length; i++){

  // Lavet med inspiration fra: https://www.w3schools.com/jsref/met_document_createelement.asp
  //[ ] for at få fat i et element i en liste
  var order = orders[i];

  //SKAL kun vises ved test 1

  //H4 for at det bliver en header
  var order1 = document.createElement("H4");
  order1.innerHTML = "order " + order.orderNumber;
  document.getElementById("orderHistory").append(order1);

  // Laver et <p> element, som er en paragraf
  var para = document.createElement("P");
  // Insætter tekst - læs mere op på dette
  para.innerHTML = "Order Time Stamp: " + order.orderTimeStamp;
  document.getElementById("orderHistory").appendChild(para);

  var para = document.createElement("P");
  para.innerHTML = "Product: " + order.orderProduct;
  document.getElementById("orderHistory").appendChild(para);

  var para = document.createElement("P");
  para.innerHTML = "Total amount of order: " + order.orderTotal;
  document.getElementById("orderHistory").appendChild(para);
}
}











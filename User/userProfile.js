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
 var product1 = new Product(1, "Black Hoodie", "Hoodie is black",
     "black sweat", 800, "black", "Hoodie", 1,
     "blackhoodie.jpg", 0, "0");

 var product2 = new Product(2, "White Hoodie", "Hoodie is white",
     "White sweat", 500, "white", "Hoodie", 1,
     "whitehoodie.jpg","0", "0");

 var product3 = new Product(3, "Black T-shirt", "T-shirt is black",
     "Black T-shirt", 399, "black", "T-shirt", 1,
     "blacktshirt.jpg","0", "0");

 var product4 = new Product(4, "White T-shirt", "T-shirt is white",
     "White T-shirt", 399, "white", "T-shirt", 1,
     "whitetshirt.jpg","0", "0");
 productList.push(product1, product2);

 var order1 = new Order("test1", "9876490", "08/11/19 15.00", productList, "500")
 orderList.push(order1);
 var order2 = new Order("test1", "00000000", "08/11/19 13.03", productList, "398")
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
  // Create a <p> element
  var para = document.createElement("P");
  // Insætter tekst - læs mere op på dette
  para.innerHTML = "Order Number: " + order.orderNumber;
  para.innerHTML = "Order Time Stamp: " + order.orderTimeStamp;
  para.innerHTML = "Total amount of order: " + order.orderTotal;
  document.getElementById("orderHistory").appendChild(para);

  var order1 = html.createElement("H3");
  order1.innerhtml = "order 1" + i
  document.getelementbyid("orderHistory").append(order1)

  var order2 = html.createElement("H3");
  order2.innerhtml = "order 1" + i
  document.getelementbyid("orderHistory").append(order2)
}
}











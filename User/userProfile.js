// EMDL: laver en variabel og gemmer det i den variabel
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
// console.log(currentUser);

//EMDL: henter info fra USERDB, hvor oplysninger på name, phone osv.. er givet
// EMDL: Koden skal opnå, at når man logger ind med en af vores tre test-users, vil den vise forskellige brugeroplysninger til de forskellige brugere
document.getElementById("username").value = currentUser.username;
document.getElementById("phone").value = currentUser.phone;
document.getElementById("city").value = currentUser.city;
document.getElementById("zip").value = currentUser.zip;
document.getElementById("address").value = currentUser.address;
document.getElementById("email").value = currentUser.email;

// EMDL: kalder funktionen
demoGenerateData();
showOrders();

// EMDL: laver en demo order history
function demoGenerateData(){
 var orderList = []; // EMDL: den vil automatisk tage informationen i rækkefølgen som i klassen

 // EMDL: laver en liste med vores 4 produkter
 var productList = [];
 var productList1 = [];
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
 productList.push(product1, product2);
 productList1.push(product3, product4);

 //EMDL: Laver nogle nye ordrer på testbrugerne
 var order1 = new Order("test1", "9876490", "08/11/19 15.27", productList);
 orderList.push(order1);
 var order2 = new Order("test1", "1234567", "09/11/19 17.13", productList);
 orderList.push(order2);
 var order3 = new Order("test2", "1567892", "03/11/19 18.30", productList1);
 orderList.push(order3);
 var order4 = new Order("test3", "3456712", "04/12/19 12.05", productList1);
 orderList.push(order4);

 // EMDL: Jeg sætter dataen i Local Storage - orderListString betyder at den laver det om til en string
 var orderListString = JSON.stringify(orderList);
 localStorage.setItem("orderList", orderListString)
}

// EMDL: laver en ny funktion, henter dataen fra ordrerne og henter fra Local Storgage - bruger JSON.parse, som er en metode, der tager et parameter
function showOrders() {
 var orders = JSON.parse(localStorage.getItem("orderList"));

 // EMDL: Henter mine HTML elementer
 var orderHistory = document.getElementById("orderHistory");

 /* EMDL: laver en filterfunktion, som løber alle ordrer igennem og gemmer en ordre som o, så jeg kan kalde o.username på den.
 sammenligner username string fra ordren med username string fra currentUser på linje 66, så ordren kun vises ved den bruger, der står i objektet
lavet med inspiration fra: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */
 let fOrders = orders.filter((o) => {
  return o.username == currentUser.username;
 })
// tester console.log(fOrders); for at teste, om mit array indeholder noget

 for (var i=0; i < fOrders.length; i++) {

  // EMDL: Lavet med inspiration fra: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  //[ ] for at få fat i et element i en liste
  var order = fOrders[i];

      //EMDL: H4 for at det bliver en header
      var orderh4 = document.createElement("H4");
      orderh4.innerHTML = "Order " + order.orderNumber;
      document.getElementById("orderHistory").append(orderh4);

      //EMDL: Laver et <p> element, som er en paragraf
      /*EMDL: Insætter tekst og appender det - orderTimeStamp er et felt - når jeg hiver værdien ud af mit felt, skriver jeg objekt.FeltNavn
      Lavet med inspiration fra: https://www.w3schools.com/jsref/met_node_appendchild.asp  */
      var ordertimestamp = document.createElement("P");
      ordertimestamp.innerHTML = "Order Time Stamp: " + order.orderTimeStamp;
      document.getElementById("orderHistory").appendChild(ordertimestamp);

      //EMDL: laver et loop, som kører produkterne igennem
      for (var j=0; j < order.orderProducts.length; j++) {
       var product = order.orderProducts[j];
       var orderproducts = document.createElement("P");
       orderproducts.innerHTML = "Product: " + product._productName;
       document.getElementById("orderHistory").appendChild(orderproducts);
      }

      var totalamount = document.createElement("P");
      totalamount.innerHTML = "Total amount of order: " + order.orderTotal;
      document.getElementById("orderHistory").appendChild(totalamount);
  }
}

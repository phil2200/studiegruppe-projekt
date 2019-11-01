
/* Her oprettes de forskellige produkter med deres properties, som derefter kan hentes inde i HTML og CSS-filerne*/
var product1 = new Product(1, "Black Hoodie", "Hoodie is black",
    "black sweat", 800, "black", "Hoodie", 1,
    "blackhoodie.jpg", 0, "0");

var product2 = new Product(2, "White Hoodie", "Hoodie is white",
    "White sweat", 699, "white", "Hoodie", 1,
    "whitehoodie.jpg","0", "0");

var product3 = new Product(3, "Black T-shirt", "T-shirt is black",
    "Black T-shirt", 399, "black", "T-shirt", 1,
    "blacktshirt.jpg","0", "0");

var product4 = new Product(4, "White T-shirt", "T-shirt is white",
    "White T-shirt", 399, "white", "T-shirt", 1,
    "whitetshirt.jpg","0", "0");


/* et Array som inkluderer produkterne, således de kan benyttes nede i for-loopet */
var products = [product1, product2, product3, product4];

/* variabel som indhenter productsContainer i HTMLfilen */
var productsContainer = document.getElementById('productsContainer');

/* for-loopet som tager arrayet og looper produkterne*/
for(var i=0; i<products.length; i++){

/* variabel som opretter 'div' istedet for at bygge hjemmesiden inde i HTML-filen */
   var product = document.createElement('div');

   /* Her bliver de forskellige properties fra klassen udvalgt og kan displayes på siden */
   product.className = "product";
   /* displayer image */
   product.innerHTML = '<img class="product_img" src=' + products[i]._productImage + '>';
   /* displayer produktnavnet */
   product.innerHTML += '<div class="productName">' + products[i]._productName + '</div>';
   /* displayer prisen */
   product.innerHTML += '<div class="productPrice"> Price: ' + products[i]._productPrice + ' kr </div>';
   /* tager Child af productsContainer */
   productsContainer.appendChild(product);
}




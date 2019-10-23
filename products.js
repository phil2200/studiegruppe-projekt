var product1 = new Product(0, "Black Hoodie", "Hoodie is black",
    "black sweat", 700, "black", "Hoodie", 1,
    "blackhoodie.jpg", 0, "0");

var product2 = new Product(0, "White Hoodie", "Hoodie is white",
    "White sweat", 699, "white", "Hoodie", 1,
    "whitehoodie.jpg","0", "0");

var product3 = new Product(0, "Black T-shirt", "T-shirt is black",
    "Black T-shirt", 399, "black", "T-shirt", 1,
    "blacktshirt.jpg","0", "0");

var product4 = new Product(0, "White T-shirt", "T-shirt is white",
    "White T-shirt", 399, "white", "T-shirt", 1,
    "whitetshirt.jpg","0", "0");



var products = [product1, product2, product3, product4];

var productsContainer = document.getElementById('productsContainer');


for(var i=0; i<products.length; i++){
   var product = document.createElement('div');
   product.className = "product";
   product.innerHTML = '<img class="product_img" src=' + products[i]._productImage + '>';
   product.innerHTML += '<div class="productName">' + products[i]._productName + '</div>';
   product.innerHTML += '<div class="productPrice"> Price: ' + products[i]._productPrice + ' kr </div>';
   productsContainer.appendChild(product);
}




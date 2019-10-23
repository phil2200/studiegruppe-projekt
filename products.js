var product1 = new Product(0, "Black Hoodie", "Hoodie is black",
    "black sweat", 700, "black", "Hoodie", 1,
    "blackhoodie.jpg", 0, "0");

var products = [product1];

var productsContainer = document.getElementById('productsContainer');


for(var i=0; i<products.length; i++){
   var product = document.createElement('div');
   product.className = "product";
   product.innerHTML = '<img class="product_img" src=' + products[i]._productImage + '>';
   product.innerHTML += '<div class="productName">' + products[i]._productName + '</div>';
   product.innerHTML += '<div class="productPrice"> Price: ' + products[i]._productPrice + ' kr </div>';
   productsContainer.appendChild(product);
}


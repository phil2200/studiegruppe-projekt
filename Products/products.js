
/* variabel som indhenter productsContainer i HTMLfilen */
var productsContainer = document.getElementById('productsContainer');

/* for-loopet som tager arrayet og looper produkterne*/
for(var i=0; i<products.length; i++){

/* variabel som opretter 'div' istedet for at bygge hjemmesiden inde i HTML-filen */
   var product = document.createElement('div');

   /* Her bliver de forskellige properties fra klassen udvalgt og kan displayes på siden */
   product.className = "product";
   /* displayer image */
   product.innerHTML = '<img class="product_img" src=' + products[i]._productImage + ' onClick="interProduct('+products[i]._productId+')">';
   /* displayer produktnavnet */
   product.innerHTML += '<div class="productName">' + products[i]._productName + '</div>';
   /* displayer prisen */
   product.innerHTML += '<div class="productPrice"> Price: ' + products[i]._productPrice + ' kr </div>';
   /* tager Child af productsContainer */
   productsContainer.appendChild(product);
}

//Her laves en funktion som bliver kaldt onclick ved at trykke på billedet. Funktionen skifter URL.
function interProduct (productId) {
   window.location.replace('interProduct.html?productId='+productId);
}



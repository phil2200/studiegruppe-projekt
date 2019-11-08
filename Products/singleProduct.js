var url_string = window.location.href;
var url = new URL(url_string);
var productId = url.searchParams.get("productId");

/* variabel som indhenter productsContainer i HTMLfilen */
var productContainer = document.getElementById('product');

for(var i=0; i<products.length; i++) {
    if(products[i]._productId == productId) {

        var container = document.createElement('container');

        /* Her bliver de forskellige properties fra klassen udvalgt og kan displayes på siden */
        container.className = "container";

        /* displayer image */
        container.innerHTML = '<img class="product_img" src=' + products[i]._productImage + ' onClick="interProduct('+products[i]._productId+')">';
        /* displayer produktnavnet */
        container.innerHTML += '<div class="productName">' + products[i]._productName + '</div>';
        /* displayer prisen */
        container.innerHTML += '<div class="productPrice"> Price: ' + products[i]._productPrice + ' kr </div>';
        /* displayer farven */
        container.innerHTML += '<div class="productColor"> Color: ' + products[i]._colors + '</div>';
        /*displayer beskrivelsen*/
        container.innerHTML += '<div class="productDesc"> Description: ' + products[i]._productDesc + '</div>';

        /* tager Child af productsContainer */
        productContainer.appendChild(container);
    }
}


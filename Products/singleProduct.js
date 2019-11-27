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
        /* displayer størrelsen */
        container.innerHTML += '<div class="productSize">';

        // Valg af størrelse, her gøres der brug af en selector, samt bliver de forskellige sizes loopet
            var select = '<select class="productSizeSelect"> Pick a size';

                //Når du skal have den valgte værdi skriver du
                //var selectElement = document.getElementByClass('productSizeSelect');
                //var selectedSize = selectElement.options[selectElement.selectedIndex].value;

                var sizes = products[i]._productSize;
                for (var i=0; i<sizes.length; i++){
                    select += '<option value="'+i+'">'+ sizes[i] + '</option>';
                }

            select += '</select>';
        container.innerHTML += select;
        container.innerHTML += '</div>';

        /* Add to cart button, som gør at detaljerne fra det valgte produkt kan videreføres til shoppingcart */

            var addToCart = '<button type="button" class ="addToCartButton">Add item to cart';

            function productDetailTransfer(){
                var productPick = productId[i]





            }

        container.innerHTML +=addToCart;
        container.innerHTML += '</div>'

        /*displayer Status*/
        container.innerHTML += '<div class="stockStatus"> Status: ' + products[i]._stockStatus + '</div>';
        /*displayer beskrivelsen*/
        container.innerHTML += '<div class="productDesc"> Description: ' + products[i]._productDesc + '</div>';

        /* tager Child af productsContainer */
        productContainer.appendChild(container);
    }
}


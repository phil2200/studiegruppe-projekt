//URL SearchParams. Dette er den måde hvorpå når der trykkes på et billede i shopsiden bliver man sendt til det pågældende produktsside
var urlParams = new URLSearchParams(location.search);
var productId = urlParams.get("productId")

var product = findProduct(productId);


/* variabel som indhenter productsContainer i HTMLfilen */
var productContainer = document.getElementById('product');
// der laves enn container , hvori det valgte produkt bliver vist med tilhørende information
var container = document.createElement('container');

/* Her bliver de forskellige properties fra klassen udvalgt og kan displayes på siden */
container.className = "container";

/* displayer image */
container.innerHTML = '<img class="product_img" src=' + product._productImage + ' onClick ="interProduct"(' + product._productId + ')">';
/* displayer produktnavnet */
container.innerHTML += '<div class="productName">' + product._productName + '</div>';
/* displayer prisen */
container.innerHTML += '<div class="productPrice"> Price: ' + product._productPrice + ' kr </div>';
/* displayer farven */
container.innerHTML += '<div class="productColor"> Color: ' + product._colors + '</div>';


// Valg af størrelse, her gøres der brug af en selector, samt bliver de forskellige sizes loopet
var select = '<select class="productSizeSelect"> Select a size';

var sizes = product._productSize;
for (var i = 0; i < sizes.length; i++) {
    select += '<option value="' + i + '">' + sizes[i] + '</option>';
}

select += '</select>';
container.innerHTML += select;
container.innerHTML += '</div>';

/* Add to cart button, som gør at detaljerne fra det valgte produkt kan videreføres til shoppingcart*/
var addToCart = '<button type="button" class ="addToCartBtn" onclick="addToShoppingCart()">Add item to cart';
container.innerHTML += addToCart;


/*displayer Status*/
container.innerHTML += '<div class="stockStatus"> Status: ' + product._stockStatus + '</div>';

/*displayer beskrivelsen*/
container.innerHTML += '<div class="productDesc"> Description: ' + product._productDesc + '</div>';

/* tager Child af productsContainer */
productContainer.appendChild(container);


function addToShoppingCart() {
    var productToCart = product;

    //Hent den størrelse der er valgt
    var selectElement = document.getElementsByClassName('productSizeSelect')[0];
    var selectedSize = selectElement.options[selectElement.selectedIndex].innerText;

    //Sæt størrelsen til den valgte størrelse
    productToCart._productSize = selectedSize;

    //Hent vores nuværende cart fra localstorage
    var cart = localStorage.getItem('cart');
    if (cart == null) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }

// Philip begynd
    var chosenProducts = JSON.parse(localStorage.getItem("cart"));
    var i;
    var  itemAlreadySelected = false;
    for (i = 0; i < cart.length; i++) {
        if (cart[i]._productName === productToCart._productName && cart[i]._productSize ===  productToCart._productSize ){
            alert('This item has already been added to the cart');
            itemAlreadySelected = true;
            break
        }


    }
    if (itemAlreadySelected===false) {
        alert('An item has been added to the cart');
        cart.push(productToCart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }


  //  cart.push(productToCart);
  //  localStorage.setItem('cart', JSON.stringify(cart));
    //Philip slut
}


function findProduct(productId) {
    for (var i = 0; i < products.length; i++) {
        if (products[i]._productId == productId) {
            return products[i];
        }
    }
}
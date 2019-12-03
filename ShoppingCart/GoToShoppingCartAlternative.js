/* Sørg for at html siden er loadet, så de html elementer, som javascript koden benytter faktisk eksisterer.
Sålænge document.readystate er "loading", så venter vi på at det er færdigt med at loade,
og når eventen DOMContentLoaded indtræffer, så udfør funktionen ready. Såfremt siden allerede er loadet skal vi
ikke vente på noget (else delen) og kalder direkte funktionen ready
*/


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)  //Here ready is a callback function. It’s common to wrap all your client code '
    // in a load event listener on the window object, which runs the callback function only when the page is ready:
} else {
    ready()
}



function ready() {

    // document.getElementById('list').onclick =function () {

    //Check i localStorage om der er gemt "valgte" produkter, og hvis det er tilfældet tilføj dem så til Cart
    var chosenProducts = JSON.parse(localStorage.getItem("cart"));

    chosenProducts.forEach(function (key) {    // forEach løkken løber igennem index for m-arrayet og function(key)  udføres for hvert index.
        addItemToCart(key._productName, key._productPrice, key._productImage, key._productSize);


        updateCartTotal();
        //console.log(key.prodName);
        //console.log(key.price);
        //console.log(key.imgName);
    })
}





function addItemToCart(title, price, imageSrc, size) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row') //vi bruger CSS stilen 'cart-row'for div elementet carRow
    var cartItems = document.getElementsByClassName('cart-items')[0] //vi vil senere tilføje en række til  div sektionen 'cart-items'
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            //alert('This item is already added to the cart')
            //return
        }
    }


    let cartRowContents = `   
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
                   
        </div>
        <div class="cart-size cart-column">
            <span class="cart-item-size">${size}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    var  pickedCartRow = buttonClicked.parentElement.parentElement
    var titleElement = pickedCartRow.getElementsByClassName('cart-item')[0];
    var title = titleElement.innerText;
    var sizeElement = pickedCartRow.getElementsByClassName('cart-size')[0];
    var size = sizeElement.innerText;
    buttonClicked.parentElement.parentElement.remove();


    var chosenProducts = JSON.parse(localStorage.getItem("cart"));
   /*chosenProducts.forEach(function (key,index) {  // Ved at have 'index' som input i funktionshovedet bliver index tilgængeligt i if statement-et
    if (key._productName === title && key._productSize === size ){
        chosenProducts.splice(index,1) //der slettes et element ved position index i chosenProducts arrayet
        localStorage.setItem("cart", JSON.stringify(chosenProducts));
        return
    }
*/


    var i;
    for (i = 0; i < chosenProducts.length; i++) {
        if (chosenProducts[i]._productName === title && chosenProducts[i]._productSize === size ){
            chosenProducts.splice(i,1) //der slettes et element ved position index i chosenProducts arrayet
            localStorage.setItem("cart", JSON.stringify(chosenProducts));
            break

        }

    }

    updateCartTotal()
}


function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Dkr. ' + total
}
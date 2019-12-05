if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {

    ready()
}

// for hver gang, at denne js fil aktiveres af den tilhørende html fil, så sætter den array til at være = 0
let  selectedProductsArray = [];
var listFromLocalStorage = JSON.parse(localStorage.getItem("productList"));



/

if (listFromLocalStorage.length > 0) {
    listFromLocalStorage.forEach(function (key) {
        var productInfo = {prodName:"dummyname", price:"dummyprice", imgName: "dummyImgname"};

        productInfo.price=key.price;
        productInfo.imgName=key.imgName;
        productInfo.prodName=key.prodName;
        console.log(key.prodName);
        console.log(key.price);
        console.log(key.imgName);
        selectedProductsArray.push(productInfo);
})
}

// productInfo=productInfo;

//}
//localStorage.setItem('productList', JSON.stringify(selectedProductsArray));


function ready() {/*
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
*/
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    //localStorage.clear();
   //document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
/*
function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
*/
function addToCartClicked(event) {
    var button = event.target
    var product = button.parentElement.parentElement
    var title = product.getElementsByClassName('productName')[0].innerText
    var price = product.getElementsByClassName('productPrice')[0].innerText
    var imageSrc = product.getElementsByClassName('productImage')[0].src
    var productDetails = {prodName:"dummyname", price:"dummyprice", imgName: "dummyImgname"}
    var  itemAlreadySelected = false;

// de tre values under variablen productDetails bliver pushet op i locale storage
    productDetails.prodName = title;
    productDetails.price = price;
    productDetails.imgName = imageSrc;

    for (var i = 0; i < selectedProductsArray.length; i++) {
        if (selectedProductsArray[i].prodName === title) {
            alert('This item is already added to the cart');
            itemAlreadySelected = true;
           break;
        }
    }
    if (itemAlreadySelected===false) {
        alert('An item has been added to the cart');
        selectedProductsArray.push(productDetails);

        localStorage.setItem('productList', JSON.stringify(selectedProductsArray));
    }

    addItemToCart(title, price, imageSrc)
    //updateCartTotal()
}

// denne funktion gør, at man via "add to cart" knappen, kan tilføje
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return

        }
    }

    var cartRowContents = `   
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
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

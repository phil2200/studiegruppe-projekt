//Udarbejdet af PMRJ

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

    /* Check i localStorage om der er gemt "valgte" produkter, og hvis det er tilfældet så
    indlæses de i chosenProducts arrayet. Hvert element er et object af typen ClassProduct */

   /* var chosenProducts = JSON.parse(localStorage.getItem("cart"));

    if(chosenProducts != null) {  //Tjek om der er gemt et products array object i localStorage
        //For hvert produkt i chosenProducts arrayet tilføjer vi det i indkøbslisten ved kald til addItemToCart
        chosenProducts.forEach(function (key) {    // forEach løkken løber igennem index for chosenProducts-arrayet og function(key)  udføres for hvert index.
            addItemToCart(key._productName, key._productPrice, key._productImage, key._productSize, key._quantity);
            updateShoppingAmount(); //Opdater købs-summen
            //console.log(key.prodName);
            //console.log(key.price);
            //console.log(key.imgName);
        })
     }
*/
    myShoppingList = new shoppingCart();
    myShoppingList.readProductListFromLocalStorage();
    myShoppingList.addCartToHTML();

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseInfo)

}

function purchaseInfo() {
    var userID = JSON.parse(localStorage.getItem("currentUser"));
    var currentCart = JSON.parse(localStorage.getItem("cart"));

    if (userID === null)
    {
        alert("Please login to be able to make a purchase")

    }
    else if (currentCart === null ){
        alert("You have no products on your shopping cart")
    }
    else{

        var currentProduct
        var numberOfItemsBought = 0;
        for (var i = 0; i < currentCart.length; i++) {
            currentProduct = currentCart[i];
            numberOfItemsBought += currentProduct._quantity
        }
        if(numberOfItemsBought === 0) {
            alert("You have no products on your shopping cart")
        }
        else{
            StringInfo = `Dear ${userID.username}. Thank you for your purchase of ${numberOfItemsBought}  item(s) at the 5ONE shop.`;
            alert(StringInfo)
        }

    }




}

//addItemToCart sørger for at tiløje produktet med tilhørende info til shopping-listen
function addItemToCart(title, price, imageSrc, size, quantity) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row') //vi bruger CSS stilen 'cart-row'for div elementet cartRow
    var cartItems = document.getElementsByClassName('cart-items')[0]
    //vi vil senere tilføje en række til  div sektionen 'cart-items' hvor de valgte produkter listes
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            //alert('This item is already added to the cart')
            //return
        }
    }

//Generer html-indholdet til en linje med det valgte produkt (skal indeholde billede, navn på produkt, størrelse og pris)
    // lav også en knap hvor man kan vælge styk-tallet, samt en knap til at fjerne produktet fra indkøbslisten
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
    cartRow.innerHTML = cartRowContents; //html koden indeholdt i cartRowContents variablen indøres i elementet cartRow
    cartItems.append(cartRow) //cartRow tilføjes til sektionen cartItems på html siden
    //Sørg for at henholdsvis removeCartItem og quantityChanged funktionerne kaldes når der trykkes på de to knapper
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    quantityElement.value = quantity;
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
    var i;
    for (i = 0; i < chosenProducts.length; i++) {
        if (chosenProducts[i]._productName === title && chosenProducts[i]._productSize === size ){
            chosenProducts.splice(i,1) //der slettes et element ved position index i chosenProducts arrayet
            localStorage.setItem("cart", JSON.stringify(chosenProducts));
            break
        }

    }

    updateShoppingAmount()
}


function quantityChanged(event) {

    var buttonClicked = event.target
    var  pickedCartRow = buttonClicked.parentElement.parentElement
    var titleElement = pickedCartRow.getElementsByClassName('cart-item')[0];
    var title = titleElement.innerText;
    var sizeElement = pickedCartRow.getElementsByClassName('cart-size')[0];
    var size = sizeElement.innerText;

    if (isNaN(buttonClicked.value) || buttonClicked.value <= 0) {
        buttonClicked.value = 1
    }

    var chosenProducts = JSON.parse(localStorage.getItem("cart"));
    var i;
    for (i = 0; i < chosenProducts.length; i++) {
        if (chosenProducts[i]._productName === title && chosenProducts[i]._productSize === size ){
            chosenProducts[i]._quantity = parseInt(buttonClicked.value) ; //the buttonClickedValue is a string, so convert to integer
            localStorage.setItem("cart", JSON.stringify(chosenProducts));
            break
        }

    }
    updateShoppingAmount()
}
function updateShoppingAmount() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0] //
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
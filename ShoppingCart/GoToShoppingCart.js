//Udarbejdet af PMRJ

// dele af koden i denne fil er inspireret af (Web Dev Simplified - youtube, 2018)

/* Sørger for at html siden er loadet, så de html elementer, som javascript koden benytter faktisk eksisterer.
Sålænge document.readystate er "loading", så venter vi på at det er færdigt med at loade,
og når eventen DOMContentLoaded indtræffer, så udfør funktionen ready. Såfremt siden allerede er loadet skal vi
ikke vente på noget (else delen) og kalder direkte funktionen ready
*/
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)  /*Der benyttes et load event listener kald hvor
callback funktionen indeholder det kode som skal udføres når HTML siden er loadet.*/
} else {
    ready()
}

function ready() {
    /*Check i localStorage om der er gemt "valgte" produkter, og hvis det er tilfældet så indlæses de i chosenProducts arrayet.
    Hvert element er et object af typen ClassProduct */
    var chosenProducts = JSON.parse(localStorage.getItem("cart"));

    if(chosenProducts != null) {  //Tjek om der er gemt et products array object i localStorage
        //For hvert produkt i chosenProducts arrayet tilføjer vi det i indkøbslisten ved kald til addItemToCart
        chosenProducts.forEach(function (key) { /*forEach løkken løber igennem index for chosenProducts-arrayet og
             function(key) udføres for hvert index. (Marijn Haverbeke, 2019 p. 95) */
            addItemToCart(key._productName, key._productPrice, key._productImage, key._productSize, key._quantity);
            updateShoppingAmount(); //Opdaterer købssummen
            //console.log(key.prodName);
            //console.log(key.price);
            //console.log(key.imgName);
        })
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseInfo)

}

/* AGMH – code review: nedenfor kunne man tilføje localStorage.clear(cart), til else statementet, så produkterne slettes.
 På denne måde tømmes indkøbskurven, når burgeren trykker purchase.
 I stedet vil det give bedre mening, at informationerne fra shopping cart, videreføres til en payment sektion.
 Så kan man nemlig shoppe på ny, og tilføje nye produkter, hvis brugeren vil købe mere efterfølgende */

//purchaseInfo checker, hvorvidt der er tilføjet produkter til shopping cart, samt om en bruger er logget ind.
//KUn hvis begge er opfyldt, er det muligt at "købe" produkterne.
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
    else {
        var currentProduct;
        var numberOfItemsBought = 0;
        for (var i = 0; i < currentCart.length; i++) {
            currentProduct = currentCart[i];
            numberOfItemsBought += currentProduct._quantity;
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
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row'); //vi bruger CSS stilen 'cart-row'for div elementet cartRow
    var cartItems = document.getElementsByClassName('cart-items')[0]; /*vi vil senere tilføje en række til  div sektionen 'cart-items'
    hvor de valgte produkter listes */
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');


  /* AGMH – code review: Når man opretter en række for produktet, kunne det være smart
     at tilføje ${stockStaus}til HTML cartRowContents.
     Dette vil være en fed optimering, at man kan få et overblik over, hvorvidt produktet er på lager.
     Dette kræver dog også, at vi har inkorporeret et overblik over lagerstatus på produkterne.  */

//Generer html-indholdet til en linje med det valgte produkt (skal indeholde billede, navn på produkt, størrelse og pris), (Web Dev Simplified - youtube, 2018)
    // laver også en knap hvor man kan vælge styk-tallet, samt en knap til at fjerne produktet fra indkøbslisten,
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
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    quantityElement.value = quantity;
}

function removeCartItem(event) {
    var buttonClicked = event.target; //ved button.clicked refereres der til den aktuelle element, som skal fjernes
    var pickedCartRow = buttonClicked.parentElement.parentElement;
    var titleElement = pickedCartRow.getElementsByClassName('cart-item')[0];
    var title = titleElement.innerText;
    var sizeElement = pickedCartRow.getElementsByClassName('cart-size')[0];
    var size = sizeElement.innerText;
    buttonClicked.parentElement.parentElement.remove(); // fjerner html teksten for det pågældende element.


    var chosenProducts = JSON.parse(localStorage.getItem("cart"));
    var i;
    for (i = 0; i < chosenProducts.length; i++) {
        if (chosenProducts[i]._productName === title && chosenProducts[i]._productSize === size ){
            chosenProducts.splice(i,1); /*der slettes et element ved position index i chosenProducts arrayet,
            så det pågældende element også slettes fra localStorage: inspireret fra (Stack Overflow Spice, 2016) og  (W3schools splice, 2019)*/
            localStorage.setItem("cart", JSON.stringify(chosenProducts));
            break
        }

    }

    updateShoppingAmount()
}

function quantityChanged(event) {

    var buttonClicked = event.target;
    var  pickedCartRow = buttonClicked.parentElement.parentElement;
    var titleElement = pickedCartRow.getElementsByClassName('cart-item')[0];
    var title = titleElement.innerText;
    var sizeElement = pickedCartRow.getElementsByClassName('cart-size')[0];
    var size = sizeElement.innerText;

    if (isNaN(buttonClicked.value) || buttonClicked.value <= 0) {
        buttonClicked.value = 1 // quantity kan ikke blive mindre end 1
    }

    var chosenProducts = JSON.parse(localStorage.getItem("cart"));
    var i;
    for (i = 0; i < chosenProducts.length; i++) {
        if (chosenProducts[i]._productName === title && chosenProducts[i]._productSize === size ){
            chosenProducts[i]._quantity = parseInt(buttonClicked.value);//the buttonClickedValue er en string, som konverteres til integer pga. parseINT
            localStorage.setItem("cart", JSON.stringify(chosenProducts)); // værdien for quantity gemmes i localStorage
            break
        }

    }
    updateShoppingAmount()
}
//Prisen i shopping cart summeres, (Web Dev Simplified - youtube, 2018)
function updateShoppingAmount() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = priceElement.innerText.replace('$', '')
        var quantity = quantityElement.value;
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = (priceElement.innerText.replace('$', ''))
        //parsefloat kunne indsættes før (priceELement...) - The parseFloat() function parses a string and returns a floating point number.
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Dkr. ' + total
}
//når siden genindlæses bliver tallene rundt af, hvis det er tale om kommatal.

/* AGMH – code review: Praktisk set vil det være smart, hvis metoderne der bruges i shoppingCart.js hørte til en klasse.
 Dette vil være nyttigt, da den resterende del af programmet af opdelt i units via klasser.
 Derfor vil det ogå giv god mening, at etablerer en klasse for shopping cart. */
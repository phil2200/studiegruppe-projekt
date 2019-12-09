class shoppingCart {
    // constructor properties
    constructor() {
        this.cart_list = [] ;
        this.purchaseAmount ;
    }
    // Methods
   readProductListFromLocalStorage() {
       this.cart_list = JSON.parse(localStorage.getItem("cart"));
   }
   addCartToHTML(){
       for ( let i=0 ; i < this.cart_list.length; i++)
       {
          this.newAddItemToCart(this.cart_list[i])
       }
   }

    newAddItemToCart(specificProduct){
        var title =  specificProduct._productName;
        var price = specificProduct._productPrice;
        var imageSrc = specificProduct._productImage;
        var size = specificProduct._productSize;
        var quantity = specificProduct._quantity;
    //newAddItemToCart(title, price, imageSrc, size, quantity) {

        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row') //vi bruger CSS stilen 'cart-row'for div elementet cartRow
        var cartItems = document.getElementsByClassName('cart-items')[0] //vi vil senere tilføje en række til  div sektionen 'cart-items' hvor de valgte produkter listes
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



}





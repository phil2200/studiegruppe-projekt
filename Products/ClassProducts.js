//Kodet af EJJ

class Product {
    constructor(productId, productName, productDesc, productPrice, colors, productType,
                quantity, productImage, stockStatus, productSize) {

        this._productId = productId;
        this._productName = productName;
        this._productDesc= productDesc;
        this._productPrice= productPrice;
        this._colors = colors;
        this._productType = productType;
        this._quantity = 1;
        this._productImage = productImage;
        this._stockStatus = stockStatus;
        this._productSize = productSize;
/*
        this.changeQuantity = function(value) {
             this._quantity = value;
        };
*/


    }

}

/* Her oprettes de forskellige produkter med deres properties, som derefter kan hentes inde i HTML og CSS-filerne*/

var product1 = new Product(1, "Black Hoodie",
    "This hoodie is made from 100% cotton. Can used for formal or daily wear. Featuring the unique 50NE logo. Limited edition",
    800, "Black", "Hoodie", 1,
    "blackhoodie.jpg", "In Stock", ["Small", "Medium", "Large"]);

var product2 = new Product(2, "White Hoodie",
    "This hoodie is made from 100% cotton. Can used for formal or daily wear. Featuring the unique 50NE logo. Limited edition",
    800, "White", "Hoodie", 1,
    "whitehoodie.jpg","In Stock", ["Small", "Medium", "Large"]);

var product3 = new Product(3, "Black T-shirt",
    "This t-shirt is made from 100% cotton. Can used for formal or daily wear. Featuring the unique 50NE logo. Limited edition",
    399, "Black", "T-shirt", 1,
    "blacktshirt.jpg", "In Stock", ["Small", "Medium", "Large"]);

var product4 = new Product(4, "White T-shirt",
    "This t-shirt is made from 100% cotton. Can used for formal or daily wear. Featuring the unique 50NE logo. Limited edition",
    399, "White", "T-shirt", 1,
    "whitetshirt.jpg","In Stock", ["Small", "Medium", "Large"]);


/* et Array som inkluderer produkterne, således de kan benyttes nede i for-loopet */
var products = [product1, product2, product3, product4];

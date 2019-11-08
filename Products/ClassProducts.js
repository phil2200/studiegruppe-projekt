
class Product {
    constructor(productId, productName, productDesc, productShortDesc, productPrice, colors, productType,
                quantity, productImage, viewCount, dateAdded, status ) {

        this._productId = productId;
        this._productName = productName;
        this._productDesc= productDesc;
        this._productShortDesc= productShortDesc;
        this._productPrice= productPrice;
        this._colors = colors;
        this._productType = productType;
        this._quantity = quantity;
        this._productImage = productImage;
        this._viewCount = viewCount;
        this._dateAdded = dateAdded;
        this.status = status;

    }

}

/* Her oprettes de forskellige produkter med deres properties, som derefter kan hentes inde i HTML og CSS-filerne*/
var product1 = new Product(1, "Black Hoodie", "Hoodie is black",
    "black sweat", 800, "black", "Hoodie", 1,
    "blackhoodie.jpg", 0, "0");

var product2 = new Product(2, "White Hoodie", "Hoodie is white",
    "White sweat", 500, "white", "Hoodie", 1,
    "whitehoodie.jpg","0", "0");

var product3 = new Product(3, "Black T-shirt", "T-shirt is black",
    "Black T-shirt", 399, "black", "T-shirt", 1,
    "blacktshirt.jpg","0", "0");

var product4 = new Product(4, "White T-shirt", "T-shirt is white",
    "White T-shirt", 399, "white", "T-shirt", 1,
    "whitetshirt.jpg","0", "0");


/* et Array som inkluderer produkterne, således de kan benyttes nede i for-loopet */
var products = [product1, product2, product3, product4];

// Lavet af EMDL
// EMDL constructor angiver properties
class Order {
    username;
    orderNumber;
    orderTimeStamp;
    orderProducts;
    orderTotal;

    constructor(username, orderNumber, orderTimeStamp, orderProducts) {
        this.username = username;
        this.orderNumber = orderNumber;
        this.orderTimeStamp = orderTimeStamp;
        this.orderProducts = orderProducts;
        this.orderTotal = this.calculateOrderTotal();
    }

    calculateOrderTotal(){
        var total=0;
        for (var i=0; i < this.orderProducts.length; i++) {
            var product = this.orderProducts[i];
            var productPrice = product._productPrice;
            total = total+productPrice;
        }
        return total;

    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get orderNumber() {
        return this._orderNumber;
    }

    set orderNumber(value) {
        this._orderNumber = value;
    }

    get orderTimeStamp() {
        return this._orderTimeStamp;
    }

    set orderTimeStamp(value) {
        this._orderTimeStamp = value;
    }

    get orderProducts() {
        return this._orderProducts;
    }

    set orderProducts(value) {
        this._orderProducts = value;
    }

    get orderTotal() {
        return this._orderTotal;
    }

    set orderTotal(value) {
        this._orderTotal = value;
    }
}
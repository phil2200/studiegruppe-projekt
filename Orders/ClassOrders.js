// EMDL constructor angiver properties
class Order {
    username;
    orderNumber;
    orderTimeStamp;
    orderProducts;
    orderTotal;

    constructor(username, orderNumber, orderTimeStamp, orderProducts, orderTotal) {
        this.username = username;
        this.orderNumber = orderNumber;
        this.orderTimeStamp = orderTimeStamp;
        this.orderProducts = orderProducts;
        this.orderTotal = orderTotal;
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

/*
class userLogin {
    constructor (username, password, address, phone, email, city, zip, test) {
        this._username = username;
        this._password = password;
        this._address = address;
        this._phone = phone;
        this._email = email;
        this._city = city;
        this._zip = zip;
        this.test = test;
    }




    }

    new userLogin()


let username = document.getElementById("username")
let password = document.getElementById("password")
*/
class User {
    constructor (username, password, name, phone, city, zip, address, email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.email = email;
    }
}
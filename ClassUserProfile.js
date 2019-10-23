
//class itself is prototype of object and every class contains prototype properties.

class userProfile {
   /* get orderhistory() {
        return this._orderhistory;
    }

    set orderhistory(value) {
        this._orderhistory = value;
    }
    get zip() {
        return this._zip;
    }

    set zip(value) {
        this._zip = value;
    }
    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }
    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }
    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        this._fullName = value;
    }

    */

    //Angiver værdier til string typerne/laver string til objekter.
    //constructor contains prototype variables

    constructor(fullName, address, phone, city, zip, email, orderhistory) {
        this._name = name;
        this._address = address;
        this._phone = phone;
        this._city = city;
        this._zip = zip;
        this._email = email;
        this._orderhistory = orderhistory;
    }


}

// function der gør du kan hente var og ændre den.

//when creating new user, to assign new values to variables which are names etc.

new userProfile(fullName, address, phone, city, zip)

//  function changeDetails() {
    // Henter fullname string

    var fullName = document.getElementById( "fullname")

    // henter address string
    var address = document.getElementById ("address")

    // henter phone string
    var phone = document.getElementById("phone")

    //henter city string
    var city = document.getElementById("city")

    //henter zip string
    var zip =document.getElementById( "zip")


//}

console.log(fullName);

/* class User {
    constructor(username, password, name, phone, city, zip, address, email) {
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

// EMDL: Objekterne hentes fra ClassUser.js så man vil kunne se information hos de forskellige bruger under User Profile
var userList = []; // EMDL: den vil automatisk tage informationen i rækkefølgen som i klassen
    // EMDL: jeg pusher new User op i det tomme array
    userList.push(new User("test1","1234567", "Emma Marie Dalgaard Laursen", "+45 22 41 90 32", "Frederiksberg C", "1954", "Hostrups Have 30, 4tv", "emma.laursen.97@hotmail.com"));
    userList.push(new User("test2","2345678", "Alexander Hellowell", "+45 20 61 38 44", "Dubai", "1234", "Al Barsha 2", "Alexander123@hgmail.com"));
    userList.push(new User("test3","3456789", "Philip Martini Ravn Jørgensen", "+45 30 27 44 93", "Jyllinge", "4040", "Korskildevej 12", "joergensen.philip@gmail.com"));

    // EMDL: jeg laver mit array til en string med JSON.stringify og gemmer det i Local Storage
    var userListString = JSON.stringify(userList);

    localStorage.setItem("User", userListString);

    localStorage.setItem("User", userListString) */



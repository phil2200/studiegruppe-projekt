// for database: check if user exists in localstorage otherwise create user and push to list
// EMDL: Objekterne hentes fra ClassUser.js så man vil kunne se information hos de forskellige bruger under UserProfilde
var userList = []; // EMDL: den vil automatisk tage informationen i rækkefølgen som i klassen
    userList.push(new User("test1","1234567", "Emma Marie Dalgaard Laursen", "+45 22 41 90 32", "Frederiksberg C", "1954", "Hostrups Have 30, 4tv", "emma.laursen.97@hotmail.com"));
    userList.push(new User ("test2","2345678", "Alexander Hellowell", "+45 20 61 38 44", "Dubai", "1234", "Al Barsha 2", "Alexander123@hgmail.com"));
    userList.push(new User ("test3","3456789", "Philip Martini Ravn Jørgensen", "+45 30 27 44 93", "Jyllinge", "4040", "Korskildevej 12", "joergensen.philip@gmail.com"));

    // if created save to userList in local storage, stringify it first.
    var userListString = JSON.stringify(userList);
    localStorage.setItem("User", userListString)



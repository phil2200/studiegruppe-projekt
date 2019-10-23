class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


// for database: check if user exists in localstorage otherwise create user and push to list
if (localStorage.getItem("user") == null) {
    let userList = [];
        userList.push(new User ("hello","1234567"));
        userList.push(new User ("gnu","afdanket"));
        userList.push(new User ("philipino","lugter"));

        // if created save to userList in local storage, stringify it first.
        var userListString = JSON.stringify(userList);
        localStorage.setItem("User", userListString)

}       //if user is existing in database
    else {
        let userList = JSON.parse(localStorage.getItem("User"))
}




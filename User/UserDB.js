// for database: check if user exists in localstorage otherwise create user and push to list
if (localStorage.getItem("user")==null) {
    let userList: = [];
        userList.push(new User (username:"username", password: "1234567"));
        userList.push(new User (username: "gnu", password: "afdanket"));
        userList.push(new user (username: "philipino", password:"lugter"));

        // if created save to userList in local storage, stringify it first.
        var userListString = JSON.stringify(userList);
            localStorage.setItem("user", userListString)

}       //if user is existing in database
    else {
        let userList = JSON.parse(localStorage.getItem("user"))
}




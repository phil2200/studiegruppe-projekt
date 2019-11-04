if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}





function ready() {

    document.getElementById('list').onclick = (function () {
        var m = JSON.parse(localStorage.getItem("productList"));
        m.forEach(function (key) {
            console.log(key.prodName);
            console.log(key.price);
            console.log(key.imgName);
        })
    });
}

// denne fil er lavet af Alexander
//function der skjuler kodeord eller viser det.


function showPassword() {
    var x = document.getElementById("password");
    if ( x.type == "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


// denne fil er lavet af Alexander
//function der skjuler kodeord eller viser det.

/* PMRJ – code review: Her ville der kunne optimeres ved at implementere ternary operators i if/else statementet.
 Som ville gøre koden kortere og derved mindske load hastigheden af siden. */

function showPassword() {
    var x = document.getElementById("password");
    if ( x.type == "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

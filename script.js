var lightColor = "#7d7878";
var darkColor ="#414141";
function svetloOzadje() {
    document.body.style.backgroundColor = lightColor;
}
function temnoOzadje() {
    document.body.style.backgroundColor = darkColor;
}
function dobrodosli() {
    const hour = new Date().getHours();
    
    if (hour < 9) {
        alert("Dobro jutro");
    } else if (hour >= 9 && hour < 18) {
        alert("Dober dan");
    } else {
        alert("Dober večer");
    }
}

/* if document.getElementsById("gumbek") ===;
naredi preverjanje pritiska gumba
*/


function preveriObrazec (){
    const ime = document.getElementById("ime").value.trim();
    const priimek = document.getElementById("priimek").value.trim();
    const email = document.getElementById("email").value.trim();

    if (ime === "" || priimek === "" || email === "");
        alert("Prosim izpolnite vsa polja.");
        event.preventDefault(); // prepreči pošiljanje
    // else ();
    //     prikaziAlert()
}

window.onload = function() {
document.querySelector("form").addEventListener("submit", preveriObrazec); //ne vem kaj to naredi, kopiral sem kodo
}

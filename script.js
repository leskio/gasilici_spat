function svetloOzadje() {
    document.body.style.backgroundColor = "#7d7878";
}
function temnoOzadje() {
    document.body.style.backgroundColor = "#414141";
}
function dobrodosli(){
    alert("Dobrodošli!!!")
}
function prikaziAlert(){
    alert("Obrazec poslan")
}



function preveriObrazec (){
    const ime = document.getElementById("ime").value.trim();
    const priimek = document.getElementById("priimek").value.trim();
    const email = document.getElementById("email").value.trim();

    if (ime === "" || priimek === "" || email === "");
        alert("Prosim izpolnite vsa polja.");
        event.preventDefault(); // prepreči pošiljanje
}

window.onload = function() {
document.querySelector("form").addEventListener("submit", preveriObrazec); //ne vem kaj to naredi, kopiral sem kodo
};
function buscar() {

    const texto = document.getElementById("busqueda").value;

    if (texto !== "") {
        window.location.href =
        `https://www.google.com/search?q=${encodeURIComponent(texto)}`;
    }
}

document.getElementById("busqueda").addEventListener("keypress", function(event){

    if (event.key === "Enter") {
        buscar();
    }

});

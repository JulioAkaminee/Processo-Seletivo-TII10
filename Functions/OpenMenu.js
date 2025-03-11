const menuHamburguer = document.querySelector("#menuHamburguer");
menuHamburguer.addEventListener("click", function() {
    const listaMenu = document.querySelector(".listamenu");
    const btnSpeaktoabroker = document.querySelector(".btnSpeaktoabroker");

    //alterar posição do botao fale com um corretor
    btnSpeaktoabroker.style.bottom = (btnSpeaktoabroker.style.bottom === "320px" || btnSpeaktoabroker.style.bottom === "") ? "300px" : "320px";

    
    //Abrir e fechar o menu
    listaMenu.style.display = listaMenu.style.display === "block" ? "none" : "block";
});

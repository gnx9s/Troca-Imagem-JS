document.addEventListener("DOMContentLoaded", function () {

    const botaoTrocar = document.getElementById("button");
    const imagemExibida = document.getElementById("imagemExibida");


    const urlsImagens = ["imgs/img1.avif", "imgs/img2.avif", "imgs/img3.avif", "imgs/img4.avif"];
    let indiceAtual = 0;


    botaoTrocar.addEventListener("click", function () {
        indiceAtual = (indiceAtual + 1) % urlsImagens.length;
        imagemExibida.src = urlsImagens[indiceAtual];
    });
});

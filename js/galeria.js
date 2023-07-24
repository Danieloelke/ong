document.addEventListener("DOMContentLoaded", function() {
    var gallery = document.querySelector(".gallery");
    var flkty = new Flickity(gallery, {
      // Opções do Flickity, você pode personalizar aqui
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      autoPlay: 3000, // Altere para o intervalo de tempo desejado (em milissegundos)
      prevNextButtons: true,
      pageDots: false
    });
  });
  
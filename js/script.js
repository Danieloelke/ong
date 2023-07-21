const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;



nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })

    slideNumber ++;

    if (slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}

prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })

    slideNumber --;

    if (slideNumber < 0){
        slideNumber = numberOfSlides -1;
    }

    slides[slideNumber].classList.add('active');
}




// botao pop up Quilombo
function openPopupQuilombo() {
  var popup = document.getElementById('myPopupQuilombo');
  var overlay = document.getElementById('overlay');

  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function closePopupQuilombo() {
  var popup = document.getElementById('myPopupQuilombo');
  var overlay = document.getElementById('overlay');

  popup.style.display = 'none';
  overlay.style.display = 'none';
}


// botao pop up Guaraqueçaba
function openPopupGuara() {
    var popup = document.getElementById('myPopupGuara');
    var overlay = document.getElementById('overlay');
  
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }
  
  function closePopupGuara() {
    var popup = document.getElementById('myPopupGuara');
    var overlay = document.getElementById('overlay');
  
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }


// botao pop up Quem somos
function openPopupQuemSomos() {
  var popup = document.getElementById('myPopupQuemSomos');
  var overlay = document.getElementById('overlay');

  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function closePopupQuemSomos() {
  var popup = document.getElementById('myPopupQuemSomos');
  var overlay = document.getElementById('overlay');

  popup.style.display = 'none';
  overlay.style.display = 'none';
}






// altera conteudo do botao
  function alterarConteudo() {
    var botao = document.getElementById("botao-cadastro");
  
    // Verifica o conteúdo atual do botão
    if (botao.innerHTML === "Cadastrar") {
      botao.innerHTML = "<i style='color: rgb(91, 237, 61); font-size: 30px;' class='bx bx-check-circle'></i>";
    }
  }
  


  
  // selecionar secao
  function selecionarSecao(secaoID) {
    var secaoSelecionada = document.getElementById(secaoID);

    // Remove a classe "active" de todas as seções com a classe "slide"
    var todasAsSecoes = document.getElementsByClassName("slide");
    for (var i = 0; i < todasAsSecoes.length; i++) {
      todasAsSecoes[i].classList.remove("active");
    }

    // Adiciona a classe "active" somente na seção selecionada
    secaoSelecionada.classList.add("active");
  }





const images = ["brazil.jpg", "canoas-1.jpg", "guaraquecaba.jpg"];
let slideIndex = 0;

function showSlides() {
  const slideshow = document.querySelector(".img-fundo");

  // Atualiza o src da imagem para mostrar a próxima imagem no array
  slideshow.src = images[slideIndex];

  // Incrementa o índice da imagem e reinicia se necessário
  slideIndex++;
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }

  // Repete a função a cada 4 segundos
  setTimeout(showSlides, 4000);
}

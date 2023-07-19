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




// botao pop up
function openPopup() {
  var popup = document.getElementById('myPopup');
  var overlay = document.getElementById('overlay');

  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('myPopup');
  var overlay = document.getElementById('overlay');

  popup.style.display = 'none';
  overlay.style.display = 'none';
}

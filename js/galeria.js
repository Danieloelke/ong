
// Supondo que você tenha uma array de fotos com informações
const photos = [
    { src: '../img/galeria/1.jpeg', class:'exibe1'},
    { src: '../img/galeria/2.jpeg', class:'exibe2'},
    { src: '../img/galeria/3.jpg', class:'exibe3'},
    { src: '../img/galeria/4.jpg', class:'exibe4'},
    { src: '../img/galeria/5.jpg', class:'exibe5'},
    { src: '../img/galeria/6.jpg', class:'exibe6'},
    { src: '../img/galeria/7.jpg', class:'exibe7'},
    { src: '../img/galeria/8.jpg', class:'exibe8'},
    { src: '../img/galeria/9.jpg', class:'exibe9'},
    { src: '../img/galeria/10.jpg', class:'exibe10'},
    { src: '../img/galeria/11.jpg', class:'exibe11'},
    { src: '../img/galeria/12.jpg', class:'exibe12'},
    { src: '../img/galeria/14.jpg', class:'exibe14'},
    { src: '../img/galeria/15.jpg', class:'exibe15'},
    { src: '../img/galeria/18.jpg', class:'exibe18'},
    { src: '../img/galeria/19.jpg', class:'exibe19'},

    // Adicione mais objetos de foto aqui
];

const galleryContainer = document.querySelector('.photo-grid');

photos.forEach(photo => {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');

    const img = document.createElement('img');
    img.src = photo.src;
    photoDiv.appendChild(img);

    const content = document.createElement('div');
    content.classList.add('photo-content');
    content.textContent = photo.text;
    photoDiv.appendChild(content);

    galleryContainer.appendChild(photoDiv);
});

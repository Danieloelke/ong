
// Supondo que você tenha uma array de fotos com informações
const photos = [
    { src: '../img/galeria/2.jpg', text: 'Foto 2 - Descrição' },
    { src: '../img/galeria/3.jpg', text: 'Foto 2 - Descrição' },
    { src: '../img/galeria/4.jpg', text: 'Foto 2 - Descrição' },
    { src: '../img/galeria/5.jpg', text: 'Foto 2 - Descrição' },
    { src: '../img/galeria/6.jpg', text: 'Foto 2 - Descrição' },
    { src: '../img/galeria/7.jpg', text: 'Foto 2 - Descrição' },
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

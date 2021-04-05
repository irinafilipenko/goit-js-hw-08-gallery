import gallerys from './gallery-items.js'
console.log(gallerys);

const imgContainer = document.querySelector('.js-gallery');
console.log(imgContainer);
const ollGallery = createImgGallery(gallerys);
 imgContainer.insertAdjacentHTML('beforeend', ollGallery);

function createImgGallery(gallerys) {
    return gallerys
        .map(gallery => {
            return `
             
        <li>
            <img src = '${gallery.preview}' alt = '${gallery.description}'>
        </li>
    
    `;
        })
        .join(' ');
    
};
console.log(createImgGallery(gallerys));
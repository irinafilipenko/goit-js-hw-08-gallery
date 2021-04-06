import gallerys from './gallery-items.js'
console.log(gallerys);
const imgContainer = document.querySelector('.js-gallery');
// console.log(imgContainer);

const ollGallery = createImgGallery(gallerys);
 imgContainer.insertAdjacentHTML('beforeend', ollGallery);

function createImgGallery(gallerys) {
    return gallerys
        .map(gallery => {
            return `
        <li>
            <img class = "gallery-image"
            src = '${gallery.preview}'
            alt = '${gallery.description}'
            data-source="${gallery.original}"
            width = 392
            height = 240>
        </li>
    `;
        })
        .join(' ');
};
// console.log(createImgGallery(gallerys));

const ImageEl = document.querySelector('.gallery-image');
console.log(ImageEl.src);

imgContainer.addEventListener('click', onContainerClick);
const modalImgRef = document.querySelector('.lightbox__image');
const modalContainer = document.querySelector('.lightbox');

function onContainerClick(event) {
    const isGallaryEl = event.target.classList.contains('gallery-image');
    if (!isGallaryEl) {
        return;
    }
    const currentActiveImg = document.querySelector('.lightbox .is-open')
    if (currentActiveImg) {
        currentActiveImg.classList.remove('is-open');
    }
   modalContainer.classList.add('is-open');
   modalImgRef.src = event.target.dataset.source
    
};
const closeButtonEl = document.querySelector('.lightbox__button');
console.log(closeButtonEl);
closeButtonEl.addEventListener('click', onCloseButton);
function onCloseButton(event) {
    modalContainer.classList.remove('is-open');
}

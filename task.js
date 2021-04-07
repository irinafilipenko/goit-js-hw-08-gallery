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

    window.addEventListener('keydown', onEscPress);
   modalContainer.classList.add('is-open');
   modalImgRef.src = event.target.dataset.source
    
};
const closeButtonEl = document.querySelector('.lightbox__button');
console.log(closeButtonEl);
const closeModalEl = document.querySelector('.lightbox__content');
console.log(closeModalEl);
const closeOverlayEl = document.querySelector('.lightbox__overlay');
console.log(closeOverlayEl);

closeOverlayEl.addEventListener('click', onCloseButton);
closeButtonEl.addEventListener('click', onCloseButton);


function onCloseButton(event) {
    window.removeEventListener('keydown', onEscPress);
    modalContainer.classList.remove('is-open');
    
};

function onEscPress(event) {
    console.log(event.code);
    if (event.code === 'Escape') {
        onCloseButton();
    }
};

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
console.log(btnPrev);
console.log(btnNext);

// function createImgOriginalGallery(gallerys) {
//     return gallerys
//         .map(gallery => {
//             return gallery.src;
        
//         });

// }
// console.log(createImgOriginalGallery(gallerys));
const images = document.querySelectorAll('img[data-source]');
console.log(images);


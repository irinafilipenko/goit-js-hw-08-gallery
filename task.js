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
            <img class = "gallery-image"
            src = '${gallery.preview}'
            alt = '${gallery.description}'
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



const modalContainer = document.querySelector('.lightbox');

console.log(modalContainer);

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
    console.log(modalContainer);
    
};

const closeButtonEl = document.querySelector('.lightbox__button');
console.log(closeButtonEl);



closeButtonEl.addEventListener('click', onCloseButton);

function onCloseButton(event) {
    
    modalContainer.classList.remove('is-open');
    

}

 const modaleContainer = document.querySelector('.lightbox__content');
 modaleContainer.insertAdjacentHTML('beforeend', makeOriginalImgEl(gallerys));

function makeOriginalImgEl(gallerys) {
    return gallerys
        .map(gallery => {
            return `
              <img class="lightbox__image" src="${gallery.original}" alt="${gallery.description}" />
              `
        })
         
};
console.log(makeOriginalImgEl(gallerys));
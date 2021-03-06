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
         <a
             class="gallery__link"
             href= "${gallery.original}"
             >
            <img class = "gallery-image"
            src = '${gallery.preview}'
            alt = '${gallery.description}'
            data-source="${gallery.original}"
            width = 392
            height = 240>
            </a>
        </li>
    `;
        })
        .join(' ');
};
 createImgGallery(gallerys);

const ImageEl = document.querySelector('.gallery-image');
console.log(ImageEl.src);


imgContainer.addEventListener('click', onContainerClick);
const modalImgRef = document.querySelector('.lightbox__image');
const modalContainer = document.querySelector('.lightbox');



function onContainerClick(event) {
    event.preventDefault();
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
    modalImgRef.src = event.target.dataset.source;
    modalImgRef.alt = event.target.alt;
    
};
// setTimeout(onContainerClick,50000);

const closeButtonEl = document.querySelector('.lightbox__button');
console.log(closeButtonEl);
const closeModalEl = document.querySelector('.lightbox__content');
console.log(closeModalEl);
const closeOverlayEl = document.querySelector('.lightbox__overlay');
console.log(closeOverlayEl);

closeOverlayEl.addEventListener('click', onCloseButton);
closeButtonEl.addEventListener('click', onCloseButton);


function onCloseButton(e) {
    modalContainer.classList.remove('is-open');
    modalImgRef.src = '';
    modalImgRef.alt = '';
    window.removeEventListener('keydown', onEscPress);
    if (modalContainer.classList.contains('is-open')) {
    window.removeEventListener('keydown', onArrowEl);
  };
};

function onEscPress(event) {
    console.log(event.code);
    if (event.code === 'Escape') {
        onCloseButton();
    }
};

                                                    //    ????????????????
                                           

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

btnNext.addEventListener('click', onNextImgEl);
 btnPrev.addEventListener('click', onPrevImgEl);
window.addEventListener('keydown', onArrowEl);


let images = document.querySelectorAll('img[data-source]');
console.log(images);
 
 function onNextImgEl() {
        
     for (let i = 0; i < images.length; i += 1) {
         let step = 0;
                  
         if (images[i].alt === modalImgRef.alt) {
             step = i + 1;
            if (step > images.length - 1) {
                step = 0;
                }
             const nextImgAlt = images[step].alt;
             const nextImgUrl = images[step].dataset.source;
            
                    modalImgRef.alt = nextImgAlt;
             return modalImgRef.src = nextImgUrl;
              };
                       
      };
    };



function onPrevImgEl() {
    for (let i = 0; i < images.length; i += 1) {
         let step = 0;
         if (images[i].alt === modalImgRef.alt) {
             step = i - 1;
              if (step < 0) {
                step = images.length-1;
             }
              const prevImgAlt = images[step].alt;
              const prevImgUrl = images[step].dataset.source;
            
                  modalImgRef.alt = prevImgAlt;
        return    modalImgRef.src = prevImgUrl;
          };
    
      };
    };


function onArrowEl(event) {
     if (event.code === 'ArrowRight') {
                  onNextImgEl();
    }
    if (event.code === 'ArrowLeft') {
                  onPrevImgEl();
    }
};



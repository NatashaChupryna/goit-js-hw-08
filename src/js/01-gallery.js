// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
`<li>
<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
  )
  .join('');

const imageList = document.querySelector('.gallery');
imageList.style.listStyle = 'none'
imageList.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.5,
});

console.log(galleryItems);

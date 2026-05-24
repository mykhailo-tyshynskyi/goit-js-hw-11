import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { lightbox } from './js/render-functions';
import iziToast from 'izitoast';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('[name="search-text"]');
const container = document.querySelector('.gallery');

form.addEventListener('submit', handleSearchSubmit);
function handleSearchSubmit(event) {
  event.preventDefault();
  clearGallery();
  showLoader();
  const query = input.value.trim();
  if (query === '') {
    return;
  } else {
    getImagesByQuery(query)
      .then(data => {
        if (data.length === 0) {
          throw new Error();
        }
        const murkup = createGallery(data);
        hideLoader();
        container.innerHTML = murkup;
        lightbox.refresh();
      })
      .catch(err => {
        hideLoader();
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
      });
  }
  event.target.reset();
}

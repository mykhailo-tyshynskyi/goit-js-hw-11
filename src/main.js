import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import iziToast from 'izitoast';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('[name="search-text"]');

form.addEventListener('submit', handleSearchSubmit);
function handleSearchSubmit(event) {
  event.preventDefault();

  const query = input.value.trim();
  if (query === '') {
    return;
  } else {
    clearGallery();
    showLoader();
    getImagesByQuery(query)
      .then(data => {
        if (data.length === 0) {
          throw new Error();
        }
        
        createGallery(data);

        event.target.reset();
      })
      .catch(err => {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
      })
      .finally(() => {
        hideLoader();
      });
  }
}

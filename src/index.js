import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountry } from './js/fetch-country';
import { renderCountry } from './js/render-country';

const DEBOUNCE_DELAY = 300;

export const refs = {
  searchInput: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryContainer: document.querySelector('.country-info'),
};

refs.searchInput.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.preventDefault();

  const searchName = refs.searchInput.value.trim();

  if (searchName.length < 1) {
    Notiflix.Notify.warning('Enter country, please');
    refs.countryList.innerHTML = '';
    refs.countryContainer.innerHTML = '';
  } else {
    return fetchCountry(searchName)
      .then(renderCountry)
      .catch(error => console.log(error));
  }
}

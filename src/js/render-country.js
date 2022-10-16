import Notiflix from 'notiflix';
import { refs } from '../index';

export function renderCountry(country) {
  if (country.length > 10) {
    refs.countryList.innerHTML = '';
    refs.countryContainer.innerHTML = '';
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (country.length > 1 && country.length <= 10) {
    refs.countryContainer.innerHTML = '';
    const markup = country
      .map(
        c =>
          `<li><img src= ${c.flags.svg} alt= ${c.name.common} width=500/></li>`
      )
      .join('');

    refs.countryList.insertAdjacentHTML('beforeend', markup);
  } else if (country.length === 1) {
    refs.countryList.innerHTML = '';
    const markup = country
      .map(
        c =>
          `<li><img src= ${c.flags.svg} alt= ${c.name.common} width=500/></li>`
      )
      .join('');

    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
  } else {
    refs.countryList.innerHTML = '';
    refs.countryContainer.innerHTML = '';
  }
}

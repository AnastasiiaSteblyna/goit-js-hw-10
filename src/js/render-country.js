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
          `<li><img src= ${c.flags.svg} alt= ${c.name.common} width=50/>${c.name.common}</li>`
      )
      .join('');

    refs.countryList.insertAdjacentHTML('beforeend', markup);
  } else if (country.length === 1) {
    refs.countryList.innerHTML = '';

    const markup = country
      .map(
        c =>
          `<div class='box'><h1><img class='big-image' src= ${
            c.flags.svg
          } alt= ${c.name.common} width=50/>${c.name.common}</h1>
          <ul><li> Capital: ${c.capital} </li><li> Population: ${
            c.population
          } </li><li> Languages: ${Object.values(c.languages).join(
            ', '
          )}</li></ul></div>`
      )
      .join('');

    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
  } else {
    refs.countryList.innerHTML = '';
    refs.countryContainer.innerHTML = '';
  }
}

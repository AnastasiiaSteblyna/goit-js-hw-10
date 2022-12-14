import Notiflix from 'notiflix';

export function fetchCountry(countryName) {
  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (response.status === 404) {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    }
    return response.json();
  });
}

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  .then(res => res.json())
  .then(([country]) => {
    document.getElementById('details').innerHTML = `
      <h2>${country.name.common}</h2>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> ${Object.values(country.languages || {}).join(', ')}</p>
      <img src="${country.flags.png}" width="200" />
    `;
  });
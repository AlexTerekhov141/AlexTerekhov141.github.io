const container = document.querySelector('.countries');

fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      const item = document.createElement('a');
      item.href = `details.html?code=${country.cca3}`;
      item.textContent = `${country.flag} ${country.name.common}`;
      container.appendChild(item);
    });
  });

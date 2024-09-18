"use strict";
const renderCountry = function (data, className = "") {
  const html = `
            <article class="country ${className}">
              <img class="country__img" src='${data.flag}' />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${
                  data?.languages[0]?.name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
              </div>
            </article>
      `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

function whereAmI(lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=143544208139568e15928008x111162`
  )
    .then((response) => {
      if (!response.statusText === "OK")
        throw new Error(`can not found country`);
      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found! (${response.status})`);
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => console.log(err.message))
    .finally(() => (countriesContainer.style.opacity = 1));
}
whereAmI(52.508, 13.381);

"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   console.log(request.responseText);
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     const html = `
//         <article class="country">
//           <img class="country__img" src='${data.flag}' />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>
//   `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData("portugal");
// getCountryData("usa");
// getCountryData("germany");

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
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();
  console.log(request.responseText);
  request.addEventListener("load", function () {
    const [data] = JSON.parse(request.responseText);
    console.log(data);
    renderCountry(data);
    // Get Neighbour country
    const neighbour = data.borders?.[0];
    if (!neighbour) return;
    // Ajax call 2
    const request2 = new XMLHttpRequest();
    // request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener("load", function () {
      //   console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, "neighbour");
    });
  });
};
getCountryAndNeighbour("portugal");
getCountryAndNeighbour("usa");

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v2/name/portugal`);

// console.log(request);

// Consuming Promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  //   countriesContainer.style.opacity = 1;
};
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found! (${response.status})`);
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.log(err);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// getCountryData("portugal");
btn.addEventListener("click", function () {
  getCountryData("Germany");
});

console.log("test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved Promis 1").then((res) => console.log(res));
Promise.resolve("Resolved Promis 2").then((res) => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log("Test end");

const lotteryPromis = new Promise(function (resolve, reject) {
  console.log("Lottery draw us happening");
  setTimeout(
    function () {
      if (Math.random() >= 0.5) {
        resolve("You WIN");
      } else {
        reject(new Error("You lost your money!"));
      }
    },

    2000
  );
});
lotteryPromis
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
//
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log("i waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("i waited for 1 second"));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((res) => console.log(res));

function whereAmI() {
  getPosition()
    .then((res) => {
      const { latitude: lat, longitude: lng } = res.coords;
      console.log(lat, lng);
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=143544208139568e15928008x111162`
      );
    })
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
btn.addEventListener("click", whereAmI);
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector(".images");
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");
    imgEl.src = imgPath;
    imgEl.addEventListener("load", function () {
      imgContainer.appendChild(imgEl);
      resolve(imgEl);
    });

    imgEl.addEventListener("error", function () {
      reject(new Error("Error in loading image"));
    });
  });
};
let currentImg;
createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-3.jpg");
  })
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => (currentImg.style.display = "none"))

  .catch((err) => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function (country) {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=143544208139568e15928008x111162`
    );
    if (!resGeo.ok) throw new Error("Problem Getting location data");
    const dataGeo = await resGeo.json();
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error("Problem Getting location data");
    const [data] = await res.json();
    renderCountry(data);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err.message);
  }
};

const getJSON = function (url, errMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    return response.json();
  });
};
console.log("1: I will get location");
whereAmI().then((city) => console.log(city));
// console.log(city);
console.log("2: Finished getting location");
async function get3Countries(c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log(data1.capital, data2.capital, data3.capital);
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
}
get3Countries("portugal", "canada", "tanzania");

const getJSON = function (url, errMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    return response.json();
  });
};
// Promis.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res);
})();
(async function () {
  const res = await Promise.allSettled([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res);
})();
(async function () {
  const res = await Promise.any([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res);
})();

const imgContainer = document.querySelector(".images");
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");
    imgEl.src = imgPath;
    imgEl.addEventListener("load", function () {
      imgContainer.appendChild(imgEl);
      resolve(imgEl);
    });

    imgEl.addEventListener("error", function () {
      reject(new Error("Error in loading image"));
    });
  });
};
let currentImg;
// createImage("img/img-1.jpg")
//   .then((img) => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-2.jpg");
//   })
//   .then((img) => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-3.jpg");
//   })
//   .then((img) => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = "none"))

//   .catch((err) => console.error(err));
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const loadNPause = async function () {
  try {
    currentImg = await createImage("img/img-1.jpg");
    await wait(2);
    currentImg.style.display = "none";
    currentImg = await createImage("img/img-2.jpg");
    await wait(2);
    currentImg.style.display = "none";
    currentImg = await createImage("img/img-3.jpg");
    await wait(2);
    currentImg.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};
// (async () => await loadNPause())();

const loadAll = async function (imgArr) {
  const imgs = imgArr.map(async (imgPath) => await createImage(imgPath));
  console.log(imgs);
  const res = await Promise.all(imgs);
  console.log(res);
  res.forEach((img) => img.classList.add("parallel"));
};
(async () =>
  await loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]))();

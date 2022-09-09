'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountryHTML = function (data, className = '') {
  const cardHTML = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} Million</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
    </div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', cardHTML);
  countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};
///////////////////////////////////////

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const cardHTML = `
      <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].code
            }</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', cardHTML);
    countriesContainer.style.opacity = 1;
  });
};


getCountryData('usa');
getCountryData('japan');
*/

/*
const renderCountryHTML = function (data, className = '') {
  const cardHTML = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} Million</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
    </div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', cardHTML);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  // ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountryHTML(data);

    // get neighbor country (2)
    const [neighbor] = data.borders;

    if (!neighbor) return;

    // ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      // Render country 2
      renderCountryHTML(data2, 'neighbour');

      // get neighbor country (3)
      const [neighbor3] = data2.borders;
      console.log(neighbor3);
      if (!neighbor3) return;
      const request3 = new XMLHttpRequest();
      request3.open('GET', `https://restcountries.com/v2/alpha/${neighbor3}`);
      request3.addEventListener('load', function () {
        const data3 = JSON.parse(this.responseText);
        console.log(data3);

        // Render country 2
        renderCountryHTML(data3, 'neighbour');
      });
      request3.send();
    });

    request2.send();
  });
};

getCountryAndNeighbor('usa');
*/

/****************************************** 
COMMENT: Promises   
******************************************/
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errorMsg} ${res.status}`);
    }

    return res.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      const [dataObj] = data;
      renderCountryHTML(dataObj);

      // neighbor
      if (!dataObj.borders) throw new Error('No neighbor found');
      const [neighbor] = dataObj.borders;
      console.log(neighbor);

      // neighbor country api call
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => {
      renderCountryHTML(data, 'neighbour');
    })
    .catch(err => {
      renderError(`Something went wrong! ⛔⛔⛔. ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// getCountryData('usa');

btn.addEventListener('click', function () {
  getCountryData('australia');
});

// getCountryData('sdsdsd');
*/

/* 
  COMMENT: Coding challenge
*/

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errorMsg} ${res.status}`);
    }

    return res.json();
  });
};

const whereAmI = function (lat, long) {
  fetch(
    `https://geocode.xyz/${lat},${long}?geoit=json&auth=416397938045150956019x31932`
  )
    .then(res => {
      if (res.status == 403) {
        throw new Error('Timing issue');
      }
      return res.json();
    })
    .then(data => {
      return getJSON(
        `https://restcountries.com/v2/name/${data.country}`,
        'Country not found'
      )
        .then(data => {
          const [dataObj] = data;
          renderCountryHTML(dataObj);

          // neighbor
          const [neighbor] = dataObj.borders;
          if (!neighbor) throw new Error('No neighbor found');

          return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`);
        })
        .then(data => {
          renderCountryHTML(data, 'neighbour');
        });
    })
    .catch(err => {
      console.log(err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
whereAmI(-33.933, 18.474);
*/

/****************************************** 
COMMENT:  callback queue and microtask queue test
******************************************/
/*
console.log('Test Start');
setTimeout(() => console.log(`0 sec timer`), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');
*/

/****************************************** 
COMMENT: Promise   
******************************************/
/*
const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery draw is happening 🔮');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You Won The Lottery 💰');
    } else {
      reject(new Error('You loss your money 👎'));
    }
  }, 3000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//=== promisify setTimeout ===//
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(5)
  .then(() => {
    console.log('I waited 5 seconds');
    return wait(2);
  })
  .then(() => {
    console.log('I waited 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited 1 second');
  });
*/

/****************************************** 
COMMENT: get country by using navigator geolocation coordinates   
******************************************/
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errorMsg} ${res.status}`);
    }

    return res.json();
  });
};

const whereAmI = function (lat, long) {
  fetch(
    `https://geocode.xyz/${lat},${long}?geoit=json&auth=416397938045150956019x31932`
  )
    .then(res => {
      if (res.status == 403) {
        throw new Error('Timing issue');
      }
      return res.json();
    })
    .then(data => {
      return getJSON(
        `https://restcountries.com/v2/name/${data.country}`,
        'Country not found'
      )
        .then(data => {
          const [dataObj] = data;
          renderCountryHTML(dataObj);

          // neighbor
          const [neighbor] = dataObj.borders;
          if (!neighbor) throw new Error('No neighbor found');

          return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`);
        })
        .then(data => {
          renderCountryHTML(data, 'neighbour');
        });
    })
    .catch(err => {
      console.log(err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

navigator.geolocation.getCurrentPosition(
  position => {
    const { latitude, longitude } = position.coords;
    whereAmI(latitude, longitude);
  },
  error => {
    console.log(error);
  }
);
*/

/****************************************** 
COMMENT: Coding Challenge   
******************************************/
/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imagePath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imagePath;

    img.addEventListener('load', function () {
      imgContainer.append(this);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('img not found'));
    });
  });
};

let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
/*

/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

/****************************************** 
COMMENT: Async Await   
******************************************/
/*
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await res.json();
  console.log(data);
  renderCountryHTML(data[0]);
};

whereAmI('usa');
console.log('First');
*/

/****************************************** 
COMMENT: Promise.race    
******************************************/
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errorMsg} ${res.status}`);
    }

    return res.json();
  });
};

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res);
})();
*/

/* 
  COMMENT: TRICK:- Prevent infinite/very long fetching action or stop trying to fetch data from server which is taking to much time. By using Promise.race() method
*/

/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errorMsg} ${res.status}`);
    }
    return res.json();
  });
};

const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request took to long time'));
    }, s * 1000);
  });
};

(async function () {
  try {
    const data = await Promise.race([
      getJSON(`https://restcountries.com/v2/name/italy`),
      timeout(0.6),
    ]);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();

// Promise.race([getJSON(`https://restcountries.com/v2/name/italy`), timeout(0.6)])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
*/

/****************************************** 
COMMENT: Promise.all()   
******************************************/
/*
(async function () {
  try {
    const data = await Promise.all([
      Promise.resolve('Success'),
      Promise.reject('Error in action 2'),
      Promise.resolve('Another Success'),
    ]);
    console.log(data);
  } catch (err) {
    console.error(
      new Error(`All promises are not successfully resolved:-  ${err}`)
    );
  }
})();
*/

/****************************************** 
COMMENT: Promise.allSettled()   
******************************************/
/*
(async function () {
  try {
    const data = await Promise.allSettled([
      Promise.resolve('Success'),
      Promise.reject('Error'),
      Promise.resolve('Another Success'),
    ]);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
*/

/****************************************** 
COMMENT: Promise.any()   
******************************************/
/*
(async function () {
  try {
    const data = await Promise.any([
      Promise.resolve('Success'),
      Promise.reject('Error'),
      Promise.resolve('Another Success'),
    ]);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
*/

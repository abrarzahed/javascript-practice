'use strict';
/* 
  COMMENT: Selection 
*/
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

/* 
  COMMENT: Modal window 
*/
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  //=== getBoundingClientRect() used masseurs according to visible viewport  ===//
  const s1cords = section1.getBoundingClientRect();
  // console.log(s1cords);

  // console.log(e.target.getBoundingClientRect());

  // console.log(
  //   'current page scroll x/y',
  //   window.pageXOffset,
  //   window.pageYOffset
  // );

  // console.log(
  //   'vewport height/width',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //=== old way  ===//
  /*
  window.scrollTo(
    s1cords.left + window.pageXOffset,
    s1cords.top + window.pageYOffset
  );
  */

  //=== old way with smooth transition  ===//
  /*
  window.scrollTo({
    left: s1cords.left + window.pageXOffset,
    top: s1cords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  */

  //=== modern way for modern browsers  ===//
  section1.scrollIntoView({ behavior: 'smooth' });
});

/*
document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
*/

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);

  //=== matching strategy  ===//
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/* 
  COMMENT: Tab component
*/
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  //=== activate tab button  ===//
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //=== activate tab content  ===//
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/* 
  COMMENT: Menu fade animation
*/
const handleNavHover = function (event, opacity, scale) {
  if (event.target.classList.contains('nav__link')) {
    const target = event.target;
    const siblings = target.closest('.nav').querySelectorAll('.nav__link');
    const logo = target.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== target) {
        el.style.opacity = opacity;
        el.style.transform = scale;
      }
    });
    logo.style.opacity = opacity;
    // logo.style.transform = scale;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleNavHover(e, 0.5, 'scale(.9)');
});
nav.addEventListener('mouseout', function (e) {
  handleNavHover(e, 1, 'scale(1)');
});

/* 
  COMMENT: Sticky Navigation
*/
/*
//=== this is not a good way to do this task  ===//
const initialCords = section1.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  if (window.scrollY > initialCords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

/* 
  COMMENT: Sticky Navigation with intersection observer API
*/
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

/****************************************** 
COMMENT: practice   
******************************************/
/* 
  COMMENT: get element
*/
/*
//=== to get entire html document with style  ===//
console.log(document.documentElement);

//=== same goes for head and body  ===//
console.log(document.head);
console.log(document.body);

//=== in order to select first element which match with selector  ===//
document.querySelector('.header');

//=== in order to select all element match with selector  ===//
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//=== select by id  ===//
document.getElementById('section--1');

//=== html collection: which is also called live collection  ===//
const allButtons = document.getElementsByTagName('button');
document.getElementsByClassName('btn');
*/

/* 
  COMMENT: Create and insert element
*/

/*
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `We use cookie to improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

const header = document.querySelector('.header');
// header.prepend(message);
header.append(message);

// header.before(message);
header.after(message);
*/

/* 
  COMMENT: Delete element
*/

/*
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

*/

/* 
  COMMENT: style
*/
/*
message.style.background = '#37383d';
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';
console.log(getComputedStyle(message).height);

//=== working with css custom property  ===//
document.documentElement.style.setProperty('--color-primary', 'crimson');
message.style.setProperty('background', 'tan');
*/

/* 
  COMMENT: attributes
*/
/*
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//=== non-standard attributes  ===//
console.log(logo.designer); // won't work
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));
*/

/* 
  COMMENT: data attributes
*/

// console.log(logo.dataset.versionNumber);

/* 
  COMMENT: classes
*/

/*
logo.classList.add();
logo.classList.remove();
logo.classList.toggle('test');
logo.classList.contains('test');
*/

/* 
  COMMENT: Events and Event handlers
*/

// another way of calling events(old school way)
/*
h1.onmouseenter = function (e) { 
  alert('reading the heading again');
};
*/

/*
// new and modern way
const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function (e) {
  alert('reading the heading');
});
*/

//=== Remove event handlers  ===//
/*
const h1 = document.querySelector('h1');
const alert1 = function (e) {
  alert('reading the heading');

  h1.removeEventListener('mouseenter', alert1);
};
h1.addEventListener('mouseenter', alert1);
*/

/* 
  COMMENT: Event propagation
*/
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

const nav_link = document.querySelector('.nav__link');
const nav_links = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');

nav_link.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //=== Stop Propagation  ===//
  e.stopPropagation();
});

nav_links.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link container', e.target, e.currentTarget);
});

nav.addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target, e.currentTarget);
  },
  true
);
*/

/* 
  COMMENT: Dom traversing
*/
/*
const h1 = document.querySelector('h1');
//=== downwards: selecting child  ===//

// console.log(h1.querySelectorAll('.highlight'));

// console.log(h1.childNodes);

// console.log(h1.children); // only works on direct children

// h1.children[0].style.color = '#fff';

// h1.lastElementChild.style.color = 'orangered';

//=== upwards: Selecting parent  ===//

// console.log(h1.parentNode);

// console.log(h1.parentElement);

// closest parent
// h1.closest('.header').style.background = `var(--gradient-secondary)`;
// h1.closest('h1').style.background = `var(--gradient-primary)`;

//=== sideways: selecting siblings  ===//
// in javascript only direct siblings can be accessed

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

//=== selecting all level siblings  ===//
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(.5)';
});
*/

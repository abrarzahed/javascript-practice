'use strict';

/****************************************** 
COMMENT: Modal window   
******************************************/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `We use cookie to improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

const header = document.querySelector('.header');
// header.prepend(message);
header.append(message);

// header.before(message);
header.after(message);

/* 
  COMMENT: Delete element
*/
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

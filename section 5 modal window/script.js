'use strict';
// dom selection
const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');

// open modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let btn of showModalBtns) {
  btn.addEventListener('click', openModal);
}

// close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  modal.classList.remove('shake');
};
closeModalBtn.addEventListener('click', closeModal);

//applying persistent feature
overlay.addEventListener('click', function () {
  modal.classList.add('shake');
  setTimeout(function () {
    modal.classList.remove('shake');
  }, 500);
});

// handling keyboard event(esc key) to close the modal
document.addEventListener('keydown', function (e) {
  if (modal.classList.contains('hidden')) return;
  if (e.key === 'Escape') {
    closeModal();
  }
});

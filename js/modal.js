/* MODAL WINDOW */

const btn = document.querySelectorAll('.menu__link_brif');
const modal = document.getElementById('modal-wrapper');
const btnClose = document.querySelector('.close-btn');
const btnCloseMobile = document.querySelector('.close-btn_mobile');
const closePopup = document.querySelector('.close-btn_popup');
const modalMobile = document.getElementById('modal-wrapper_mobile');


btn.forEach(function (item) {
   item.addEventListener('click', () => {
      modal.classList.add('active');
   });
})

btnClose.addEventListener('click', function () {
   modal.classList.remove('active');
});

modal.addEventListener('click', () => {
   modal.classList.remove('active');
})

modal.querySelector('.modal-window').addEventListener('click', function (e) {
   e.stopPropagation();
})

btn.forEach(function (item) {
   item.addEventListener('click', () => {
      modalMobile.classList.add('active');
   });
})

btnCloseMobile.addEventListener('click', function () {
   modalMobile.classList.remove('active');
});
modalMobile.addEventListener('click', () => {
   modalMobile.classList.remove('active');
})

modalMobile.querySelector('.modal-window_mobile').addEventListener('click', function (e) {
   e.stopPropagation();
})

// popup-call

const btnCall = document.querySelectorAll('.menu__link_call');
const modalCall = document.getElementById('modal-wrapper_popup');

btnCall.forEach(function (item) {
   item.addEventListener('click', () => {
      modalCall.classList.add('active');
   });
})

closePopup.addEventListener('click', function () {
   modalCall.classList.remove('active');
});

modalCall.addEventListener('click', () => {
   modalCall.classList.remove('active');
})

modalCall.querySelector('.modal-window_popup').addEventListener('click', function (e) {
   e.stopPropagation();
})

// mobile-main

const btnMain = document.querySelectorAll('.menu__link-mobile');
const modalMain = document.getElementById('mobile-main');
const closeMain = document.querySelector('.close-main');

btnMain.forEach(function (item) {
   item.addEventListener('click', () => {
      modalMain.classList.add('active');
   });
})

closeMain.addEventListener('click', function () {
   modalMain.classList.remove('active');
});

modalMain.addEventListener('click', () => {
   modalMain.classList.remove('active');
})

modalMain.querySelector('.footer').addEventListener('click', function (e) {
   e.stopPropagation();
})




// popup - services
const btnService = document.querySelectorAll('.services__btn');
const modalService = document.getElementById('service-wrapper_popup');
const closeService = document.querySelector('.close-btn_service');

btnService.forEach(function (item) {
   item.addEventListener('click', () => {
      modalService.classList.add('active');
   });
})

closeService.addEventListener('click', function () {
   modalService.classList.remove('active');
});

modalService.addEventListener('click', () => {
   modalService.classList.remove('active');
})

modalService.querySelector('.service-window_popup').addEventListener('click', function (e) {
   e.stopPropagation();
})
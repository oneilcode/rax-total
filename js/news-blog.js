// mobile-menu-category

const btnMenu = document.querySelectorAll('.category__btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobile = document.querySelector('.close-mobile');

btnMenu.forEach(function (item) {
   item.addEventListener('click', () => {
      mobileMenu.classList.add('active');
   });
})

closeMobile.addEventListener('click', function () {
   mobileMenu.classList.remove('active');
});

// mobileMenu.addEventListener('click', () => {
//    mobileMenu.classList.remove('active');
// })

mobileMenu.querySelector('.mobile-menu').addEventListener('click', function (e) {
   e.stopPropagation();
})
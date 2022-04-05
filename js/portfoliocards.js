// mobile-main

const btnPortfolio = document.querySelectorAll('.portfolio-works__btn');
const modalPortfolio = document.getElementById('portfolio-menu');
const closePortfolio = document.querySelector('.portfolio-close');

btnPortfolio.forEach(function (item) {
   item.addEventListener('click', () => {
      modalPortfolio.classList.add('active');
   });
})

closePortfolio.addEventListener('click', function () {
   modalPortfolio.classList.remove('active');
});

modalPortfolio.addEventListener('click', () => {
   modalPortfolio.classList.remove('active');
})

// modalPortfolio.querySelector('.portfolio-works').addEventListener('click', function (e) {
//    e.stopPropagation();
// })
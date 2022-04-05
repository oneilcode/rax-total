$(document).ready(function () {
   $('.multiple-items').slick({
      slidesToShow: 2,
      infinite: true,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [{
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }


      }]

   });
});
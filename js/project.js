$(document).ready(function () {
   $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [{

         breakpoint: 991,
         settings: {
            slidesToShow: 1,
            arrows: false,
         }
      }]
   });


});
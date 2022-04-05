$(document).ready(function () {
   $('.multiple-items').slick({
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [{
         breakpoint: 480,
         settings: 'unslick',

      }]
      // {
      //    breakpoint: 800,
      //    settings: {
      //       slidesToShow: 1,
      //       infinite: true,
      //       slidesToScroll: 1,
      //    }
      // },

   });


   $('.single-item').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      dots: true
   });

   // $('.multiple-items').slick({
   //    mobileFirst: true,
   //    responsive: [
   //       {
   //          breakpoint: 767,
   //          settings: "unslick"
   //       }
   //    ]
   // });

});
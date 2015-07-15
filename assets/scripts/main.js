$(document).ready(function() {

  'use strict';

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true       // act on asynchronously loaded content (default is true)
    }
  );


  wow.init();

  // Quotes slider
  // $("#owl-carousel").owlCarousel({
  //
  //     slideSpeed : 300,
  //     paginationSpeed : 400,
  //     singleItem:true
  //
  // });

});

$(document).ready(function() {

  'use strict';

  var config = {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true       // act on asynchronously loaded content (default is true)
  }
  var wow = new WOW(config);
  wow.init();

  // Quotes slider
  $("#carousel").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });

});

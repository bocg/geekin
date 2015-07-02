$(document).ready(function() {

  // Quotes slider
  // $("#owl-carousel").owlCarousel({
  //
  //     slideSpeed : 300,
  //     paginationSpeed : 400,
  //     singleItem:true
  //
  // });
  'use strict';

  var $menuButton = $('.menu-button');
  var $fullScreenMenu = $('.nav-fullscreen');
  var $body = $('body');

  // In case page loads below header, show menu button
  // as orange by default
  if ( $(window).scrollTop() > 60 + $('header').height()) {
    $menuButton.addClass('orange');
  }

  // Handles opening and closing of menu
  $body.on('click', '.menu-button-wrapper', function(e){
    e.preventDefault();
    // Toggles all classes for full screen menu
    $menuButton.toggleClass('active');
    $fullScreenMenu.toggleClass('active');
    $body.toggleClass('no-scroll');
    $('.page-content').toggleClass('blurred');

    // ANIMATES NAV ITEMS - Delay set in CSS
    var navItems = $('.nav-fullscreen ul').find('li');
    for ( var i = 0 ; i < navItems.length ; i++ ) {
      $(navItems[i]).toggleClass('animated');
      $(navItems[i]).toggleClass('fadeIn');
    }
  });

  // Changes color of menu button if scrolling past header
  $(window).scroll(function (e) {
    e.preventDefault();
    var scroll = $(window).scrollTop();
    var headerOffset = $('header').height();
    if ( scroll + 60 >=  headerOffset) {
      $menuButton.addClass('orange');
    }
    else if ( scroll + 60 < headerOffset) {
      $menuButton.removeClass('orange');
    }
  });

  // Prevents selection if double clicked
  $body.on('dblClick', '.menu-button-wrapper', function(e){
    e.preventDefault();
  });


});

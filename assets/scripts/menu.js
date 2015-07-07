$(document).ready(function() {

  'use strict';

  // Caching jQuery Variables for optimization
  var $body = $('body'),
      $menuButton = $('.menu-button'),
      $fullScreenMenu = $('.nav-fullscreen'),
      $blurOverlay = $('.blur-overlay');

  var headerOffset = $('header').height(),
      subscribeBarOffest = $('div.subscribe').offset().top;

  // In case page loads below header, show menu button
  // as orange by default
  if ( $(window).scrollTop() > 60 + $('header').height() ) {
    $menuButton.addClass('orange');
  }

  // Handles opening and closing of menu
  $body.on('click', '.menu-button-wrapper', function(e) {
    e.preventDefault();

    // Toggles all classes for full screen menu
    $menuButton.toggleClass('active');
    $fullScreenMenu.toggleClass('active');
    $body.toggleClass('no-scroll');
    $blurOverlay.toggleClass('active');

    // ANIMATES NAV ITEMS - Delay set in CSS
    for ( var i = 0 ; i < navItems.length ; i++ ) {
      $(navItems[i]).toggleClass('animated');
      $(navItems[i]).toggleClass('fadeIn');
    }

  });

  // Changes color of menu button if scrolling past header
  $(window).scroll( function (e) {
    e.preventDefault();

    var scroll = $(window).scrollTop();

    if ( scroll + 60 >=  headerOffset) {
      $menuButton.addClass('orange');
    }
    else if ( scroll + 60 < headerOffset ) {
      $menuButton.removeClass('orange');
    }

  });

  // Prevents selection if double clicked
  $body.on('dblClick', '.menu-button-wrapper', function(e){
    e.preventDefault();
  });

});

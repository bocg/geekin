$(document).ready(function() {

  $("#owl-carousel").owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

    var map;
  function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 15,
      center: {lat: 37.730, lng: -122.445},
      offCenter: {lat: 37.725, lng: -122.445},
      disableDefaultUI: true,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false,
      scrollwheel: false
    });

    // var placement = [
    //   ['Balboa Park', -37.724, -122.444]
    // ];

    var circle = {
      path: 'M-18,0a18,18 0 1,0 36,0a18,18 0 1,0 -36,0',
      fillColor: '#FF7E00',
      fillOpacity: 1,
      scale: 1,
      strokeColor: 'white',
      strokeWeight: 6
    };

    var marker = new google.maps.Marker({
      position: map.offCenter,
      icon: circle,
      map: map,
      title: 'Our Location'

    });

    var contentString = '<div id="content">'+

      '<h1 id="firstHeading" class="firstHeading">OUR LOCATION:</h1>'+
      '<div id="bodyContent">'+
      '<p>64 Rosewood Street,'+
      '<p>Building 2, Suite 228'+
      '<p>San Francisco, CA'+
      '<p><a href="">GET DIRECTIONS</a>'
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      borderRadius: 30
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  infowindow.open(map,marker)

  }

  google.maps.event.addDomListener(window, 'load', initialize);


});

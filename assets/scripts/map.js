$(document).ready(function() {

  'use strict';

  var map;
  var geekinHQ = {
    lat: 32.795004,
    lng: -79.942797
  };

  function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 15,
      center: geekinHQ,
      disableDefaultUI: true,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false,
      scrollwheel: false,
      styles: [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "hue": "#ff0000"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#e8e8e8"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#fefefe"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#642185"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
                {
                    "saturation": "-71"
                },
                {
                    "lightness": "-59"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#d03535"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "hue": "#0bff00"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#fe934c"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#666666"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#9a96c5"
                }
            ]
        }
      ]
    });

    var circle = {
      path: 'M-18,0a18,18 0 1,0 36,0a18,18 0 1,0 -36,0',
      fillColor: '#FF7E00',
      fillOpacity: 1,
      scale: 1,
      strokeColor: 'white',
      strokeWeight: 6
    };

    var marker = new google.maps.Marker({
      position: geekinHQ,
      icon: circle,
      map: map,
      title: 'Our Location'
    });

    var contentString = '<div id="map-infowindow-content">'+
                          '<h2 id="firstHeading" class="firstHeading">GEEKIN HQ</h1>'+
                          '<div id="mapMarkerWindow">'+
                            '<p>647 B King Street,</p>'+
                            '<p>Charleston, 29403 SC</p>'+
                          '</div>'+
                          '<a class="map-link" href="https://www.google.com/maps/place/647+King+St,+Charleston,+SC+29403/@32.7950124,-79.9427815,17z/data=!3m1!4b1!4m2!3m1!1s0x88fe7a4288489cbf:0xe72417519af64f7f" target="_blank">Find us</a>'+
                        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        borderRadius: 30
    });

    infowindow.open(map,marker);
  }

  // Initilalizes map on window load
  google.maps.event.addDomListener(window, 'load', initialize);

  // Recenters map on window resize
  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(geekinHQ);
  });

});

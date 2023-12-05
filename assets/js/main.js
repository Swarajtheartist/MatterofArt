/*
  TABLE OF CONTENTS
    ---------------------------
     1. Loading
     2. Mobile Menu
     3. Text animation
     4. Mini Cart
     5. Skillbars
     6. Counter
     7. LightCase
     8. Resize blocks
     9. Portfolio
     10. Wow
     11. Parallax
     12. Flex Slider
     13. Contact Form
     14. Google Map
*/


  jQuery.noConflict()(function ($) {

  'use strict';

  var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iPhone: function () {
    return navigator.userAgent.match(/iPhone/i);
  },
  iPad: function () {
    return navigator.userAgent.match(/iPad/i);
  },
  iPod: function () {
    return navigator.userAgent.match(/iPod/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
  };


  /* ================================= */
  /* :::::::::: 1. Loading ::::::::::: */
  /* ================================= */

  $(document).ready(function () {

    mt_minimal_loading();
    mt_mobile_menu();
    mt_texteffect();
    mt_woo_minicart();
    mt_portfolio();
    mt_lightCase();
    mt_shopGrid();
    mt_wow();
    mt_parallax();
    mt_flexslider();
    mt_ajax_contact_form();
    mt_skillbars_shortcode();
    mt_counter_shortcode();
    mt_google_map();
    mt_scroll_mouse();

  });

  function mt_minimal_loading() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1100);
  }


  /* ================================= */
  /* ::::::: 2. Mobile Menu :::::::::: */
  /* ================================= */

  function mt_mobile_menu() {

  $("#bernd_menu").slicknav({
    prependTo: 'header .col-md-12',
    allowParentLinks: false
  });
  }

  /* ================================= */
  /* :::::: 3. Text animation :::::::: */
  /* ================================= */

  function mt_texteffect() {

  $(function () {
    $('.info h2').textillate();
  });
  }

  /* ================================= */
  /* ::::::::: 4. Mini Cart :::::::::: */
  /* ================================= */

  function mt_woo_minicart() {

  $('.icon-cart').on('click', function () {
    $('.cart-widget').toggleClass('widget-visible');
  });

    // Quantity
    $(document).on('click', '.shop-qty .plus, .shop-qty .minus', function(){

      var $this = $(this),
        $qty = $this.siblings('.qty'),
        current = parseInt($qty.val(), 10),
        min = parseInt($qty.attr('min'), 10),
        max = parseInt($qty.attr('max'), 10),
        step = parseInt($qty.attr('step'), 10);

      min = min ? min : 1;
      max = max ? max : current + step;

      if ($this.hasClass('minus') && current > min) {
        $qty.val(current - step);
        $qty.trigger('change');
      }

      if ($this.hasClass('plus') && current < max) {
        $qty.val(current + step);
        $qty.trigger('change');
      }

      return false;
    });

  }

  /* ================================= */
  /* ::::::::: 5. Skillbars :::::::::: */
  /* ================================= */

  function mt_skillbars_shortcode() {

  $('.skillbar').appear(function () {
    var skillbar = $(this).html();
    $(this).skillBars({
      from: 0,
      speed: 3000,
      interval: 100,
      decimals: 0,
    });
  });
  }

  /* ================================= */
  /* :::::::::: 6. Counter ::::::::::: */
  /* ================================= */

  function mt_counter_shortcode() {

  $('.timer .number').appear(function () {
    var counter = $(this).html();
    $(this).countTo({
      from: 0,
      to: counter,
      speed: 3000,
      refreshInterval: 70
    });
  });
  }

  /* ================================= */
  /* :::::::: 7. LightCase ::::::::::: */
  /* ================================= */

  function mt_lightCase() {

  $('a.showcase').lightcase({
    transition: 'scrollVertical',
    speedIn: 400,
    speedOut: 300,
  });
  }

  /* ================================= */
  /* :::::: 8. Resize blocks ::::::::: */
  /* ================================= */

  function mt_shopGrid() {

  // Shop Grid
  var element = $('.shopContainer');
  element.imagesLoaded().done(function () {
    element.isotope({
      itemSelector: '.product',
      masonry: {
        columnWidth: '.product',
        gutter: '.gutter-sizer'
      },
      percentPosition: true
    });
  });
  $(window).on('resize', function () {
    element.isotope();
  }).trigger('resize');

  }


  /* ================================= */
  /* ::::::::: 9. Portfolio :::::::::: */
  /* ================================= */

  function mt_portfolio() {

  $('#grid-mosaic').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'masonry',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 3,
    }, {
      width: 1100,
      cols: 3,
    }, {
      width: 800,
      cols: 2,
    }, {
      width: 480,
      cols: 1,
      options: {
        caption: '',
        gapHorizontal: 15,
        gapVertical: 15,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 65,
    gapVertical: 65,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  $('#grid-just').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'mosaic',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 3,
    }, {
      width: 1100,
      cols: 3,
    }, {
      width: 800,
      cols: 2,
    }, {
      width: 480,
      cols: 1,
      options: {
        caption: '',
        gapHorizontal: 15,
        gapVertical: 15,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 65,
    gapVertical: 65,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  $('#grid-blog').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'mosaic',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 1,
    }, {
      width: 1100,
      cols: 1,
    }, {
      width: 800,
      cols: 1,
    }, {
      width: 480,
      cols: 1,
      options: {
        caption: '',
        gapHorizontal: 65,
        gapVertical: 65,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 65,
    gapVertical: 65,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

  $('#grid-blog-2').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'masonry',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 2,
    }, {
      width: 1100,
      cols: 2,
    }, {
      width: 800,
      cols: 1,
    }, {
      width: 480,
      cols: 1,
      options: {
        caption: '',
        gapHorizontal: 65,
        gapVertical: 65,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 65,
    gapVertical: 65,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });


  $('#grid-shop').cubeportfolio({
    filters: '.portfolioFilter',
    layoutMode: 'masonry',
    sortByDimension: true,
    mediaQueries: [{
      width: 1500,
      cols: 3,
    }, {
      width: 1100,
      cols: 3,
    }, {
      width: 800,
      cols: 3,
    }, {
      width: 480,
      cols: 2,
    }, {
      width: 320,
      cols: 1,
      options: {
        caption: '',
        gapHorizontal: 45,
        gapVertical: 35,
      }
    }],
    defaultFilter: '*',
    animationType: 'quicksand',
    gapHorizontal: 45,
    gapVertical: 35,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'sequentially',
    displayTypeSpeed: 100,

    plugins: {
      loadMore: {
        element: '.load-more',
        action: 'click',
        loadItems: 3,
      }
    },
  });

}


  /* ================================= */
  /* :::::::::::: 10. Wow :::::::::::: */
  /* ================================= */

  function mt_wow() {
  new WOW().init();
  }

  /* ================================= */
  /* :::::::: 11. Parallax ::::::::::: */
  /* ================================= */

  function mt_parallax() {
      $( '.parallax' ).each( function() {
        $( this ).jarallax( {
          loop: true,
          speed: 0.8,
          videoSrc: $( this ).attr( 'data-video' ),
          videoStartTime: $( this ).data( 'start' ),
          videoEndTime: $( this ).data( 'end' ),
        } );
      } );
  }

/* ================================= */
/* :::::: 12. Scroll mouse ::::::::: */
/* ================================= */

  function mt_scroll_mouse() {
      $('.header-cover .mouse a').on( "click", function() {
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top
          }, 500);
          return false;
      });
}

  /* ================================= */
  /* ::::::: 13. Flex Slider ::::::::: */
  /* ================================= */

  function mt_flexslider() {
  $('.flexslider').flexslider({
    controlNav: false,
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
    slideshowSpeed: '3000',
    pauseOnHover: true
  });
  }

  /* ================================= */
  /* :::::: 14. Contact Form ::::::::: */
  /* ================================= */

  function mt_ajax_contact_form() {

      $('#submit').on("click", function() {  
           // validate and process form here 
           $("#ajax-contact-form").validate({
             
                  rules:{

                        name:{
                            required: true,
                        },

                        email:{
                            required: true,
                            email: true,
                        },

                        phone:{
                            required: true,
                        },

                        msg:{
                            required: true,
                        },
                   },

                   messages:{

                          name:{
                            required: "The field is required.",
                        },

                        email:{
                            required: "The field is required.",
                            email: "The e-mail address entered is invalid.",
                        },

                        phone:{
                            required: "The field is required.",
                        },

                          msg:{
                            required: "The field is required.",
                        },

                   },

                // JQuery's awesome submit handler.
                submitHandler: function(form) {

                     // Create variables from the form
                     var name = $('input#name').val(); 
                     var email = $('input#email').val();  
                     var phone = $('input#phone').val(); 
                     var msg = $('textarea#msg').val();

                     // Create variables that will be sent in a URL string to contact.php
                     var dataString = '&name='+ name + '&email=' + email + '&phone=' + phone + '&msg=' + msg;
        
                        $.ajax({
                            type: "POST",
                            url: "php/contact.php",
                            data: dataString,
                            success: function(data) {
                                  if(data == 'OK') {
                                    var result = '<div class="notification_ok"><i class="fa fa-check"></i> Your email was sent. Thanks!</div>';
                                    $("#ajax-contact-form").find('input[type=text], input[type=email], textarea').val("");
                                   
                                  } else {
                                  result = data;
                                 }
                                 $('#note').html(result).fadeIn();
                                 setTimeout(function () {
                                   $('#note').html(result).fadeOut();
                                 }, 4000);
           
                          }
                         
                      });
                     return false;
               }
          });
    });

  }

  /* ================================= */
  /* :::::::: 14. Google Map ::::::::: */
  /* ================================= */

  function mt_google_map() {

  if ($('#google-container').length) {

    //set your google maps parameters
    var latitude = 22.471965,
      longitude =  88.391073,
      map_zoom = 10;

    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var marker_url = (is_internetExplorer11) ? 'assets/images/icon-location.png' : 'assets/images/icon-location.png';

    //define the basic color of your map, plus a value for saturation and brightness
    var main_color = '#2d313f',
      saturation_value = -70,
      brightness_value = 5;

    //we define here the style of the map
    var style = [{
        //set saturation for the labels on the map
        elementType: 'labels',
        stylers: [{
          saturation: saturation_value
        }, ]
      },
      { //poi stands for point of interest - don't show these lables on the map 
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show highways lables on the map
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show local road lables on the map
        featureType: 'road.local',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show arterial road lables on the map
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      {
        //don't show road lables on the map
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          visibility: 'off'
        }, ]
      },
      //style different elements on the map
      {
        featureType: 'transit',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi.government',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'poi.business',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'transit',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'landscape',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]

      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
            hue: main_color
          },
          {
            visibility: 'on'
          },
          {
            lightness: brightness_value
          },
          {
            saturation: saturation_value
          },
        ]
      }
    ];


    //set google map options
    var map_options = 
    {
      center: new google.maps.LatLng(22.471965, 88.391073),
      zoom: map_zoom,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      styles: style,
    }

    //inizialize the map
    var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    //add a custom marker to the map      



    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(22.471965, 88.391073),
      map: map,
      title: 'Patuli, Kolkata',
      visible: true,
      icon: marker_url,
    });

 


    google.maps.event.addDomListener(window, "resize", function () {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);

    });


    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
      //grap the zoom elements from the DOM and insert them in the map 
      var controlUIzoomIn = document.getElementById('zoom-in'),
        controlUIzoomOut = document.getElementById('zoom-out');
      controlDiv.appendChild(controlUIzoomIn);
      controlDiv.appendChild(controlUIzoomOut);

      // Setup the click event listeners and zoom-in or out according to the clicked element
      google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
        map.setZoom(map.getZoom() + 1)
      });
      google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
        map.setZoom(map.getZoom() - 1)
      });
    }

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
  }
  }

  });
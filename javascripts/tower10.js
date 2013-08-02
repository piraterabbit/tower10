
/*===========================================================*/
/*  Google Map
/*===========================================================*/   
function initialize() {



  var locations = [
      ['<p><strong>Techspace Underwood St</strong><br /><br /><small>Unit 20, 16-24 Underwood Street, <br />London N1 7JQ</small></p>', 51.529291,-0.090500, 6],
      ['<p><strong>Techspace Underwood St</strong><br /><br /><small>Unit 20, 16-24 Underwood Street, <br />London N1 7JQ</small></p>', 51.526991,-0.090500, 5],
      ['<p><strong>Techspace Underwood St</strong><br /><br /><small>Unit 20, 16-24 Underwood Street, <br />London N1 7JQ</small></p>', 51.524991,-0.094500, 4],
      ['<p><strong>Techspace Underwood St</strong><br /><br /><small>Unit 20, 16-24 Underwood Street, <br />London N1 7JQ</small></p>', 51.528991,-0.091400, 3],
      ['<p><strong>Techspace Underwood St</strong><br /><br /><small>Unit 20, 16-24 Underwood Street, <br />London N1 7JQ</small></p>', 51.529991,-0.091115, 2],
      ['<p><strong>Techspace Bath St</strong><br /><br /><small>1-5 Bath Street, <br/ >London EC1V 9LB</small></p>', 51.527854,-0.091348, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 16,
      mapTypeControl: false,
      scrollwheel: false,
      mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
      center: new google.maps.LatLng(51.527854,-0.091348),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;


    var companyImage = new google.maps.MarkerImage('images/marker.png',
        new google.maps.Size(49,68),<!-- Width and height of the marker -->
        new google.maps.Point(0,0),
        new google.maps.Point(35,20)<!-- Position of the marker -->
    );

    var shadow = {
      url: 'images/marker_shadow.png',
      // The shadow image is larger in the horizontal dimension
      // while the position and offset are the same as for the main image.
      size: new google.maps.Size(69, 68),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(24, 2)
   };


    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: companyImage,
        shadow: shadow
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
} 


/*===========================================================*/
/*  Sliders
/*===========================================================*/   

$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 40, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});


$(function() {
  $( "#slider-range2" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 20, 2000 ],
    slide: function( event, ui ) {
      $( "#amount2" ).val(ui.values[ 0 ] + "sqft - " + ui.values[ 1 ] + "sqft");
    }
  });
  $( "#amount2" ).val($( "#slider-range2" ).slider( "values", 0 ) + "sqft" +
    " - " + $( "#slider-range2" ).slider( "values", 1 ) + "sqft");
});


$(function() {
  $( "#slider-range3" ).slider({
    range: true,
    min: 1,
    max: 24,
    values: [ 4, 24 ],
    slide: function( event, ui ) {
      $( "#amount3" ).val(ui.values[ 0 ] + "month - " + ui.values[ 1 ] + "month");
    }
  });
  $( "#amount3" ).val($( "#slider-range3" ).slider( "values", 0 ) + "month" +
    " - " + $( "#slider-range3" ).slider( "values", 1 ) + "month");
});





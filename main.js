$(document).on('ready', function() {



// this creates the ride object for each ride logged.

var Ride = function(name, style, speed, time, distance, gain, description){
	this.name 			= name;
	this.style			= style;
	this.speed			= speed;
	this.time 			= distance;
	this.gain			= gain;
	this.description	= description;
}




$( ".goal-submit" ).on(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});

var rideList = [];

// this creates the goal object used when choosing a ride

var RideGoal = function(style, speed, time, distance, gain){
	this.style			= style;
	this.speed			= speed;
	this.time 			= time;
	this.distance 		= distance;
	this.gain			= gain;
}



$('.btn-primary').on('click', function(event){
	event.preventDefault()
});

// hide main choice box and show set goal form

$('.choose-ride').on('click', function(){
	console.log("clicked");
	$('.choice-box').removeClass('show').addClass('hide')
	$('.new-goal').removeClass('hide')

});

// submit goals, hide the form and show the matching list of rides
$('.goal-submit').on('click', function(){
	console.log("goal submitted");
	$('.new-goal').removeClass('show').addClass('hide');
	$('.ride-list').addClass('show');

	var rideStyle = $('#rideStyle').val();
	var rideSpeed = $('#rideSpeed').val();
	var rideTime = $('#rideTime').val();
	var rideDistance = $('#rideDistance').val();
	var rideElevation = $('#rideElevation').val();
	
	var newGoal = new RideGoal(rideStyle, rideSpeed, rideTime, rideDistance, rideElevation);
	rideList.push(newGoal)
	console.log(newGoal);
	console.log(rideList);	
});



// if cancel is clicked on new goal
$('.goal-cancel').on('click', function(){
	console.log("nevermind");
	$('.choice-box').removeClass('hide').addClass('show')
	$('.new-goal').removeClass('show').addClass('hide')
});

// hide main choice box and show set goal form on submit

$('.log-ride').on('click', function(){
	console.log("clicked");
	$('.choice-box').removeClass('show').addClass('hide')
	$('.new-ride').removeClass('hide')
});

// submit the new ride log and return to main choice box
$('.log-submit').on('click', function(){
	console.log("log submitted");
	$('.new-ride').addClass('hide')
	$('.choice-box').removeClass('hide').addClass('show')

});

// if cancel is clicked on new-ride

$('.log-cancel').on('click', function(){
	console.log("clicked");
	$('.choice-box').removeClass('hide').addClass('show')
	$('.new-ride').removeClass('show').addClass('hide')
});

// Click on Domestique in header to reset show the choice-box and hide everything else

$('.navbar-brand').on('click', function(){
	console.log("clicked");
	$('.choice-box').removeClass('hide').addClass('show')
	$('.new-ride').removeClass('show').addClass('hide')
	$('.new-goal').removeClass('show').addClass('hide')
	$('.ride-list').removeClass('show').addClass('hide')
	$('.rideDetail').removeClass('show').addClass('hide')

});

// ----- Show Ride Detail ----------------

$('.name').on('click', function(){
	$('.rideDetail').removeClass('hide').addClass('show')
});

$('.close-button').on('click', function(){
	$('.rideDetail').removeClass('show').addClass('hide')
});


// ------------  Google Maps ------------------

var map;

function initialize() {
  var mapOptions = {
    zoom: 6
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);







  
});
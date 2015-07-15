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



// this creates the goal object used when choosing a ride

var RideGoal = function(style, speed, time, distance, gain){
	this.style			= style;
	this.speed			= speed;
	this.time 			= distance;
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
	var rideDistance = $('#rideDistance');
	var rideElevation = $('#rideElevation');
	
	var newGoal = new RideGoal(rideStyle, rideSpeed, rideTime, rideDistance, rideElevation);
});
// console.log(newGoal);

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












  
});
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


// $( ".new-ride" ).submit(function( event ) {
//   console.log( $( this ).serializeArray() );
//   event.preventDefault();
// });



// this creates the goal object used when choosing a ride

var RideGoal = function(style, speed, time, distance, gain){
	this.style			= style;
	this.speed			= speed;
	this.time 			= distance;
	this.gain			= gain;
}

$('.btn').on('click', function(event){
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
	$('.new-goal').removeClass('show').addClass('hide')
	$('.ride-list').addClass('show')

});

// hide main choice box and show set goal form

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













































  
});
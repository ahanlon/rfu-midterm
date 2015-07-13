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


$( ".new-ride" ).submit(function( event ) {
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













































  
});
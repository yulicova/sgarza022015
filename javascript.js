$(function() {
	
	// Hide all slides when page loads
	$("#q1slide").slideUp(0);
	$("#q2slide").slideUp(0);
	$("#q3slide").slideUp(0);
	$("#q4slide").slideUp(0);
	
	// Backstretch
	$.backstretch([
		"MyStuff/b1.jpg", 
		"MyStuff/b2.jpg", 
		"MyStuff/b3.jpg", 
		"MyStuff/b4.jpg"], {
		fade: 1000,
		duration: 7000
	}); 
});

// Functions for slides
function slideToggle(e) {
	$(e).stop().slideToggle(500);
}
function slideUp(e) {
	$(e).stop().slideUp(400);
}
function slideDown(e) {
	$(e).stop().slideDown(400);
}

var slid = 2;

// Functions for transitions
function transitionIn(e) {
	$(e).css("background-position", "top left");
}
function transitionOut(e) {
	$(e).css("background-position", "bottom right");
}
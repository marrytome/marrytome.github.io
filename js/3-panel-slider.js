$(function() { 

var slideTiming = 10000; // this variable is the time it takes before the slide is changed
var animationTime = 500; // this variable changes the animation duration
var controlsHideTime = 200; // this variable changes the time it takes for the next and previous buttons to hide
var current = 1; // slide to be opened at the load of the page

// hide controls buttons
$("#page-next").hide();
$("#page-previous").hide();

// hide & show slider next & previous buttons based on mouse hover
$("#slider-panels").hover(function(){
$("#page-next").show("drop", { direction: "right" }, controlsHideTime);
$("#page-previous").show("drop", { direction: "left" }, controlsHideTime);
},function(){
$("#page-next").hide("drop", { direction: "right" }, controlsHideTime);
$("#page-previous").hide("drop", { direction: "left" }, controlsHideTime);
});


});
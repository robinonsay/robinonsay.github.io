// Counter -- Written by Josh Herkness (http://joshherkness.com/)
function startCounter(startDate) {

    setInterval(function () {

        // Gets the current date
        var currentDate = new Date();

        // Calculates the time difference in ms
        var timeDiff = currentDate - startDate;

        // Convert to seconds
        timeDiff /= 1000;

        // Get seconds
        var seconds = Math.round(timeDiff % 60);
        // Remove seconds from the date
        timeDiff = Math.floor(timeDiff / 60);

        // Get minutes
        var minutes = Math.round(timeDiff % 60);
        // Remove minutes from the date
        timeDiff = Math.floor(timeDiff / 60);

        // Get hours
        var hours = Math.round(timeDiff % 24);
        // Remove hours from the date
        timeDiff = Math.floor(timeDiff / 24);

        // Get days
        var days = Math.round(timeDiff % 365);
        // Remove days from the date
        timeDiff = Math.floor(timeDiff / 365);

        // The rest of timeDiff is number of years
        var years = timeDiff;

        $(".years").text(years);
        $(".days").text(days);
        $(".hours").text(hours);
        $(".minutes").text(minutes);
        $(".seconds").text(seconds);

        if (years != 1) {
            $(".years-lable").text("years");
        } else {
            $(".years-lable").text("year");
        }

        if (days != 1) {
            $(".days-lable").text("days");
        } else {
            $(".days-lable").text("day");
        }

        if (hours != 1) {
            $(".hours-lable").text("hours");
        } else {
            $(".hours-lable").text("hour");
        }

        if (minutes != 1) {
            $(".minutes-lable").text("minutes");
        } else {
            $(".minutes-lable").text("minute");
        }

        if (seconds != 1) {
            $(".seconds-lable").text("seconds");
        } else {
            $(".seconds-lable").text("second");
        }

    }, 1000);
}

window.onload = function () {

    // Begin counter
    var startDate = new Date("September 8, 2012 12:00:00");
    setTimeout(startCounter(startDate), 1000);

    /*
     * Objects to be used as waypoints
     * to-do: Figure out how to use an array
     */
    //var social = $('.social');
    var journal = $('.journal');
    var about = $('.about');
    var education = $('.education');
    var interests = $('.interests');
    var skills = $('.skills');

    /*
     * Hide waypoints
     */
    //social.animate({opacity: 0}, 0);
    journal.animate({opacity: 0}, 0);
    about.animate({opacity: 0}, 0);
    education.animate({opacity: 0}, 0);
    interests.animate({opacity: 0}, 0);
    skills.animate({opacity: 0}, 0);

    /*
     * Create waypoint functions
     */
    /*
    social.waypoint(function(){
        social.animate({opacity: 1});
    }, {offset: '60%'});
    */
    journal.waypoint(function(){
        journal.animate({opacity: 1});
    }, {offset: '75%'});
    about.waypoint(function(){
        about.animate({opacity: 1});
    }, {offset: '75%'});
    education.waypoint(function(){
        education.animate({opacity: 1});
    }, {offset: '75%'});
    interests.waypoint(function(){
        interests.animate({opacity: 1});
    }, {offset: '75%'});
    skills.waypoint(function(){
        skills.animate({opacity: 1});
    }, {offset: '75%'});

};

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});
});

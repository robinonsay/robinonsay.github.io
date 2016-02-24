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

};

$(document).ready(function(){
  $('.btn-nav[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
	});

  var zwappPill = $('#a-zwapp');
  var dataDocPill = $('#a-datadoc');
  var studrPill = $('#a-studr');
  var medinarPill= $('#a-medinar');

  zwappPill.on('click', function(event){
    event.preventDefault();

    $('#div-datadoc').hide();
    // dataDocPill.removeClass('.active');
    $('#div-studr').hide();
    // studrPill.removeClass('.active');
    $('#div-medinar').hide();
    // medinarPill.removeClass('.active');
    $('#div-zwapp').show();
    // $('#div-zwapp').attr('class', 'active');
  });

  dataDocPill.on('click', function(event){
    event.preventDefault();

    $('#div-zwapp').hide();
    // zwappPill.removeClass('.active');
    $('#div-studr').hide();
    // studrPill.removeClass('.active');
    $('#div-medinar').hide();
    // medinarPill.removeClass('.active');
    $('#div-datadoc').show();
    // $('#div-datadoc').attr('class', 'active');
  });

  studrPill.on('click', function(event){
    event.preventDefault();

    $('#div-zwapp').hide();
    // zwappPill.removeClass('.active');
    $('#div-datadoc').hide();
    // dataDocPill.removeClass('.active');
    $('#div-medinar').hide();
    // medinarPill.removeClass('.active');
    $('#div-studr').show();
    // $('#div-studr').attr('class', 'active');
  });

  medinarPill.on('click', function(event){
    event.preventDefault();

    $('#div-zwapp').hide();
    // zwappPill.removeClass('.active');
    $('#div-datadoc').hide();
    // dataDocPill.removeClass('.active');
    $('#div-studr').hide();
    // studrPill.removeClass('.active');
    $('#div-medinar').show();
    // $('#div-medinar').attr('class', 'active');
  });
});

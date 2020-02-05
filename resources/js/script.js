$(document).ready(function() {


/* sticky navigation */    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

/* scroll buttons */
    $('.js--scroll-top').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-top').offset().top}, 1000);
    });

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

/* Navigation scroll */
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

/* animations on scroll */
$('.js--waypoint-1').waypoint(function(direction) {
    $('.js--waypoint-1').addClass('animated fadeIn');

}, {
    offset: '50%'
});

$('.js--waypoint-2').waypoint(function(direction) {
    $('.js--waypoint-2').addClass('animated fadeInUp');

}, {
    offset: '50%'
});

$('.js--waypoint-3').waypoint(function(direction) {
    $('.js--waypoint-3').addClass('animated fadeIn');

}, {
    offset: '50%'
});

$('.js--waypoint-4').waypoint(function(direction) {
    $('.js--waypoint-4').addClass('animated pulse');

}, {
    offset: '50%'
});

/* mobile navigation */

$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }

});


/*maps*/

var map = new GMaps({
    div: '.map',
    lat: 54.3479719,
    lng: 18.678685,
    zoom: 14,
  });

  map.addMarker({
    lat: 54.3489364,
    lng: 18.6549674,
    title: 'Neptun',
    infoWindow: {
        content: '<p>Fontanna Neptuna</p>'
          }
  });

});

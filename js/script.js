//Im writing this code using jQuery and elements of ES6

//fire owlCarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

//operating on nav
$('.hamburger').on('click', ()=> {

    const menu = $('.menu');
    const mainNav = $('.main-nav');

    $('.hamburger').toggleClass('change')
    menu.toggleClass('open');
    mainNav.toggleClass('white-background');

    }
);
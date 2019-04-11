//Im writing this code using jQuery and elements of ES6


//operating on nav
$('.hamburger').on('click', ()=> {

    const menu = $('.menu');
    const hamburger = $('.hamburger');

    hamburger.toggleClass('change white-background')
    menu.toggleClass('open white-background');

    }
);
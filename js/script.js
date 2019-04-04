//Im writing this code using jQuery and elements of ES6


//operating on nav
$('.hamburger').on('click', ()=> {

    const menu = $('.menu');
    const mainNav = $('.main-nav');

    $('.hamburger').toggleClass('change')
    menu.toggleClass('open');
    mainNav.toggleClass('white-background');

    }
);
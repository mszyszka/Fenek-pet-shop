//operating on nav
$('.hamburger').on('click', function(){
    const menu = $('.menu');
    const mainNav = $('.main-nav');

    $('.hamburger').toggleClass('change')
    menu.toggleClass('open');
    mainNav.toggleClass('white-background');
});
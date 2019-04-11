//Im writing this code using jQuery and elements of ES6

//Im creating navObject so I can use its properties in any place in code
let navObjet = {
    menu : $('.menu'),
    hamburger : $('.hamburger')
}
//operating on nav
navObjet.hamburger.on('click', ()=> {
    navObjet.hamburger.toggleClass('change white-background')
    navObjet.menu.toggleClass('open white-background');
    }
);

function removeNavStyleOver600px(x) {
    if (x.matches) { // If media query matches
        //width < 600px
        return;
    } else {
        //width > 600px
        let hamburgerHasClass = navObjet.hamburger.hasClass('change white-background');
        let menuHasClass = navObjet.menu.hasClass('open white-background');
        if (hamburgerHasClass && menuHasClass) {
            navObjet.hamburger.removeClass('change white-background');
            navObjet.menu.removeClass('open white-background');
        } else { return; }
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  removeNavStyleOver600px(x) // Call listener function at run time
  x.addListener(removeNavStyleOver600px) // Attach listener function on state changes
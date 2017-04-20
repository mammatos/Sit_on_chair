console.log("działa");

var navAbout = document.getElementById('navItemAbout');
var dropDown = document.getElementById('navItemAbout__dropDown');

// console.log(navAbout);
// console.log(dropDown);

navAbout.addEventListener('mouseover', function() {
    dropDown.classList.remove('unvisible');
    dropDown.classList.add('visible');
});

navAbout.addEventListener('mouseout', function() {
    dropDown.classList.remove('visible');
    dropDown.classList.add('unvisible');
});
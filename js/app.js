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

var fotoSectionItem = document.getElementsByClassName('fotoSection__item');
// console.log(fotoSectionItem);


for(var i = 0; i < fotoSectionItem.length; i++) {
    fotoSectionItem[i].addEventListener('mouseover', function() {
        this.firstElementChild.classList.add('unvisible');
    });
    fotoSectionItem[i].addEventListener('mouseout', function() {
        this.firstElementChild.classList.remove('unvisible');
    });
}

    
document.addEventListener('DOMContentLoaded', function() { 
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

    var prev = document.getElementById('prevSlide');
    var next = document.getElementById('nextSlide');
    var sliderPics = document.getElementsByClassName('sliderPic');
    var slideIndex = 0;
    var sliderLength = sliderPics.length - 1;
    sliderPics[slideIndex].classList.add('visible');
    // console.log(prev);
    // console.log(next);
    // console.log(sliderPics);

    next.addEventListener('click', function() {
        sliderPics[slideIndex].classList.remove('visible');

        slideIndex = slideIndex < sliderLength ? slideIndex + 1 : 0;

        sliderPics[slideIndex].classList.add('visible');
    });

    prev.addEventListener('click', function() {
        sliderPics[slideIndex].classList.remove('visible');
        
        slideIndex = slideIndex === 0 ? sliderLength : slideIndex - 1;

        sliderPics[slideIndex].classList.add('visible');
    });
});
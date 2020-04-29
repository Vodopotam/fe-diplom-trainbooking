'use strict';

let slideIndex = 1;
showSlides(slideIndex);

 function currentSlide(n) {
	  let slides = document.getElementsByClassName("slider__slide");
    let dots = document.getElementsByClassName("slider__dot");
    showSlides(slideIndex = n);
}


 function showSlides(n) {

    let slides = document.getElementsByClassName("slider__slide");
    let dots = document.getElementsByClassName("slider__dot");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

const hidden = document.querySelectorAll('.hidden-message'),
	body = document.querySelector('.content'),
	button = document.querySelectorAll('.hidden-message-button');
for (let i=0; i <= hidden.length; i++) {
	if (!(hidden[i].classList.contains('hidden'))) {
		body.classList.add('blur');
	} 

	button[i].addEventListener('click', function() {
		hidden[i].classList.add('hidden');
		body.classList.remove('blur');
	})
}


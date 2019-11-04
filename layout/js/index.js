'use strict';

// let sliderElem = document.querySelector('.slider');
// let dotElems = sliderElem.querySelectorAll('.slider__dot');
// let indicatorElem = sliderElem.querySelector('.slider__indicator');
// let dots = dotElems.length;

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
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

// console.log(dotElems.length);
// Array.prototype.forEach.call(dotElems, (dotElem) => {
		
// 	dotElem.addEventListener('click', (e) => {
// 		e.preventDefault();

// 		let currentPos = parseInt(sliderElem.getAttribute('data-pos'))
// 		let newPos     = parseInt(dotElem.getAttribute('data-pos'))

// 		let newDirection     = (newPos > currentPos ? 'right' : 'left')
// 		let currentDirection = (newPos < currentPos ? 'right' : 'left')

// 		// indicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)
// 		// indicatorElem.classList.add(`slider__indicator--${ newDirection }`)		
// 		sliderElem.setAttribute('data-pos', newPos)
		
// 	})

// })

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




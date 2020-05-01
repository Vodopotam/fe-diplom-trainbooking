'use strict';
let full = document.querySelectorAll('.direction-full-block'),
	more = document.querySelectorAll('.more');

for (let i=0; i < more.length; i++) {
	if (!full[i].classList.contains('hidden')) {
		more[i].style.backgroundImage = "url('img/trainSelection/asideIcons/direction_less.png";
	} else {
		more[i].style.backgroundImage = "url('img/trainSelection/asideIcons/direction_more.png";
	}

	more[i].addEventListener('click', function() {
	full[i].classList.toggle('hidden');
	if (!full[i].classList.contains('hidden')) {
		more[i].style.backgroundImage = "url('img/trainSelection/asideIcons/direction_less.png";
	} else {
		more[i].style.backgroundImage = "url('img/trainSelection/asideIcons/direction_more.png";
	}
	});
}

let place  = document.querySelectorAll('.place');

for (let i=0; i <place.length; i++) {
	place[i].addEventListener('click', function() {
		place[i].classList.toggle('selected');
	})
}

function updatePriceLabels() {
    //avoids slider overlap
    var sliders = document.querySelectorAll(".price-slider input"),
    	priceSlider = document.querySelector('.price-slider');
    var val1 = parseInt(sliders[0].value);
    var val2 = parseInt(sliders[1].value);
    console.log(val1, val2)
    if (val1 >= val2) {
        sliders[0].value = val2 - 100;
        return;
    }
    if (val2 <= val1) {
        sliders[1].value = val1 + 100;
        return;
    }
    
    //adds color when a range is selected
    if (val1 > 0 || val2 < 6999) {
        sliders[0].style.background = sliders[1].style.background = "-webkit-gradient(linear, 0 0,100% 0, color-stop(0, #3E3C41), color-stop(" + (val1 / 7000) + ", #3E3C41),color-stop(" + (val1 / 7000) + ", #FFA800), color-stop(" + (val2 / 7000) + ", #FFA800), color-stop(" + (val2 / 7000) + ", #3E3C41))";
        priceSlider.style.background = "-webkit-gradient(linear, 0 0,100% 0, color-stop(0, #C4C4C4), color-stop(" + (val1 / 7000) + ", #C4C4C4),color-stop(" + (val1 / 7000) + ", #FFA800), color-stop(" + (val2 / 7000) + ", #FFA800), color-stop(" + (val2 / 7000) + ", #C4C4C4))";
    } else {
        sliders[0].style.background = sliders[1].style.background = '';
        priceSlider.style.background = '';
    }
}

updatePriceLabels();




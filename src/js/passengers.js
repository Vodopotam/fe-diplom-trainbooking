'use strict';
let fullBlock = document.querySelectorAll('.passenger-full-block'),
  shortBlock = document.querySelectorAll('.passenger-short-block'),
  title = document.querySelectorAll('.passenger-short-block__title'),
  passenger = document.querySelector('#passenger'),
  pass = document.querySelectorAll('.passenger'),
  mainBlock = document.querySelector('.main-block__wrapper'),
  newPassenger = document.querySelector('.add-passenger');

newPassenger.addEventListener('click', function() {
  let newp = passenger.cloneNode(true);
  newp.id = '';
  console.log(newp);
  mainBlock.appendChild(newp);
  mainBlock.insertBefore(newp, newPassenger);
});

for (let i = 0; i < fullBlock.length; i++) {
  shortBlock[i].addEventListener('click', function() {
    fullBlock[i].classList.toggle('hidden');
    if (fullBlock[i].classList.contains('hidden')) {
      title[i].classList.add('passenger-short-block_full-hidden');
    } else {
      title[i].classList.remove('passenger-short-block_full-hidden');
    }
  });
}

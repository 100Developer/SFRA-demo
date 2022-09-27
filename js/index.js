//use this for Vanila Javascript.
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('#keyword-title') //
    .pause(1000)
    .delete(4, { delay: 1000 })
    .type(' ranking')
    .go();
});

//Responsive Menu
document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.mobile-menu').classList.toggle('active');
});

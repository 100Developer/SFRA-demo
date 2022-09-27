//use this for Vanila Javascript.
'use strict';

//Items
let swiper = new Swiper('.PDP-mySwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

let swiper2 = new Swiper('.PDP-mySwiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

//tap
$(document).ready(function () {
  $('.tabs-menu-PDP a').click(function (event) {
    event.preventDefault();
    $(this).parent().addClass('current');
    $(this).parent().siblings().removeClass('current');
    var tabSub02 = $(this).attr('href');
    $('.tab-content-PDP').not(tabSub02).css('display', 'none');
    $(tabSub02).fadeIn();
  });
});

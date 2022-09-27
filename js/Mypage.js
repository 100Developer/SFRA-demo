//use this for Vanila Javascript.
'use strict';

//tap
$(document).ready(function () {
  $('.tabs-menu-Mypage a').click(function (event) {
    event.preventDefault();
    $(this).parent().addClass('current');
    $(this).parent().siblings().removeClass('current');
    var tabSub02 = $(this).attr('href');
    $('.tab-content-Mypage').not(tabSub02).css('display', 'none');
    $(tabSub02).fadeIn();
  });
});

//swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

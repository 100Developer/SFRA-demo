//use this for Vanila Javascript.
'use strict';

//main-visual
$('.main-visual-wrap').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  dots: true,
  responsive: [
    // 반응형 웹 구현 옵션
    {
      breakpoint: 960, //화면 사이즈 960px
      settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 760, //화면 사이즈 768px
      settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow: 1,
      },
    },
  ],
});

//ranking
let swiper00 = new Swiper('.ranking', {
  slidesToShow: 5,
  slidesToScroll: 1,
  direction: 'vertical',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//subTab slide
let swiper01 = new Swiper('.subTab-slide', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

//parallax
let swiper02 = new Swiper('.parallax', {
  speed: 1200,
  parallax: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
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

//video
let swiper03 = new Swiper('.video', {
  effect: 'coverflow',
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

//brand-single
let swiper04 = new Swiper('.brand-single', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

//brand-three
let swiper05 = new Swiper('.brand-three', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
});

//selection
$('.selection-wrap').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: $('.next02'),
  prevArrow: $('.prev02'),
  dots: true,
  responsive: [
    // 반응형 웹 구현 옵션
    {
      breakpoint: 960, //화면 사이즈 960px
      settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, //화면 사이즈 768px
      settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow: 2,
      },
    },
  ],
});

//brand live
let menu = ['DECKE', 'TOMMY HILFIGER', 'DKNY'];
let mySwiper = new Swiper('.swiper-container', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination02',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + '</span>';
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let swiper06 = new Swiper('.nested', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination04',
    clickable: true,
  },
});

//tap
$(document).ready(function () {
  $('.tabs-menu a').click(function (event) {
    event.preventDefault();
    $(this).parent().addClass('current');
    $(this).parent().siblings().removeClass('current');
    var tab = $(this).attr('href');
    $('.tab-content').not(tab).css('display', 'none');
    $(tab).fadeIn();
  });

  $('.tabs-menu-sub a').click(function (event) {
    event.preventDefault();
    $(this).parent().addClass('current');
    $(this).parent().siblings().removeClass('current');
    var tabSub = $(this).attr('href');
    $('.tab-content-sub').not(tabSub).css('display', 'none');
    $(tabSub).fadeIn();
  });

  $('.tabs-menu-sub02 a').click(function (event) {
    event.preventDefault();
    $(this).parent().addClass('current');
    $(this).parent().siblings().removeClass('current');
    var tabSub02 = $(this).attr('href');
    $('.tab-content-sub02').not(tabSub02).css('display', 'none');
    $(tabSub02).fadeIn();
  });
});

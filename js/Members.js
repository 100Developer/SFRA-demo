//tap
$(document).ready(function () {
  $('.tabs-menu-Members a').click(function (event) {
    event.preventDefault();
    $(this).parent().addClass('current');
    $(this).parent().siblings().removeClass('current');
    var tabSub02 = $(this).attr('href');
    $('.tab-content-Members').not(tabSub02).css('display', 'none');
    $(tabSub02).fadeIn();
  });
});

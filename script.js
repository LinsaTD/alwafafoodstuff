$(function () {
  $(".ham-menu input").bind('click', function () {
      console.log('click');
      $(this).toggleClass('active-btn');
      $('#navbarExample01').toggleClass('active-class');
  });
});

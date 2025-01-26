$(function () {
  $(".ham-menu input").bind('click', function () {
      console.log('click');
      $(this).toggleClass('active-btn');
      $('#navbarExample01').toggleClass('active-class');
  });
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', event => {
    const targetId = event.target.getAttribute('href').split('#')[1];
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector('nav').offsetHeight;
    window.scrollTo({ top: targetElement.offsetTop - navbarHeight, behavior: 'smooth' });
  });
});

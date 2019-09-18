$(document).ready(function(){

  $('.demo').slick();


  function toggleNavbar() {
    $('.hamburger--spin').toggleClass('is-active');
    $('.hamburger-nav-list').slideToggle();
  }
  $('.hamburger--spin').click(toggleNavbar);

});

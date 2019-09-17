$(document).ready(function(){

  $('.demo').slick();


  function toggleNavbar() {
    $('.hamburger-nav-list').slideToggle();
  }
  $('#btn-hamburger').click(toggleNavbar);


  function thankYouMessage() {
    $('.subscribed').show();
  }
  $('.submit-btn').click(thankYouMessage);


});

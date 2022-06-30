$(document).ready(function () {
  $(".menu__icon").click(function () {
    $(this).toggleClass("active");
    $('.navigation').toggleClass("active");
  });
});

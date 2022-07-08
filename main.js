$(document).ready(function () {

  // menu for mobile

  $(".menu__icon").click(function () {
    $(this).toggleClass("active");
    $(".navigation").toggleClass("active");
  });

  // search 

  $(".btn--search").click(function () {
    $(".search-bar, .page-overlay").css("display", "block");
    $(".search-bar").focus();
  });
  $(".search-bar__close").mousedown(function () {
    $(".search-bar, .page-overlay").css("display", "none");
  });
});

// choose products to be sold or rented

function productListSelection(elm, classOfList) {
  let btn = document.querySelectorAll(".two-btn .btn");
  let listProduct = document.querySelectorAll(".product .product__list");
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove("active");
    listProduct[i].classList.remove("is-show");
  }
  elm.classList.add("active");
  document.querySelector(classOfList).classList.add("is-show");
}
function scrollShow () {
  console.log(window.scrollY)
    let elements = document.querySelector('.scrollshow');
    console.log(elements.scrollTop)
    if(window.scrollY == elements.scrollTop) {
        console.log('oke')
    }
}

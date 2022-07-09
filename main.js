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
function scrollShow() {
  let elements = document.querySelectorAll(".product__card");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 0;
    if (window.scrollY >= elements[i].offsetTop - 500) {
      elements[i].classList.add("load_js__up");
    } else {
      elements[i].classList.remove("load_js__up");
    }
  }
}


// banner animation
setInterval(function() {
  let banner_image = document.querySelector(".banner__image");
  banner_image.classList.toggle('is-animate');
}, 3500)

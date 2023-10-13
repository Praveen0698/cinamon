/*
 * Dina - Restaurant, Bar, Cafe, Food HTML Template
 *
 * Author: https://matchthemes.com
 *
 */

const btn = document.querySelector(".menu-btn");

(function ($) {
  "use strict";

  //home slider

  // home slider
  $(".home-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    dots: false,
    nav: true,
    navText: "",
  });

  //end home slider

  //home 10 carousel

  $(".home-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    navText: "",
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },

      1024: {
        items: 4,
      },

      1300: {
        items: 5,
      },
    },
  });

  //hamburger menu
  $(".nav-button-holder").on("click", function (e) {
    e.preventDefault();

    if ($(this).is(".inactive")) {
      $(this).toggleClass("inactive active");
      $("body").addClass("has-active-menu");
      $(".nav-button").addClass("active");
      $(".mask-nav-2, #header-2").addClass("is-active");
    } else if ($(this).is(".active")) {
      $(this).toggleClass("inactive active");
      $("body").removeClass("has-active-menu");
      $(".nav-button").removeClass("active");
      $(".mask-nav-2, #header-2").removeClass("is-active");
    }
  });

  $(".menu-nav-2 > li.menu-item-has-children > a").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if ($(this).parent().hasClass("menu-open"))
      $(this).parent().removeClass("menu-open");
    else {
      $(".menu-nav-2").find(".menu-item-has-children").removeClass("menu-open");

      $(this).parent().addClass("menu-open");
    }
  });

  // end hamburger menu

  //sticky menu
  $(window).on("scroll", function () {
    if ($(document).scrollTop() > 50) {
      $(".navbar-1, #header-2, #header-3, #header-4, .header6").addClass(
        "nav-bkg1"
      );
      $(".headerWrap-5").addClass("navbar-fixed-top nav-bkg1");
      $(".menu-btn").addClass("menu-visible");
      $(".menu-nav-1").addClass("nav-aligner");
      $(".nav-content-1-header").addClass("nav-content-display");
    } else {
      $(".navbar-1, #header-2, #header-3, #header-4, .header6").removeClass(
        "nav-bkg1"
      );
      $(".headerWrap-5").removeClass("navbar-fixed-top nav-bkg1");
      $(".menu-btn").removeClass("menu-visible");
      $(".menu-nav-1").removeClass("nav-aligner");
      $(".nav-content-1-header").removeClass("nav-content-display");
    }
  });

  // accordion menu

  $(".menu-section").hide();

  $("h4.menu-title-section").on("click", function () {
    if ($(this).next().is(":hidden")) {
      $("h4.menu-title-section").removeClass("active").next().slideUp();
      $(this).toggleClass("active").next().slideDown();
    } else {
      $("h4.menu-title-section").removeClass("active").next().slideUp();
    }
    return false;
  });

  // end accordion menu

  //fluid width videos

  $(".single-post-content, .custom-page-template, .post-video").fitVids({
    customSelector: "iframe[src^='https://w.soundcloud.com']",
  });

  //gallery

  $(".menu-post-img a, .menu-post-img-v2 a").magnificPopup({
    type: "image",
  });

  $(".gallery-post a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //scroll up button

  $(".scrollup").hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 400) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $("a.scrolltop[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").stop().animate({ scrollTop: 0 }, 1000, "easeOutExpo");
  });
})(jQuery);

const check = document.querySelectorAll(".menu-post-desc input");
const menuBtn = document.querySelector(".menu-card-btn");
const orderBtn = document.querySelector(".order-now-btn");
const orderTotal = document.querySelector(".order-total-span");
const orderList = document.querySelector(".order-item-list .added-item");
const removeList = document.querySelectorAll(".closeOrder");

let orderName = [];
let orderPrice = [];
let orderValue = 0;
let count = 0;
let newNum = 0;
let newData;
let span;
let div;
orderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < check.length; i++) {
    // console.log(check[i].checked);
    if (check[i].checked) {
      newData = check[i].value.split("|");
      orderName.push(newData[0]); // data push
      newNum = Number(newData[1]); //string to number
      orderPrice.push(newNum); // rate push
      orderValue += newNum;

      span = document.createElement("span");
      span.textContent = newData[0];
      orderList.appendChild(span);
    }
  }

  orderTotal.textContent = orderValue;
  orderValue = 0;
  //orderList.remove(orderRemoveList);
});

removeList.forEach((item) => {
  item.addEventListener("click", () => {
    const orderRemoveList = document.querySelectorAll(
      ".order-item-list .added-item span"
    );
    orderRemoveList.forEach((itemRemove) => {
      itemRemove.remove();
    });
  });
});

for (let i = 0; i < check.length; i++) {
  check[i].addEventListener("change", () => {
    if (check[i].checked) {
      count += 1;
    } else {
      count -= 1;
    }
    if (count > 0) {
      menuBtn.classList.add("menu-visible");
    } else {
      menuBtn.classList.remove("menu-visible");
    }
  });
}

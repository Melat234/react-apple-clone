
import $ from "jquery";
$(document).ready(() => {
  let h3 = $(".footer-links-wrapper h3");

  h3.on("click", function () {
    console.log($(window).width());
    if ($(window).width() <= 768) {
      console.log($(this).text());
      $(this).next("ul").slideToggle();

      $(this).toggleClass("expanded");
    }
  });

  $(window).resize(function () {
   
    if ($(window).width() > 768 || $(window).width() <= 768) {
      location.reload();
    }
  });
});

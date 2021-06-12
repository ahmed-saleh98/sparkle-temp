$(document).ready(() => {
  // Start Header
  let menu = document.querySelector("nav .links");
  $(menu).on("click", (e) => {
    e.stopPropagation();
  });
  // toogle active class to open and close menu
  $(menu).on("click", ".icon", (e) => {
    $("nav .links ul").slideToggle(300);
    $(menu).toggleClass("active");
  });

  // if click is'nt on the menu close it
  $(document).on("click", (e) => {
    if (e.target !== menu) {
      $(menu).removeClass("active");
      $("nav .links ul").slideUp(300);
    }
  });
  // show and hide nav on scroll
  let prevScrollpos = window.pageYOffset;
  $(window).on("scroll", () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      $("nav").css({
        top: "0px",
      });
    } else {
      $("nav").css({
        top: "-80px",
      });
    }
    prevScrollpos = currentScrollPos;
  });
  // End header

  // animate Skills inview
  let allSkills = document.querySelectorAll("#services .card div span");
  $(allSkills).waypoint(
    function () {
      $(allSkills).each(function () {
        $(this).css({
          width: $(this).attr("data-progress"),
          animation: "animate-positive 2s",
        });
      });
    },
    { offset: "95%" }
  );
});

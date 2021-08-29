// initial sidenav position
gsap.to(".sidenav", {
  x: "100%",
  duration: 0,
  ease: "power2.out",
});

$(".btn_hamburger").on("click", () => {
  gsap.to(".sidenav", {
    x: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  gsap.to(".overlay", { display: "block" });
  document.body.style.overflow = "hidden";
});

$(".overlay, .btn_close").on("click", () => {
  gsap.to(".sidenav", {
    x: "100%",
    duration: 0.4,
    ease: "power2.in",
  });

  gsap.to(".overlay", { display: "none" });
  setTimeout(() => {
    document.body.style.overflow = "unset";
  }, 600);
});

// close btn
const btnClose = document.querySelector(".btn_close");
const closeLines = document.querySelectorAll(".btn_close .line");

const closeTweens = gsap.timeline({ paused: true });

closeTweens.to(
  closeLines[0],
  {
    transformOrigin: "right",
    scaleX: 0,
    duration: 0.35,
    ease: "power3.in",
  },
  0.0
);

closeTweens.to(
  closeLines[1],
  {
    transformOrigin: "top",
    scaleY: 0,
    duration: 0.35,
    ease: "power3.in",
  },
  0.1
);

closeTweens.to(
  closeLines[0],
  {
    transformOrigin: "left",
    scaleX: 1,
    duration: 0.35,
    ease: "power3.out",
  },
  0.35
);

closeTweens.to(
  closeLines[1],
  {
    transformOrigin: "bottom",
    scaleY: 1,
    duration: 0.35,
    ease: "power3.out",
  },
  0.45
);

btnClose.addEventListener("mouseenter", () => {
  closeTweens.play();
});

btnClose.addEventListener("mouseleave", () => {
  closeTweens.reverse();
});

// btn expand
/*

const expandLines = document.querySelectorAll(".btn_expand .line");
tweensExpand = gsap.timeline({ paused: true });

tweensExpand.to(
  $(".btn_expand"),
  { rotate: 180, duration: 0.5, ease: "power2.inOut" },
  0.0
);
tweensExpand.to(
  expandLines[0],
  { rotate: 0, duration: 0.5, ease: "power2.inOut" },
  0.0
);
tweensExpand.to(
  expandLines[1],
  { rotate: 0, duration: 0.5, ease: "power2.inOut" },
  0.0
);

$(".btn_expand").on("click", () => {
  if ($(".sidenav_expandable_menu").hasClass("expanded")) {
    tweensExpand.reverse();
    $(".sidenav_expandable_menu").removeClass("expanded");
  } else {
    tweensExpand.play();
    $(".sidenav_expandable_menu").addClass("expanded");
  }
});

*/

$(".btn_expand").click(() => {
  $(this).addClass("name");
  // if (
  //   $(this).closest("li").find(".sidenav_expandable_menu").hasClass("expanded")
  // ) {
  //   $(this)
  //     .closest("li")
  //     .find(".sidenav_expandable_menu")
  //     .removeClass("expanded");
  //   //alert(25);
  //   // tweensExpand.reverse();
  //   // $(".sidenav_expandable_menu").removeClass("expanded");
  // } else {
  //   //alert(23);
  //   $(this).closest("li").find(".sidenav_expandable_menu").addClass("expanded");
  //   // tweensExpand.play();
  //   // $(".sidenav_expandable_menu").addClass("expanded");
  // }
});

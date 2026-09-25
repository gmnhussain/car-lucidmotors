const CustomEaseJorisOut = CustomEase.create(
  "custom-ease-joris-in-out",
  "M0,0 C0,0 0.06321,0.00831 0.09183,0.02187 0.11202,0.03143 0.12423,0.04818 0.14098,0.06678 0.15886,0.08663 0.17048,0.10044 0.18352,0.12369 0.20977,0.17049 0.22333,0.20101 0.24527,0.25272 0.32396,0.43819 0.36063,0.55081 0.43973,0.72753 0.45725,0.76667 0.47533,0.78789 0.50071,0.82341 0.52028,0.85079 0.53323,0.86772 0.55648,0.89095 0.579,0.91344 0.5957,0.92861 0.62212,0.94469 0.64852,0.96077 0.66996,0.97071 0.69997,0.97831 0.74143,0.98882 0.77084,0.99058 0.8161,0.99386 0.88718,0.99899 1,1 1,1"
);

const CustomEaseJorisInOut = CustomEase.create(
  "custom-ease-joris-in-out",
  "M0,0 C0,0 0.06321,0.00831 0.09183,0.02187 0.11202,0.03143 0.12423,0.04818 0.14098,0.06678 0.15886,0.08663 0.17048,0.10044 0.18352,0.12369 0.20977,0.17049 0.22333,0.20101 0.24527,0.25272 0.32396,0.43819 0.36063,0.55081 0.43973,0.72753 0.45725,0.76667 0.47533,0.78789 0.50071,0.82341 0.52028,0.85079 0.53323,0.86772 0.55648,0.89095 0.579,0.91344 0.5957,0.92861 0.62212,0.94469 0.64852,0.96077 0.66996,0.97071 0.69997,0.97831 0.74143,0.98882 0.77084,0.99058 0.8161,0.99386 0.88718,0.99899 1,1 1,1"
);

// button hamburger
const hamburger = document.querySelector(".btn_hamburger");
const lines = document.querySelectorAll(".btn_hamburger .line");

const tweens = gsap.timeline({ paused: true });

tweens.to(lines, {
  transformOrigin: "right",
  scaleX: 0,
  duration: 0.35,
  stagger: -0.1,
  ease: "power3.in",
});

tweens.to(lines, {
  transformOrigin: "left",
  scaleX: 1,
  duration: 0.35,
  stagger: -0.1,
  ease: "power3.out",
});

hamburger.addEventListener("mouseenter", () => {
  tweens.play();
});

hamburger.addEventListener("mouseleave", () => {
  tweens.reverse();
});

// button primary
const btnPrimary = document.querySelectorAll(".btn_primary");

btnPrimary.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn.querySelector(".canvas"), {
      scaleX: 1,
      duration: 0.6,
      transformOrigin: "right",
      ease: CustomEaseJorisOut,
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn.querySelector(".canvas"), {
      scaleX: 0,
      duration: 0.6,
      transformOrigin: "left",
      ease: CustomEaseJorisOut,
    });
  });
});

// // button 1
// const btn = document.querySelector(".btn_1");
// const btnBg = document.querySelector(".btn_1_bg");
// const btnLabel = document.querySelector(".btn_1_label");

// btn.addEventListener("mouseenter", (e) => {
//   handleMouseEnter();
// });

// function handleMouseEnter() {
//   gsap.to(btnBg, {
//     duration: 0.6,
//     //x: 0.0,
//     //width: 1.0,
//     ease: CustomEaseJorisOut,
//     // onUpdate: this.updateRequestedHandler,
//     onUpdate: () => {
//       btn.removeEventListener("mouseenter", handleMouseEnter);
//     },

//     // my solution
//     transformOrigin: "right",
//     scaleX: 1,
//   });

//   gsap.to(btnLabel, {
//     color: "#000",
//     duration: 0.6,
//     ease: CustomEaseJorisOut,
//   });
// }

// function handleMouseLeave() {
//   gsap.to(btnBg, {
//     duration: 0.6,
//     //width: 0.0,
//     ease: CustomEaseJorisOut,
//     onUpdate: () => {
//       btn.removeEventListener("mouseleave", handleMouseLeave);
//     },
//     // onComplete: () => {
//     //   this.pool.shift();
//     // },
//     onComplete: shift,

//     transformOrigin: "left",
//     scaleX: 0,
//   });

//   gsap.to(btnLabel, {
//     color: "#fff",
//     duration: 0.6,
//     ease: CustomEaseJorisOut,
//   });
// }

// function shift() {
//   gsap.to(btnBg, {
//     duration: 0,
//     ease: CustomEaseJorisOut,
//     transformOrigin: "left",
//     scaleX: 0,
//   });
// }

// const hamburger = document.querySelector(".btn_hamburger");
// const lines = document.querySelectorAll(".line");

// const aniHamb = gsap.timeline({ paused: true });

// aniHamb.to(
//   lines.forEach((line) => line),
//   {
//     transformOrigin: "right",
//     scaleX: 0,
//     duration: 0.35,
//     stagger: -0.1,
//     ease: "power3.in",
//   }
// );

// aniHamb.to(
//   lines.forEach((line) => line),
//   {
//     transformOrigin: "left",
//     scaleX: 1,
//     duration: 0.35,
//     stagger: -0.1,
//     ease: "power3.out",
//   }
// );

// hamburger.addEventListener("mouseenter", (e) => {
//   aniHamb.play();
// });

// hamburger.addEventListener("mouseleave", (e) => {
//   aniHamb.reverse();
// });

// button primary

// var canvas = document.createElement("canvas");

// canvas.id = "CursorLayer";
// canvas.width = 142;
// canvas.height = 53;
// canvas.style.zIndex = 8;
// canvas.style.position = "absolute";
// canvas.style.border = "1px solid";

// var button_primary = document.getElementById("button_primary");
// button_primary.appendChild(canvas);

// function handleMouseEnter() {
//   // const canvas = document.createElement("canvas");

//   // canvas.id = "CursorLayer";
//   // canvas.width = 142;
//   // canvas.height = 53;
//   // //canvas.style.zIndex = 8;
//   // canvas.style.position = "absolute";
//   // canvas.style.border = "1px solid";
//   // canvas.style.transform = scaleX(0);

//   // var button_primary = document.getElementById("button_primary");
//   // button_primary.appendChild(canvas);

//   // gsap.to(canvas, {
//   //   duration: 0.6,
//   //   //x: 0.0,
//   //   width: 1.0,
//   //   ease: CustomEaseJorisOut,
//   //   // onUpdate: this.updateRequestedHandler,
//   //   // onUpdate: () => {
//   //   //   btn.removeEventListener("mouseenter", handleMouseEnter);
//   //   // },

//   //   // my solution
//   //   transformOrigin: "right",
//   //   scaleX: 1,
//   // });

//   // gsap.to(btnLabel, {
//   //   color: "#000",
//   //   duration: 0.6,
//   //   ease: CustomEaseJorisOut,
//   // });
// }

// btn.addEventListener("mouseenter", (e) => {
//   handleMouseEnter();
// });

// btn.addEventListener("mouseleave", (e) => {
//   handleMouseLeave();
// });

// const btn = document.querySelector(".btn_1");
// const canvas = document.querySelector(".btn_1_bg");

// var contexts = [];

// //var rect = { x: 0, y: 50, width: 100, height: 100 };
// function createContext() {
//   // let ctx = canvas.getContext("2d");
//   // ctx.fillStyle = "red";
//   // ctx.fillRect(0, 0, canvas.width, canvas.height);
//   // ctx.fill();
//   // ctx.style.transform = scaleX(0);
//   // contexts.push(ctx);
//   const ctx = document.createElement("canvas");
//   ctx.width = 142;
//   ctx.height = 53;
//   //canvas.style.zIndex = 8;
//   ctx.style.position = "absolute";
//   ctx.style.border = "1px solid";
//   ctx.style.background = "#fff";
//   contexts.push(ctx);
// }

// function getLastContext() {
//   const length = contexts.length;
//   return contexts[length - 1];
// }

// function rect() {
//   return { x: 0, y: 50, width: 100, height: 100 };
// }

// function add() {
//   gsap.to(canvas, {
//     duration: 0.6,
//     x: 0.0,
//     width: 100,
//     ease: CustomEaseJorisOut,
//     //onUpdate: this._updateRequestedHandler,
//   });
// }

// function remove() {
//   gsap.to(canvas, {
//     duration: 0.6,
//     width: 0.0,
//     ease: CustomEaseJorisOut,
//     //onUpdate: this._updateRequestedHandler,
//     // onComplete: () => {
//     //   this._pool.shift();
//     // },
//   });
// }

// btn.addEventListener("mouseenter", (e) => {
//   createContext();
//   let ctx = getLastContext();
//   btn.appendChild(ctx);
//   gsap.fromTo(
//     ctx,
//     {
//       scaleX: 0,
//     },
//     {
//       scaleX: 1,
//       duration: 0.6,
//       transformOrigin: "right",
//       ease: CustomEaseJorisOut,
//     }
//   );
// });

// btn.addEventListener("mouseleave", (e) => {
//   let ctx = getLastContext();
//   gsap.to(ctx, {
//     scaleX: 0,
//     duration: 0.6,
//     ease: CustomEaseJorisOut,
//   });
// });

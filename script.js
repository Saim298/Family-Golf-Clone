var crsr = document.querySelector("#cursor");
var crsr_blur = document.querySelector("#cursor-blur");
addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsr_blur.style.left = dets.x - 250 + "px";
  crsr_blur.style.top = dets.y - 250 + "px";
});
addEventListener("mousemove", function (dets) {});

gsap.to("#nav", {
  height: "110px",
  backgroundColor: "#000",
  duration: 0.5,
  delay: 1,
  // opacity:0,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    opacity: 0,
    start: "top -20%",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

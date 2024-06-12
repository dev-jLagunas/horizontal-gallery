import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelSeven(scrollTween) {
  gsap.to(".panel-seven-title", {
    scrollTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-seven",
      start: "20% 75%",
      end: "center center",
      scrub: 1,
      markers: false,
      toggleActions: "play none none reverse",
      toggleClass: { targets: ".panel-seven-title", className: "jello" },
    },
  });

  const tlPanelSevenImg = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-seven-img-dog",
      start: "left 70%",
      end: "right left",
      scrub: 1,
      markers: false,
      toggleActions: "play none none reverse",
    },
  });
  tlPanelSevenImg
    .to(".panel-seven-img-dog", {
      x: 400,
      y: -150,
      duration: 2,
    })
    .to(
      ".panel-seven-img-dog",
      {
        rotation: 10,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.2,
      },
      0
    )
    .to(".panel-seven-img-dog", {
      x: 800,
      y: 0,
      duration: 2,
    })
    .to(
      ".panel-seven-img-dog",
      {
        rotation: 10,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.2,
      },
      2
    );

  const tlPanelSevenImgCat = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-seven",
      start: "left 60%",
      end: "right center",
      scrub: 1,
      markers: false,
      toggleActions: "play none none reverse",
    },
  });
  tlPanelSevenImgCat
    .to(".panel-seven-img-cat", {
      x: -500,
      y: 200,
      duration: 2,
    })
    .to(
      ".panel-seven-img-cat",
      {
        rotation: 10,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.2,
      },
      0
    )
    .to(".panel-seven-img-cat", {
      x: -800,
      y: 0,
      duration: 2,
    })
    .to(
      ".panel-seven-img-cat",
      {
        rotation: 10,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.2,
      },
      2
    );
}

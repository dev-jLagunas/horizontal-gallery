import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelTwo(scrollTween) {
  const tlPanelTwoImgOne = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-two",
      horizontal: true,
      markers: false,
      start: "left right",
      end: "center center",
      toggleActions: "play none none reverse",
      scrub: 1,
    },
  });
  tlPanelTwoImgOne.to(".panel-two-wrapper-1", {
    x: -30,
    y: -100,
    scale: 1.4,
    duration: 1,
  });

  const tlPanelTwoImgTwo = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-two",
      horizontal: true,
      markers: false,
      start: "left right",
      end: "center center",
      toggleActions: "play none none reverse",
      scrub: 1,
    },
  });
  tlPanelTwoImgTwo.to(".panel-two-wrapper-2", {
    x: 35,
    y: -100,
    scale: 1.4,
    duration: 1,
  });
  const tlPanelTwoImgThree = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-two",
      horizontal: true,
      markers: false,
      start: "left right",
      end: "right right",
      toggleActions: "play none none reverse",
      scrub: 1,
    },
  });
  tlPanelTwoImgThree.to(".panel-two-wrapper-3", {
    x: -30,
    y: 10,
    scale: 1.4,
    duration: 1,
  });
  const tlPanelTwoImgFour = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-two",
      horizontal: true,
      markers: false,
      start: "left right",
      end: "right right",
      toggleActions: "play none none reverse",
      scrub: 1,
    },
  });
  tlPanelTwoImgFour.to(".panel-two-wrapper-4", {
    x: 35,
    y: 10,
    scale: 1.4,
    duration: 1,
  });
  gsap.to(".panel-two-img-caption", {
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-two",
      horizontal: true,
      markers: false,
      start: "center right",
      end: "right left",
      toggleActions: "play none none reverse",
      toggleClass: {
        targets: ".panel-two-img-caption",
        className: "caption-active",
      },
      scrub: 1,
    },
  });
}

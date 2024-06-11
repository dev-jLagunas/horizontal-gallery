import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelFour(scrollTween) {
  const tlPanelFourImgOne = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-four",
      start: "left 70%",
      end: "center 30%",
      scrub: 1,
      markers: false,
      horizontal: true,
    },
  });

  tlPanelFourImgOne.to(".panel-img-wrapper-1", {
    y: -150,
    duration: 2,
  });

  const tlPanelFourImgTwo = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-four",
      start: "left 70%",
      end: "center 30%",
      scrub: 1,
      markers: false,
      horizontal: true,
    },
  });

  tlPanelFourImgTwo.to(".panel-img-wrapper-2", {
    y: -150,
    duration: 2,
  });

  const tlPanelFourImgThree = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-four",
      start: "left 70%",
      end: "center 30%",
      scrub: 1,
      markers: false,
      horizontal: true,
    },
  });

  tlPanelFourImgThree.to(".panel-img-wrapper-3", {
    y: -150,
    duration: 2,
  });

  const tlPanelFourImgFour = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-four",
      start: "left 70%",
      end: "center 30%",
      scrub: 1,
      markers: false,
      horizontal: true,
    },
  });

  tlPanelFourImgFour.to(".panel-img-wrapper-4", {
    y: 150,
    duration: 2,
  });

  const tlPanelFourImgFive = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-four",
      start: "left 70%",
      end: "center 30%",
      scrub: 1,
      markers: false,
      horizontal: true,
    },
  });

  tlPanelFourImgFive.to(".panel-img-wrapper-5", {
    y: 150,
    duration: 2,
  });

  const tlPanelFourImgSix = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-four",
      start: "left 70%",
      end: "center 30%",
      scrub: 1,
      markers: false,
      horizontal: true,
    },
  });

  tlPanelFourImgSix.to(".panel-img-wrapper-6", {
    y: 150,
    duration: 2,
  });

  const tlPanelFourTitle = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-four",
      start: "left 70%",
      end: "center 60%",
      scrub: 1,
      markers: false,
      horizontal: true,
    },
  });

  tlPanelFourTitle.to(".panel-four-title", {
    scale: 3,
    color: "#CDE8E5",
    duration: 1,
  });

  const tlPanelFourCherryImg = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-four-cherry-img",
      start: "left 70%",
      end: "center 64%",
      scrub: 1,
      markers: false,
      horizontal: true,
    },
  });

  tlPanelFourCherryImg
    .to(".panel-four-cherry-img", {
      opacity: 1,
      y: 350,
      rotate: 10,
      duration: 1,
    })
    .to(".panel-four-cherry-img", {
      y: 300,
      rotate: 0,
      duration: 1,
    })
    .to(".panel-four-cherry-img", {
      y: 350,
      rotate: 15,
      duration: 1,
    });
}

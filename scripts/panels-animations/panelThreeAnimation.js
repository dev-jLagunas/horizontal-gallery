import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelThree(scrollTween) {
  const panelTransitionTitle = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-three",
      toggleActions: "play none none reverse",
      start: "left right",
      end: "center 65%",
      markers: false,
      scrub: 1,
    },
  });

  panelTransitionTitle
    .to(".panel-three-title", {
      yPercent: 500,
      duration: 1,
    })
    .to(".panel-three-title", {
      xPercent: 70,
      rotate: 90,
      scale: 1.8,
      duration: 1,
    })
    .to(".panel-three-title", {
      color: "black",
      duration: 1,
    });

  const tlPanelThreeImgOne = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-three-wrapper-1",
      toggleActions: "play none none reverse",
      start: "left right",
      end: "right center",
      markers: false,
      scrub: 1,
    },
  });

  tlPanelThreeImgOne.to(".panel-three-wrapper-1", {
    y: 400,
    x: -150,
    duration: 2,
  });

  const tlPanelThreeImgTwo = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-three-wrapper-2",
      toggleActions: "play none none reverse",
      start: "left right",
      end: "right center",
      markers: false,
      scrub: 1,
    },
  });

  tlPanelThreeImgTwo.to(".panel-three-wrapper-2", {
    y: 10,
    x: -170,
    duration: 2,
  });

  const tlPanelThreeImgThree = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-three-wrapper-3",
      toggleActions: "play none none reverse",
      start: "left right",
      end: "right center",
      markers: false,
      scrub: 1,
    },
  });

  tlPanelThreeImgThree
    .to(".panel-three-wrapper-3", {
      x: 300,
      y: 50,
      duration: 2,
    })
    .to(".panel-three-wrapper-3", {
      scale: 1.3,
      duration: 2,
    });

  const tlPanelThreeImgFour = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-three-wrapper-4",
      toggleActions: "play none none reverse",
      start: "left right",
      end: "right center",
      markers: false,
      scrub: 1,
    },
  });

  tlPanelThreeImgFour.to(".panel-three-wrapper-4", {
    y: 420,
    x: 300,
    duration: 2,
  });

  const tlPanelThreeSubtitle = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-three",
      toggleActions: "play none none reverse",
      start: "25% right",
      end: "right right",
      markers: false,
      scrub: 1,
    },
  });

  tlPanelThreeSubtitle
    .to(".panel-three-subtitle", {
      x: 600,
      duration: 1,
    })
    .to(".panel-three-subtitle", {
      color: "#C40C0C",
      duration: 2,
    })
    .to(".panel-three-subtitle", {
      y: -400,
      scale: 2,
      rotate: -15,
      duration: 2,
    });
}

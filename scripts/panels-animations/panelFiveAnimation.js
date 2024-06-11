import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelFive(scrollTween) {
  const tlPanelFiveWrapper = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-five",
      start: "top 70%",
      end: "center 30%",
      scrub: 1,
      markers: false,
      horizontal: true,
    },
  });

  tlPanelFiveWrapper.to(".panel-five-img-wrapper", {
    width: "100%",
    duration: 3,
  });

  const tlPanelFiveTitle = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-five-title",
      start: "left 80%",
      end: "center 60%",
      scrub: 1,
      markers: false,
      horizontal: true,
    },
  });

  tlPanelFiveTitle
    .to(".panel-five-title", {
      scale: 2,
      color: "pink",
      y: 200,

      duration: 2,
    })
    .to(".panel-five-title", {
      x: 300,
      duration: 2,
    });
}

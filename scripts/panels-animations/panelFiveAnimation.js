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
      markers: true,
      horizontal: true,
    },
  });

  tlPanelFiveWrapper.to(".panel-five-img-wrapper", {
    width: "100%",
    duration: 3,
  });
}

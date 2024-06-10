import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelOne() {
  const tlPanelImg = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel-one-img",
      markers: false,
      toggleActions: "play none none reverse",
      scrub: 2,
      start: "top center",
      end: "center center",
    },
  });

  tlPanelImg.to(".panel-one-img", {
    width: "100%",
    height: "100%",
    duration: 2,
  });

  gsap.to(".panel-one-img-caption", {
    scrollTrigger: {
      trigger: ".panel-one-img",
      markers: false,
      toggleActions: "play none none reverse",
      scrub: 1,
      start: "top center",
      end: "60% center",
    },
    opacity: 1,
    y: 200,
    x: "50vw",
    scale: 1.5,
    duration: 2,
  });
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelEight(scrollTween) {
  const panels = gsap.utils.toArray(".panel");

  const fakePin = gsap.to(".panel-eight", {
    x: window.innerWidth * (panels.length - 8), // Updated to reflect relative position in panel 7
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".panel-eight",
    start: "left left",
    // endTrigger: ".panel-eight",
    end: () => "+=" + window.innerWidth * (panels.length - 8),
    scrub: true,
    containerAnimation: scrollTween,
    animation: fakePin,
  });

  // Panel Eight Animations
  const tlPanelEightImgOne = gsap.timeline({
    scrolTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-eight-wrapper-1",
      start: "left center",
      end: "center center",
      scrub: 1,
      markers: { fontSize: "1.5rem" },
      toggleActions: "play none none reverse",
    },
  });

  tlPanelEightImgOne.to(".panel-eight-wrapper-1", {
    y: -400,
    duration: 1,
  });
}

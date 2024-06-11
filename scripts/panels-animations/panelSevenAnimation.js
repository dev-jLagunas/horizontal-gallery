import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelSeven(scrollTween) {
  const panels = gsap.utils.toArray(".panel");
  // Panel Seven Animations
  const fakePin = gsap.to(".panel-seven", {
    x: window.innerWidth * (panels.length - 7), // Updated to reflect relative position in panel 7
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".panel-seven",
    start: "left left",
    // endTrigger: ".panel-eight",
    end: () => "+=" + window.innerWidth * (panels.length - 7),
    scrub: true,
    containerAnimation: scrollTween,
    animation: fakePin,
  });

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

  const tlPaneSevenImg = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      horizontal: true,
      trigger: ".panel-seven",
      start: "top 75%",
      end: "center left",
      scrub: 1,
      markers: false,
      toggleActions: "play none none reverse",
      toggleClass: { targets: ".panel-seven-img", className: "wobble" },
    },
  });
}

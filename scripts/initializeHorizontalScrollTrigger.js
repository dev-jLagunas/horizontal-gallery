import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animatePanelOne } from "./panels-animations/panelOneAnimation.js";
import { animatePanelTwo } from "./panels-animations/panelTwoAnimation.js";
import { animatePanelThree } from "./panels-animations/panelThreeAnimation.js";

gsap.registerPlugin(ScrollTrigger);

export function initializeHorizontalScrollTrigger() {
  const panels = gsap.utils.toArray(".panel");

  // Scroll Tween for horizontal scroll
  const scrollTween = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-container",
      pin: true,
      scrub: 1,
      end: () => "+=" + document.querySelector(".scroll-container").offsetWidth,
    },
  });

  // Progress Bar
  gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      scrub: 1,
      start: "top top",
      end: "bottom bottom",
    },
  });

  // Panel One Animation
  animatePanelOne();

  // Panel Two Animation
  animatePanelTwo(scrollTween);

  // Panel Three Animation
  animatePanelThree(scrollTween);

  return scrollTween;
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animatePanelOne } from "./panels-animations/panelOneAnimation.js";
import { animatePanelTwo } from "./panels-animations/panelTwoAnimation.js";
import { animatePanelThree } from "./panels-animations/panelThreeAnimation.js";
import { animatePanelFour } from "./panels-animations/panelFourAnimation.js";
import { animatePanelFive } from "./panels-animations/panelFiveAnimation.js";
import { animatePanelSix } from "./panels-animations/panelSixAnimation.js";
import { animatePanelSeven } from "./panels-animations/panelSevenAnimation.js";
import { animatePanelEight } from "./panels-animations/panelEightAnimation.js";
import { animatePanelNine } from "./panels-animations/panelNineAnimation.js";
import { animatePanelOutro } from "./panels-animations/panelOutroAnimation.js";

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

  // Panel Four Animation
  animatePanelFour(scrollTween);

  // Panel Five Animation
  animatePanelFive(scrollTween);

  // Panel Six Animation
  animatePanelSix(scrollTween);

  // Panel Seven Animation
  animatePanelSeven(scrollTween);

  // Panel Eight Animation
  animatePanelEight(scrollTween);

  // Panel Nine Animation
  animatePanelNine(scrollTween);

  // Panel Ten Animation
  animatePanelOutro(scrollTween);

  return scrollTween;
}

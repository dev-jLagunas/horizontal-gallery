import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initializeHorizontalScrollTrigger() {
  const panels = gsap.utils.toArray(".panel");
  console.log("Panels:", panels); // Log panels to check if they are correctly selected

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
  console.log("ScrollTween:", scrollTween); // Log scrollTween to check if it is correctly created

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

  return scrollTween;
}

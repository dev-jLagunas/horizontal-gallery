import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initializeHorizontalScrollTrigger } from "./initializeHorizontalScrollTrigger";
import { initializeVerticalScrollTrigger } from "./initializeVerticalScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function horizontalScroll() {
  const mediaQuery = "(min-width: 1024px)";
  let scrollTween;

  function initializeHorizontalAnimations() {
    scrollTween = initializeHorizontalScrollTrigger();
  }

  function initializeVerticalAnimations() {
    initializeVerticalScrollTrigger();
  }

  function destroyScrollTrigger() {
    if (scrollTween) {
      scrollTween.scrollTrigger.kill();
      scrollTween.kill();
    }
  }

  function checkViewport(e) {
    if (e.matches) {
      destroyScrollTrigger();
      initializeHorizontalAnimations();
    } else {
      destroyScrollTrigger();
      initializeVerticalAnimations();
    }
  }

  const mql = window.matchMedia(mediaQuery);
  checkViewport(mql);

  mql.addEventListener("change", checkViewport);

  return scrollTween;
}

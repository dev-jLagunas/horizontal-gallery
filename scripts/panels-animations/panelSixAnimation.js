import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelSix(scrollTween) {
  // Panel Six Animations
  function createScrollTrigger(target) {
    gsap.to(target, {
      scrollTrigger: {
        trigger: target,
        containerAnimation: scrollTween,
        markers: false,
        toggleActions: "play none none reverse",
        scrub: 1,
        start: "left right",
        end: "right left",
        horizontal: true,
        toggleClass: { targets: target, className: "active" },
      },
    });
  }

  const targets = [
    ".panel-six-img-1",
    ".panel-six-img-2",
    ".panel-six-img-3",
    ".panel-six-img-4",
    ".panel-six-img-5",
  ];

  targets.forEach(createScrollTrigger);
}

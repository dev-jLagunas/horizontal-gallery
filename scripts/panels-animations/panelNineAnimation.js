import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelNine(scrollTween) {
  const panels = gsap.utils.toArray(".panel");
  // FakePin animation
  const fakePin = gsap.to(".panel-nine", {
    x: window.innerWidth * (panels.length - 8),
    ease: "none",
  });
  ScrollTrigger.create({
    trigger: ".panel-nine-img-wrapper",
    start: "left left",
    end: () => "+=" + window.innerWidth * (panels.length - 9),
    scrub: 1,
    markers: false,
    containerAnimation: scrollTween,
    animation: fakePin,
  });

  const tlPanelNineWrapper = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-nine-img-wrapper",
      start: "left 100%",
      end: "right 20%",
      scrub: 1,
      horizontal: true,
      markers: false,
    },
  });
  tlPanelNineWrapper
    .to(".panel-nine-img-wrapper", {
      height: "700px",
      duration: 2,
    })
    .to(
      ".panel-nine-img-wrapper",
      {
        height: "0px",
        duration: 2,
      },
      2
    );
}

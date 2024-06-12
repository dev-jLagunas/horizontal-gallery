import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelEight(scrollTween) {
  const panelEightGoatImg = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-eight-goat-png",
      start: "left 80%",
      end: "right center",
      scrub: 1,
      markers: false,
      toggleActions: "play none none reverse",
    },
  });

  panelEightGoatImg.to(".panel-eight-goat-png", {
    y: -120,
    scale: 3,
    duration: 2,
  });

  const panelEightDogImg = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-eight-dog-png",
      start: "left 80%",
      end: "right center",
      scrub: 1,
      markers: true,
      toggleActions: "play none none reverse",
    },
  });

  panelEightDogImg.to(".panel-eight-dog-png", {
    x: 180,
    scale: 2,
    duration: 2,
  });

  const panelEightCatImg = gsap.timeline({
    scrollTrigger: {
      containerAnimation: scrollTween,
      trigger: ".panel-eight-cat-png",
      start: "left 80%",
      end: "right 40%",
      scrub: 1,
      markers: false,
      toggleActions: "play none none reverse",
    },
  });

  panelEightCatImg.to(".panel-eight-cat-png", {
    x: -150,
    scale: 1.7,
    duration: 2,
  });
}

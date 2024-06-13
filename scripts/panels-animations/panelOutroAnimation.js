import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animatePanelOutro() {
  const tlPanelOutroGridContainer = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel-outro-puzzle-wrapper",
      start: "top bottom",
      end: "bottom 20%",
      scrub: 1,
      toggleActions: "play none none reverse",
      markers: false,
    },
  });

  tlPanelOutroGridContainer
    .to(".panel-outro-img-special-1", {
      objectPosition: "40% 0%",
      duration: 2,
    })
    .to(".panel-outro-img-special-1", {
      objectPosition: "70% 0%",
      duration: 2,
    })
    .to(".panel-outro-img-special-1", {
      objectPosition: "50% 50%",
      duration: 2,
    });

  const tlPanelOutroGridContainer2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel-outro",
      start: "top bottom",
      end: "center 10%",
      scrub: 1,
      toggleActions: "play none none reverse",
      markers: false,
    },
  });

  tlPanelOutroGridContainer2
    .to(".panel-outro-img-special-2", {
      objectPosition: "0% 20%",
      duration: 2,
    })
    .to(".panel-outro-img-special-2", {
      objectPosition: "0% 60%",
      duration: 2,
    })
    .to(".panel-outro-img-special-2", {
      objectPosition: "0% 40%",
      duration: 2,
    });

  const tlPanelOutroGridContainer5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel-outro",
      start: "top bottom",
      end: "center 60%",
      scrub: 1,
      toggleActions: "play none none reverse",
      markers: false,
    },
  });

  tlPanelOutroGridContainer5
    .to(".panel-outro-puzzle-wrapper-5", {
      width: "55%",
      height: "500px",
      gap: 20,
      borderRadius: "50%",
      duration: 2,
    })
    .to(".panel-outro-puzzle-wrapper-5", {
      duration: 2,
    });

  const tlPanelOutroImgCaption = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel-outro",
      start: "top bottom",
      end: "center 10%",
      scrub: 1,
      toggleActions: "play none none reverse",
      markers: false,
    },
  });

  tlPanelOutroImgCaption.to(".panel-outro-img-caption", {
    scale: 1.5,
    y: 100,
    duration: 2,
  });
}

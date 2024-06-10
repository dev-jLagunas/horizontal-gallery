import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalScroll } from "./scripts/horizontal";

gsap.registerPlugin(ScrollTrigger);

horizontalScroll();

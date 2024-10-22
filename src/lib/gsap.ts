import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

// Only register plugins on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CustomEase);
}

// Define default animation settings
const DURATION = 0.5;
const EASE = "power2.out";

// Configure GSAP globally
gsap.config({
  autoSleep: 60,
  force3D: true,
  nullTargetWarn: false,
});

// Set default animation properties
gsap.defaults({
  duration: DURATION,
  ease: EASE,
});

// Export a function to get GSAP instance
export const getGSAP = () => {
  return gsap;
};

// Export plugins and constants
export { ScrollTrigger, CustomEase, DURATION, EASE };

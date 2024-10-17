import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

console.log("Importing GSAP and plugins");

// Only register plugins on the client side
if (typeof window !== "undefined") {
  console.log("Registering GSAP plugins");
  gsap.registerPlugin(ScrollTrigger, CustomEase);
}

// Define default animation settings
const DURATION = 0.5;
const EASE = "power2.out";
console.log(`Default animation settings: Duration=${DURATION}, Ease=${EASE}`);

// Configure GSAP globally
console.log("Configuring GSAP globally");
gsap.config({
  autoSleep: 60,
  force3D: true,
  nullTargetWarn: false,
});

// Set default animation properties
console.log("Setting default GSAP animation properties");
gsap.defaults({
  duration: DURATION,
  ease: EASE,
});

// Export a function to get GSAP instance
export const getGSAP = () => {
  console.log("Getting GSAP instance");
  return gsap;
};

// Export plugins and constants
console.log("Exporting GSAP plugins and constants");
export { ScrollTrigger, CustomEase, DURATION, EASE };

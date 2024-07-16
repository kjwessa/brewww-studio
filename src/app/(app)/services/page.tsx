import { ServicesHero } from "./ServicesHero";
import { ServicesIntro } from "./ServicesIntro";
import { ServicesGrid } from "./ServicesGrid";
import { ServicesSpecialty } from "./ServicesSpeciality";
import { ServicesImpact } from "./ServicesImpact";
import { ServicesROI } from "./ServicesROI";
import { ServicesTestimonial } from "./ServicesTestimonial";

export default function Page() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <ServicesGrid />
      <ServicesSpecialty />
      <ServicesImpact />
      <ServicesROI />
      <ServicesTestimonial />
    </>
  );
}

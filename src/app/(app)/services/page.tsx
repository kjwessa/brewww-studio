import { ServicesHero } from "./ServicesHero";
import { ServicesIntro } from "./ServicesIntro";
import { ServicesSpecialty } from "./ServicesSpeciality";
import { ServicesImpact } from "./ServicesImpact";
import { ServicesROI } from "./ServicesROI";
import { ServicesTestimonial } from "./ServicesTestimonial";
import { LineFull } from "@/app/components/LineFull";

export default function Page() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <LineFull />
      <ServicesSpecialty />
      <ServicesImpact />
      <LineFull />
      <ServicesROI />
      <LineFull />
      <ServicesTestimonial />
    </>
  );
}

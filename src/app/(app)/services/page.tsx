import { ServicesHero } from "./ServicesHero";
import { ServicesIntro } from "./ServicesIntro";
import { ServicesSpecialty } from "./ServicesSpeciality";
import { ServicesImpact } from "./ServicesImpact";
import { ServicesTestimonial } from "./ServicesTestimonial";

export default function Page() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <ServicesSpecialty />
      <ServicesImpact />
      <ServicesTestimonial />
    </>
  );
}

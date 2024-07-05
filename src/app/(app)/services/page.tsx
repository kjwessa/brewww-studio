import { ServicesHero } from "./ServicesHero";
import { ServicesIntro } from "./ServicesIntro";
import { ServicesSpecialty } from "./ServicesSpeciality";
import { ServicesTestimonial } from "./ServicesTestimonial";

export default function Page() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <ServicesSpecialty />
      <ServicesTestimonial />
    </>
  );
}

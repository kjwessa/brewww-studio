import { AboutHero } from "./components/AboutHero";
import { AboutIntro } from "./components/AboutIntro";
import { AboutPartner } from "./components/AboutPartner";
import { AboutGood } from "./components/AboutGood";

export default function Page() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutPartner />
      <AboutGood />
    </main>
  );
}

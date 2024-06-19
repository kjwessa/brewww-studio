import { AboutHero } from "./AboutHero";
import { AboutIntro } from "./AboutIntro";
import { AboutPartner } from "./AboutPartner";
import { AboutGood } from "./AboutGood";
import { AboutTeam } from "./AboutTeam";
import { PreFooter } from "@/app/components/PreFooter";

export default function Page() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutPartner />
      <AboutGood />
      <AboutTeam />
      <PreFooter />
    </main>
  );
}

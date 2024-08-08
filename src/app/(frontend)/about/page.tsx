import { AboutHero } from "./AboutHero";
import { AboutDetails } from "./AboutDetails";
import { AboutIntro } from "./AboutIntro";
import { AboutPartner } from "./AboutPartner";
import { AboutGood } from "./AboutGood";
import { AboutTeam } from "./AboutTeam";
import { PreFooter } from "@/app/components/PreFooter";

export default function Page() {
  return (
    <main>
      <AboutHero />
      <AboutDetails />
      <AboutIntro />
      <AboutPartner />
      <AboutGood />
      <AboutTeam />
      <PreFooter />
    </main>
  );
}

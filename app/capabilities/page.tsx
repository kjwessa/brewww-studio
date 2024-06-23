import { CapabilitiesHero } from "./components/CapabilitiesHero";
import { CapabilitiesBranding } from "./components/CapabilitiesBranding";
import { CapabilitiesWeb } from "./components/CapabilitiesWeb";
import { CapabilitiesContent } from "./components/CapabilitiesContent";
export default function Page() {
  return (
    <main>
      <CapabilitiesHero />
      <CapabilitiesBranding />
      <CapabilitiesWeb />
      <CapabilitiesContent />
    </main>
  );
}

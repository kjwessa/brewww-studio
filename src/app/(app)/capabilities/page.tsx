import { CapabilitiesHero } from "./CapabilitiesHero";
import { CapabilitiesBranding } from "./CapabilitiesBranding";
import { CapabilitiesWeb } from "./CapabilitiesWeb";
import { CapabilitiesContent } from "./CapabilitiesContent";
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

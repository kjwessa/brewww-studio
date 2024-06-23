import { CapabilitiesHero } from "./components/CapabilitiesHero";
import { CapabilitiesBranding } from "./components/CapabilitiesBranding";
import { CapabilitiesWeb } from "./components/CapabilitiesWeb";
export default function Page() {
  return (
    <main>
      <CapabilitiesHero />
      <CapabilitiesBranding />
      <CapabilitiesWeb />
    </main>
  );
}

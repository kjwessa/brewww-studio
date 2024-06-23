import { InsightsHero } from "./InsightsHero";
import { InsightsBody } from "./InsightsBody";
import { InsightsWonder } from "./InsightsWonder";
import { InsightsHero2 } from "./InsightsHero2";
export default function Page() {
  return (
    <main>
      <InsightsHero />
      <InsightsHero2 />
      <InsightsBody />
      <InsightsWonder />
    </main>
  );
}

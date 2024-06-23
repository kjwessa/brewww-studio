import { InsightsHero } from "./components/InsightsHero";
import { InsightsBody } from "./components/InsightsBody";
import { InsightsWonder } from "./components/InsightsWonder";
export default function Page() {
  return (
    <main>
      <InsightsHero />
      <InsightsBody />
      <InsightsWonder />
    </main>
  );
}

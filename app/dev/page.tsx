import { HomeHero } from "./components/HomeHero";
import { HomeFeat } from "./components/HomeFeat";
import { HomeFocus } from "./components/HomeFocus";

export default function Page() {
  return (
    <main>
      <HomeHero />
      <HomeFeat />
      <HomeFocus />
    </main>
  );
}

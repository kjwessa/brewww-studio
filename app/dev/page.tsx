import { HomeHero } from "./components/HomeHero";
import { HomeFeat } from "./components/HomeFeat";
import { HomeFocus } from "./components/HomeFocus";
import { HomePosts } from "./components/HomePosts";

export default function Page() {
  return (
    <main>
      <HomeHero />
      <HomeFeat />
      <HomeFocus />
      <HomePosts />
    </main>
  );
}

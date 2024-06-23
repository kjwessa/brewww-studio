import { HomeHero } from "./components/HomeHero";
import { HomeFeat } from "./components/HomeFeat";
import { HomeFocus } from "./components/HomeFocus";
import { HomePosts } from "./components/HomePosts";
import { HomeImage } from "./components/HomeImage";
import { HomeServices } from "./components/HomeServices";
import { PreFooter } from "../../components/PreFooter";

export default function Page() {
  return (
    <main>
      <HomeHero />
      <HomeFeat />
      <HomeFocus />
      <HomePosts />
      <HomeImage />
      <HomeServices />
      <PreFooter />
    </main>
  );
}

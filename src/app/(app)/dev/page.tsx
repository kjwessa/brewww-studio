import { HomeHero } from "./HomeHero";
import { HomeFeat } from "./HomeFeat";
import { HomeFocus } from "./HomeFocus";
import { HomePosts } from "./HomePosts";
import { HomeImage } from "./HomeImage";
import { HomeServices } from "./HomeServices";
import { PreFooter } from "@/app/components/PreFooter";

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

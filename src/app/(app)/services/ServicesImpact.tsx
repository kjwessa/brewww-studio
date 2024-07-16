import { ImpactCard } from "@/app/components/ImpactCard";

export function ServicesImpact() {
  return (
    <>
      <div className="bg-white text-stone-950">
        <div className="mx-auto w-full max-w-6xl px-8 py-12">
          <div className="text-2xl font-medium">Impact & Results</div>
          <div className="grid grid-cols-3 gap-8 pt-12">
            <ImpactCard
              number={3}
              letter={"m"}
              text={
                "Brand strategy and site development of The Merry Beggars led to 3 million downloads of their original audio entertainment podcast."
              }
            />
            <ImpactCard
              number={10}
              letter={"x"}
              text={
                " Brand strategy and development of Fem Catholic led to a grant for their initiative, ten times their original site investment."
              }
            />
            <ImpactCard
              number={760}
              letter={"%"}
              text={
                "Increase in online donations within 90 days after Joseph House site rebrand and website launch."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

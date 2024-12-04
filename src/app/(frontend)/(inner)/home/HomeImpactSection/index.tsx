import { ImpactCard } from "@/components/ImpactCard";

const impactData = [
  {
    value: "2024",
    title: "Years of experience",
    description: "We elevated our design agency to new heights, embracing cutting-edge trends and innovative practices",
  },
  {
    value: "137%",
    title: "Growth",
    description: "The trust our clients place in our ability to deliver exceptional design solutions.",
  },
  {
    value: "+26",
    title: "Awards",
    description: "Celebrating our commitment to excellence, innovation, and the transformative power of outstanding design.",
  },
  {
    value: "+30",
    title: "Clients",
    description: "Bringing unique challenges that have enriched our creative journey and expanded our industry impact.",
  },
  {
    value: "+56",
    title: "Cases",
    description: "Our diverse project experience showcases our ability to tailor bespoke solutions that drive success",
  },
];

export const HomeImpactSection = () => {
  return (
    <section className="bg-brand-dark-bg py-16 text-zinc-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 lg:gap-8">
          {/* Desktop positioning classes are only applied on large screens */}
          <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
            <ImpactCard {...impactData[0]} />
          </div>
          <div className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2">
            <ImpactCard {...impactData[1]} />
          </div>
          <div className="lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3">
            <ImpactCard {...impactData[2]} />
          </div>
          <div className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
            <ImpactCard {...impactData[3]} />
          </div>
          <div className="lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4">
            <ImpactCard {...impactData[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

import { Title } from "@/components/Title";

export function HomeAboutSection() {
  return (
    <section className="bg-brand-dark-bg py-24 text-zinc-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-12 py-16 sm:py-24 md:py-32">
            <div className="col-span-9 col-start-1">
              <Title size="headline-large">
                From fast-growing startups to experienced companies, we deliver
                functional design, high-quality code and well-thought strategy
                to increase your odds of success in the digital world.
              </Title>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

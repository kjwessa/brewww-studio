export interface ServiceData {
  id: string;
  slug: string;
  published: boolean;
  featImg: string;
  featImgAlt: string;
  pageHero: {
    heroTitle: string;
    heroNumber: string;
  };
  pageIntro: {
    introTitle: string;
    introDescription: string;
  };
  card: {
    cardTitle: string;
    cardDescription: string;
  };
}

export interface ServicePageHero {
  pageHero: {
    heroTitle: string;
    heroNumber: string;
  };
}

export interface ServicePageImage {
  featImg: string;
  featImgAlt: string;
}

export interface ServicePageIntro {
  pageIntro: {
    introTitle: string;
    introDescription: string;
  };
}

export interface ServiceCard {
  image: string;
  imageAlt: string;
  slug: string;
  title: string;
  description: string;
}

function ServiceCard({
  image,
  imageAlt,
  slug,
  title,
  description,
}: ServiceCard) {
  return (
    <div>
      <h2 className="mb-3 text-3xl font-bold uppercase">{title}</h2>
      <div>
        <div className="relative h-32 w-full pb-[66%]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <p className="py-3 text-base">{description}</p>
      <LinkMain text="Learn More" link={`/services/${slug}`} size="medium" />
    </div>
  );
}

export function ServicesImpact() {
  return (
    <>
      <div className="bg-white text-stone-950">
        <div className="mx-auto w-full max-w-6xl px-8 py-24">
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

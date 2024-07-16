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
}

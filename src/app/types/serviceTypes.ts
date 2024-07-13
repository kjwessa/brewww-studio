export interface ServiceData {
  id: string;
  slug: string;
  published: boolean;
  featImg: string;
  featImgAlt: string;
  page: {
    pageTitle: string;
    pageNumber: string;
    pageIntro: {
      headline: string;
      description: string;
    };
  };
  card: {
    cardTitle: string;
    cardDescription: string;
  };
}

export interface ServicePageHero {
  page: {
    pageTitle: string;
    pageNumber: string;
  };
}

export interface ServicePageImage {
  featImg: string;
  featImgAlt: string;
}

export interface ServicePageIntro {}

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
  introSection: {
    headline: string;
    description: string;
  };
}

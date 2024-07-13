export interface Service {
  id: string;
  pageTitle: string;
  slug: string;
  featImg: string;
  featImgAlt: string;
  introSection: {
    headline: string;
    description: string;
  };
}

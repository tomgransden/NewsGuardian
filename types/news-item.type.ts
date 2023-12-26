export type INewsItem = {
  type: "liveblog" | "article";
  id: string;
  webTitle: string;
  fields: {
    thumbnail: string;
    trailText?: string;
    headline: string;
    byline: string;
    bodyText: string;
  };
};

export type INewsItem = {
  type: "liveblog" | "article";
  webTitle: string;

  fields: {
    thumbnail: string;
    trailText?: string;
  };
};

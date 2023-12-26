import { useState, useEffect, useCallback } from "react";

import { LiveBlogTile } from "../../components/live-blog-tile/live-blog-tile";
import { INewsItem } from "../../types/news-item.type";

export const useHome = () => {
  const [articles, setArticles] = useState<INewsItem[]>([]);

  useEffect(() => {
    fetch(
      "https://content.guardianapis.com/search?api-key=c6fccadc-4f48-455e-a3cc-192faafc75a8&show-fields=thumbnail,trailText",
    )
      .then((res) => res.json())
      .then((json) => setArticles(json.response.results));
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: INewsItem }) => <LiveBlogTile item={item} />,
    [],
  );

  return { renderItem, articles };
};

import { useState, useEffect, useCallback } from "react";

import { LiveBlogTile } from "../../components/live-blog-tile/live-blog-tile";
import { NewsItemTime } from "../../components/news-item-tile/news-item-tile";
import { INewsItem } from "../../types/news-item.type";

export const useHome = () => {
  const [articles, setArticles] = useState<INewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    setLoading(true);

    await fetch(
      `https://content.guardianapis.com/search?api-key=${process.env.EXPO_PUBLIC_GUARDIAN_API_KEY}&show-fields=thumbnail,trailText`,
    )
      .then((res) => res.json())
      .then((json) => setArticles(json.response.results)).finally(() => setLoading(false));


  }

  useEffect(() => {
    fetchArticles()
  }, []);

  const renderItem = useCallback(({ item }: { item: INewsItem }) => {
    return item.type === "liveblog" ? (
      <LiveBlogTile item={item} />
    ) : (
      <NewsItemTime item={item} />
    );
  }, []);

  return { renderItem, articles, fetchArticles, loading };
};

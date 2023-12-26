import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, Image, ScrollView } from "react-native";

import { INewsItem } from "../../types/news-item.type";

export default function Page() {
  const { rest } = useLocalSearchParams();

  const [article, setArticle] = useState<INewsItem | undefined>();

  useEffect(() => {
    fetch(
      `https://content.guardianapis.com/${(rest as string[])?.join(
        "/",
      )}?api-key=${process.env.EXPO_PUBLIC_GUARDIAN_API_KEY}&show-fields=all`,
    )
      .then((res) => res.json())
      .then((json) => setArticle(json.response.content));
  }, []);

  return (
    <ScrollView>
      <Image
        source={{ uri: article?.fields.thumbnail }}
        style={{ width: "100%", height: 200 }}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        {article?.fields?.headline}
      </Text>
      <Text style={{ fontSize: 16 }}>By {article?.fields.byline}</Text>
    </ScrollView>
  );
}

import { Text, View, Image } from "react-native";
import { WelcomeBanner } from "../components/welcome-banner/welcome-banner";
import { useCallback, useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";

export default function Page() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://content.guardianapis.com/search?api-key=c6fccadc-4f48-455e-a3cc-192faafc75a8&show-fields=thumbnail,trailText"
    )
      .then((res) => res.json())
      .then((json) => setArticles(json.response.results));
  }, []);

  console.log(articles);

  const renderItem = useCallback(
    ({ item }) => (
      <View
        style={{
          paddingBottom: 12,
          borderRadius: 8,
          borderWidth: 1,
          marginHorizontal: 16,
        }}
      >
        <Image
          style={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            width: "100%",
            height: 155,
            resizeMode: "cover",
          }}
          source={{
            uri:
              item?.fields?.["thumbnail"] ??
              "https://fakeimg.pl/400x100/cccccc/cccccc",
          }}
        />
        <View style={{ paddingHorizontal: 16 }}>
          <Text
            numberOfLines={3}
            style={{ fontWeight: "bold", marginTop: 12, fontSize: 22 }}
          >
            {item.webTitle}
          </Text>
          <Text numberOfLines={3} style={{ marginTop: 8, fontSize: 16 }}>
            {item.fields["trailText"]}
          </Text>
        </View>
      </View>
    ),
    []
  );
  return (
    <View style={{ flex: 1 }}>
      <WelcomeBanner />
      <FlashList
        estimatedItemSize={185}
        data={articles}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
      />
    </View>
  );
}

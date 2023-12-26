import { useMemo } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { INewsItem } from "../../types/news-item.type";

const styles = StyleSheet.create({
  headlineContainer: { paddingHorizontal: 16 },
  headline: { fontSize: 24, fontWeight: "bold" },
  trail: { marginTop: 24 },
  image: { width: "100%", height: 200, borderRadius: 8, marginTop: 8 },
});

export const NewsItemTime = ({ item }: { item: INewsItem }) => {
  const source = useMemo(
    () => ({
      uri: item.fields.thumbnail,
    }),
    [item.fields.thumbnail],
  );

  return (
    <>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>{item.webTitle}</Text>

        <Text style={styles.trail}>{item.fields.trailText}</Text>
      </View>

      <Image source={source} style={styles.image} />
    </>
  );
};

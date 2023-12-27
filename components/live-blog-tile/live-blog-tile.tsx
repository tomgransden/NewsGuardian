import { Link } from "expo-router";
import { useMemo } from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";

import { INewsItem } from "../../types/news-item.type";

const styles = StyleSheet.create({
  container: {
    height: 400,
    marginHorizontal: 16,
    paddingBottom: 12,
    borderRadius: 8,
    backgroundColor: "#005689",
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  headlineContainer: { paddingHorizontal: 16 },
  headline: {
    fontWeight: "bold",
    marginTop: 12,
    fontSize: 22,
    color: "#fff",
  },
  trail: { marginTop: 8, fontSize: 16, color: "#fff" },
});

export const LiveBlogTile = ({ item }: { item: INewsItem }) => {
  const source = useMemo(
    () => ({
      uri: item.fields["thumbnail"],
    }),
    [item.fields.thumbnail],
  );
  return (
    <Link href={`/article/${item.id}`} asChild>
      <Pressable style={styles.container}>
        <Image style={styles.image} source={source} />
        <View style={styles.headlineContainer}>
          <Text numberOfLines={3} style={styles.headline}>
            {item.webTitle}
          </Text>
          <Text numberOfLines={3} style={styles.trail}>
            {item.fields?.["trailText"]}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

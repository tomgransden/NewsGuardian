import { View, Image, Text } from "react-native";

import { INewsItem } from "../../types/news-item.type";

export const LiveBlogTile = ({ item }: { item: INewsItem }) => {
  console.log(item);

  return (
    <View
      style={{
        paddingBottom: 12,
        borderRadius: 8,
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
          {item.fields?.["trailText"]}
        </Text>
      </View>
    </View>
  );
};

import { FlashList } from "@shopify/flash-list";
import { StyleSheet, Text, View } from "react-native";

import { useHome } from "./hooks/use-home";

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 12,
    marginHorizontal: 16,
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgray",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  scrollContent: { paddingVertical: 20 },
  itemSeperator: { height: 20, justifyContent: "center" },
});

const ItemSeparatorComponent = () => <View style={styles.itemSeperator} />;

const ListHeaderComponent = () => (
  <>
    <Text style={styles.title}>Headlines</Text>
    <View style={styles.seperator} />
  </>
);

export default function Page() {
  const { articles, renderItem, fetchArticles, loading } = useHome();

  return (
    <View style={styles.container}>
      <FlashList
        refreshing={loading}
        onRefresh={fetchArticles}
        contentContainerStyle={styles.scrollContent}
        estimatedItemSize={185}
        data={articles}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        getItemType={(item) => item.type}
      />
    </View>
  );
}

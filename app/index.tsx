import { StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useHome } from "./hooks/use-home";

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {fontWeight: 'bold', fontSize: 24, marginBottom: 12, marginHorizontal: 16},
  seperator: {height: 1, backgroundColor: 'lightgray', marginHorizontal: 16, marginBottom: 16},
  scrollContent: {paddingTop: 20},
  itemSeperator: { height: 40 }
});

const ItemSeparatorComponent = () => <View style={styles.itemSeperator} />

const ListHeaderComponent = () => <><Text style={styles.title}>Headlines</Text>
<View style={styles.seperator}/></>

export default function Page() {

  const {articles, renderItem} = useHome();

  return (
    <View style={styles.container}>

      <FlashList
      contentContainerStyle={styles.scrollContent}
        estimatedItemSize={185}
        data={articles}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
}

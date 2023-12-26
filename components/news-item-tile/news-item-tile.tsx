import { View, Text, Image } from "react-native";

import { INewsItem } from "../../types/news-item.type";

export const NewsItemTime = ({ item }: { item: INewsItem }) => {
  return <View style={{ }}>
    <View style={{paddingHorizontal: 16}}>
    <Text style={{fontSize: 24, fontWeight: 'bold'}}>{item.webTitle}</Text>

    <Text style={{marginTop: 24}}>{item.fields.trailText}</Text>
    </View>

    <Image source={{uri: item.fields.thumbnail}} style={{width: '100%', height: 200, borderRadius: 8, marginTop: 8}}/>
  </View>;
};

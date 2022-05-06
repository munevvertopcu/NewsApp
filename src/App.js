import React from "react";
import { SafeAreaView, View, Dimensions, FlatList, StyleSheet, Image, ScrollView, Text } from "react-native";
import NewsCard from "./components/NewsCard";
import news_data from './news_data.json';
import news_data_banner from './news_data_banner.json'



function App() {

  const renderNews = ({ item }) => (<NewsCard news={item} />)
  return (
    <SafeAreaView style={styles.container}>



      <Text style={styles.title}>NEWS</Text>



      {/* instead of Scrolview
      <FlatList
      horizontal
      data={news_banner_data}
      renderItem={({item}) => <Image source={{uri: item.imageUrl}} style={styles.bannerImage}/>}/> */}

      <FlatList
        ListHeaderComponent={() => (<ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news_data_banner.map(bannerNews => (
            <Image
              key={bannerNews.id.toString()}
              style={styles.bannerImage}
              source={{ uri: bannerNews.imageUrl }} />
          ))}
        </ScrollView>)}
        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1'
  },
  bannerImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,

  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black'
  },
  bannerImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,

  },
})

export default App;
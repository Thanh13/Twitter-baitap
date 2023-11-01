import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TweetCard from '../components/TweetCard';
import DummyData from '../mock/DummyData';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerLeft: () => (
        <Image
          style={{ height: 30, width: 30, borderRadius:30, marginLeft:15 }}
          source={{
            uri:
              'https://i33.ntcdntempv26.com/data/images/9169/1073723/001-801faf1.jpg?data=nht' }}
        />
      ),
      headerTitle: ()=>(
        <FontAwesome5 name='twitter' size={25} color={'#00acee'} />
      )
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
});